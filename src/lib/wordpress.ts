// Description: WordPress API functions
// Used to fetch data from a WordPress site using the WordPress REST API
// Types are imported from `wp.d.ts`
// Supports both single-site and multisite configurations

import querystring from "query-string";
import type {
  Post,
  Category,
  Tag,
  Page,
  Author,
  FeaturedMedia,
} from "./wordpress.d";

// Import HeadstartWP configuration for multisite support
import headstartwpConfig from "../../headstartwp.config.js";

// Site configuration type
interface SiteConfig {
  slug: string;
  sourceUrl: string;
  hostUrl: string;
  locale?: string;
}

// Get WordPress base URL for a specific site
function getWordPressBaseUrl(siteSlug?: string): string {
  // If siteSlug is provided, use multisite configuration
  if (siteSlug && headstartwpConfig.sites) {
    const site = headstartwpConfig.sites.find((s: any) => s.slug === siteSlug);
    if (site?.sourceUrl) {
      return site.sourceUrl;
    }
  }
    
  // Final fallback to HeadstartWP default
  if (process.env.NEXT_PUBLIC_HEADLESS_WP_URL) {
    return process.env.NEXT_PUBLIC_HEADLESS_WP_URL;
  }
  
  throw new Error("No WordPress URL configured. Set NEXT_PUBLIC_HEADLESS_WP_URL or configure sites in headstartwp.config.js");
}

class WordPressAPIError extends Error {
  constructor(message: string, public status: number, public endpoint: string) {
    super(message);
    this.name = "WordPressAPIError";
  }
}

// New types for pagination support
export interface WordPressPaginationHeaders {
  total: number;
  totalPages: number;
}

export interface WordPressResponse<T> {
  data: T;
  headers: WordPressPaginationHeaders;
}

// Core fetch function with multisite support
async function wordpressFetch<T>(
  path: string,
  query?: Record<string, any>,
  siteSlug?: string
): Promise<T> {
  const baseUrl = getWordPressBaseUrl(siteSlug);
  const url = `${baseUrl}${path}${
    query ? `?${querystring.stringify(query)}` : ""
  }`;
  const userAgent = "Next.js WordPress Client";

  // Create cache tags based on site
  const cacheTags = siteSlug ? [`wordpress-${siteSlug}`, "wordpress"] : ["wordpress"];

  const response = await fetch(url, {
    headers: {
      "User-Agent": userAgent,
    },
    next: {
      tags: cacheTags,
      revalidate: 3600, // 1 hour cache
    },
  });

  if (!response.ok) {
    throw new WordPressAPIError(
      `WordPress API request failed: ${url} ${response.statusText}`,
      response.status,
      url
    );
  }

  return response.json();
}

// Function for paginated requests with multisite support
async function wordpressFetchWithPagination<T>(
  path: string,
  query?: Record<string, any>,
  siteSlug?: string
): Promise<WordPressResponse<T>> {
  const baseUrl = getWordPressBaseUrl(siteSlug);
  const url = `${baseUrl}${path}${
    query ? `?${querystring.stringify(query)}` : ""
  }`;
  const userAgent = "Next.js WordPress Client";

  // Create cache tags based on site
  const cacheTags = siteSlug ? [`wordpress-${siteSlug}`, "wordpress"] : ["wordpress"];

  const response = await fetch(url, {
    headers: {
      "User-Agent": userAgent,
    },
    next: {
      tags: cacheTags,
      revalidate: 3600, // 1 hour cache
    },
  });

  if (!response.ok) {
    throw new WordPressAPIError(
      `WordPress API request failed: ${response.statusText}`,
      response.status,
      url
    );
  }

  const data = await response.json();

  return {
    data,
    headers: {
      total: parseInt(response.headers.get("X-WP-Total") || "0", 10),
      totalPages: parseInt(response.headers.get("X-WP-TotalPages") || "0", 10),
    },
  };
}

// Function for paginated posts with multisite support
export async function getPostsPaginated(
  page: number = 1,
  perPage: number = 9,
  filterParams?: {
    author?: string;
    tag?: string;
    category?: string;
    search?: string;
  },
  siteSlug?: string
): Promise<WordPressResponse<Post[]>> {
  const query: Record<string, any> = {
    _embed: true,
    per_page: perPage,
    page,
  };

  // Build cache tags based on filters and site
  const cacheTags = siteSlug ? [`wordpress-${siteSlug}`, "wordpress", "posts"] : ["wordpress", "posts"];

  if (filterParams?.search) {
    query.search = filterParams.search;
    cacheTags.push("posts-search");
  }
  if (filterParams?.author) {
    query.author = filterParams.author;
    cacheTags.push(`posts-author-${filterParams.author}`);
  }
  if (filterParams?.tag) {
    query.tags = filterParams.tag;
    cacheTags.push(`posts-tag-${filterParams.tag}`);
  }
  if (filterParams?.category) {
    query.categories = filterParams.category;
    cacheTags.push(`posts-category-${filterParams.category}`);
  }

  // Add page-specific cache tag for granular invalidation
  cacheTags.push(`posts-page-${page}`);

  const baseUrl = getWordPressBaseUrl(siteSlug);
  const url = `${baseUrl}/wp-json/wp/v2/posts${
    query ? `?${querystring.stringify(query)}` : ""
  }`;
  const userAgent = "Next.js WordPress Client";

  const response = await fetch(url, {
    headers: {
      "User-Agent": userAgent,
    },
    next: {
      tags: cacheTags,
      revalidate: 3600, // 1 hour cache
    },
  });

  if (!response.ok) {
    throw new WordPressAPIError(
      `WordPress API request failed: ${response.statusText}`,
      response.status,
      url
    );
  }

  const data = await response.json();

  return {
    data,
    headers: {
      total: parseInt(response.headers.get("X-WP-Total") || "0", 10),
      totalPages: parseInt(response.headers.get("X-WP-TotalPages") || "0", 10),
    },
  };
}

export async function getAllPosts(
  filterParams?: {
    author?: string;
    tag?: string;
    category?: string;
    search?: string;
  },
  siteSlug?: string
): Promise<Post[]> {
  const query: Record<string, any> = {
    _embed: true,
    per_page: 100,
  };

  if (filterParams?.search) {
    query.search = filterParams.search;

    if (filterParams?.author) {
      query.author = filterParams.author;
    }
    if (filterParams?.tag) {
      query.tags = filterParams.tag;
    }
    if (filterParams?.category) {
      query.categories = filterParams.category;
    }
  } else {
    if (filterParams?.author) {
      query.author = filterParams.author;
    }
    if (filterParams?.tag) {
      query.tags = filterParams.tag;
    }
    if (filterParams?.category) {
      query.categories = filterParams.category;
    }
  }

  return wordpressFetch<Post[]>("/wp-json/wp/v2/posts", query, siteSlug);
}

export async function getPostById(id: number, siteSlug?: string): Promise<Post> {
  return wordpressFetch<Post>(`/wp-json/wp/v2/posts/${id}`, undefined, siteSlug);
}

export async function getPostBySlug(slug: string, siteSlug?: string): Promise<Post> {
  return wordpressFetch<Post[]>("/wp-json/wp/v2/posts", { slug }, siteSlug).then(
    (posts) => posts[0]
  );
}

export async function getAllCategories(): Promise<Category[]> {
  return wordpressFetch<Category[]>("/wp-json/wp/v2/categories");
}

export async function getCategoryById(id: number): Promise<Category> {
  return wordpressFetch<Category>(`/wp-json/wp/v2/categories/${id}`);
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  return wordpressFetch<Category[]>("/wp-json/wp/v2/categories", { slug }).then(
    (categories) => categories[0]
  );
}

export async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  return wordpressFetch<Post[]>("/wp-json/wp/v2/posts", {
    categories: categoryId,
  });
}

export async function getPostsByTag(tagId: number): Promise<Post[]> {
  return wordpressFetch<Post[]>("/wp-json/wp/v2/posts", { tags: tagId });
}

export async function getTagsByPost(postId: number): Promise<Tag[]> {
  return wordpressFetch<Tag[]>("/wp-json/wp/v2/tags", { post: postId });
}

export async function getAllTags(): Promise<Tag[]> {
  return wordpressFetch<Tag[]>("/wp-json/wp/v2/tags");
}

export async function getTagById(id: number): Promise<Tag> {
  return wordpressFetch<Tag>(`/wp-json/wp/v2/tags/${id}`);
}

export async function getTagBySlug(slug: string): Promise<Tag> {
  return wordpressFetch<Tag[]>("/wp-json/wp/v2/tags", { slug }).then(
    (tags) => tags[0]
  );
}

export async function getAllPages(): Promise<Page[]> {
  return wordpressFetch<Page[]>("/wp-json/wp/v2/pages");
}

export async function getPageById(id: number): Promise<Page> {
  return wordpressFetch<Page>(`/wp-json/wp/v2/pages/${id}`);
}

export async function getPageBySlug(slug: string): Promise<Page> {
  return wordpressFetch<Page[]>("/wp-json/wp/v2/pages", { slug }).then(
    (pages) => pages[0]
  );
}

export async function getAllAuthors(): Promise<Author[]> {
  return wordpressFetch<Author[]>("/wp-json/wp/v2/users");
}

export async function getAuthorById(id: number): Promise<Author> {
  return wordpressFetch<Author>(`/wp-json/wp/v2/users/${id}`);
}

export async function getAuthorBySlug(slug: string): Promise<Author> {
  return wordpressFetch<Author[]>("/wp-json/wp/v2/users", { slug }).then(
    (users) => users[0]
  );
}

export async function getPostsByAuthor(authorId: number): Promise<Post[]> {
  return wordpressFetch<Post[]>("/wp-json/wp/v2/posts", { author: authorId });
}

export async function getPostsByAuthorSlug(
  authorSlug: string
): Promise<Post[]> {
  const author = await getAuthorBySlug(authorSlug);
  return wordpressFetch<Post[]>("/wp-json/wp/v2/posts", { author: author.id });
}

export async function getPostsByCategorySlug(
  categorySlug: string
): Promise<Post[]> {
  const category = await getCategoryBySlug(categorySlug);
  return wordpressFetch<Post[]>("/wp-json/wp/v2/posts", {
    categories: category.id,
  });
}

export async function getPostsByTagSlug(tagSlug: string): Promise<Post[]> {
  const tag = await getTagBySlug(tagSlug);
  return wordpressFetch<Post[]>("/wp-json/wp/v2/posts", { tags: tag.id });
}

export async function getFeaturedMediaById(id: number): Promise<FeaturedMedia> {
  return wordpressFetch<FeaturedMedia>(`/wp-json/wp/v2/media/${id}`);
}

export async function searchCategories(query: string): Promise<Category[]> {
  return wordpressFetch<Category[]>("/wp-json/wp/v2/categories", {
    search: query,
    per_page: 100,
  });
}

export async function searchTags(query: string): Promise<Tag[]> {
  return wordpressFetch<Tag[]>("/wp-json/wp/v2/tags", {
    search: query,
    per_page: 100,
  });
}

export async function searchAuthors(query: string): Promise<Author[]> {
  return wordpressFetch<Author[]>("/wp-json/wp/v2/users", {
    search: query,
    per_page: 100,
  });
}

// Function specifically for generateStaticParams - fetches ALL posts
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  const allSlugs: { slug: string }[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await wordpressFetchWithPagination<Post[]>(
      "/wp-json/wp/v2/posts",
      {
        per_page: 100,
        page,
        _fields: "slug", // Only fetch slug field for performance
      }
    );

    const posts = response.data;
    allSlugs.push(...posts.map((post) => ({ slug: post.slug })));

    hasMore = page < response.headers.totalPages;
    page++;
  }

  return allSlugs;
}

// Enhanced pagination functions for specific queries
export async function getPostsByCategoryPaginated(
  categoryId: number,
  page: number = 1,
  perPage: number = 9
): Promise<WordPressResponse<Post[]>> {
  const query = {
    _embed: true,
    per_page: perPage,
    page,
    categories: categoryId,
  };

  return wordpressFetchWithPagination<Post[]>("/wp-json/wp/v2/posts", query);
}

export async function getPostsByTagPaginated(
  tagId: number,
  page: number = 1,
  perPage: number = 9
): Promise<WordPressResponse<Post[]>> {
  const query = {
    _embed: true,
    per_page: perPage,
    page,
    tags: tagId,
  };

  return wordpressFetchWithPagination<Post[]>("/wp-json/wp/v2/posts", query);
}

export async function getPostsByAuthorPaginated(
  authorId: number,
  page: number = 1,
  perPage: number = 9
): Promise<WordPressResponse<Post[]>> {
  const query = {
    _embed: true,
    per_page: perPage,
    page,
    author: authorId,
  };

  return wordpressFetchWithPagination<Post[]>("/wp-json/wp/v2/posts", query);
}

// ============================================================================
// SITE METADATA FUNCTIONS
// ============================================================================

// WordPress site information interface
export interface WordPressSiteInfo {
  name: string;
  description: string;
  url: string;
  home: string;
  gmt_offset: string;
  timezone_string: string;
  namespaces: string[];
  authentication: {
    oauth1: boolean;
    application_passwords: boolean;
  };
  routes: Record<string, any>;
  _links: Record<string, any>;
}

// Fetch WordPress site information
export async function getWordPressSiteInfo(siteSlug?: string): Promise<WordPressSiteInfo> {
  return wordpressFetch<WordPressSiteInfo>("/wp-json/", undefined, siteSlug);
}

// Generate site metadata from WordPress
export async function generateSiteMetadata(siteSlug?: string): Promise<{
  title: string;
  description: string;
  url: string;
  siteName: string;
}> {
  try {
    const siteInfo = await getWordPressSiteInfo(siteSlug);

    return {
      title: siteInfo.name,
      description: siteInfo.description,
      url: siteInfo.url || siteInfo.home,
      siteName: siteInfo.name
    };
  } catch (error) {
    console.error('Error fetching WordPress site metadata:', error);
    return {
      title: '',
      description: '',
      url: '',
      siteName: ''
    };
  }
}

// ============================================================================
// YOAST SEO FUNCTIONS
// ============================================================================

import type { YoastSEO, PostWithYoast } from "./wordpress.d";

// Fetch post with Yoast SEO data
export async function getPostBySlugWithYoast(slug: string, siteSlug?: string): Promise<PostWithYoast> {
  const posts = await wordpressFetch<PostWithYoast[]>("/wp-json/wp/v2/posts", { 
    slug,
    _embed: true,
    yoast_head: true,
    yoast_head_json: true
  }, siteSlug);
  return posts[0];
}

// Fetch page with Yoast SEO data
export async function getPageBySlugWithYoast(slug: string, siteSlug?: string): Promise<PostWithYoast> {
  const pages = await wordpressFetch<PostWithYoast[]>("/wp-json/wp/v2/pages", { 
    slug,
    _embed: true,
    yoast_head: true,
    yoast_head_json: true
  }, siteSlug);
  return pages[0];
}

// Generate metadata from Yoast SEO data
export function generateYoastMetadata(yoastData: YoastSEO, fallbackTitle: string, fallbackDescription: string): {
  title?: string;
  description?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
  };
  alternates?: {
    canonical?: string;
  };
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    title?: string;
    description?: string;
    images?: string[];
  };
} {
  const metadata: any = {};

  // Title
  if (yoastData.title) {
    metadata.title = yoastData.title;
  }

  // Description
  if (yoastData.metaDesc) {
    metadata.description = yoastData.metaDesc;
  }

  // Robots
  if (yoastData.metaRobotsNoindex || yoastData.metaRobotsNofollow) {
    metadata.robots = {
      index: yoastData.metaRobotsNoindex !== "noindex",
      follow: yoastData.metaRobotsNofollow !== "nofollow",
    };
  }

  // Canonical URL
  if (yoastData.canonical) {
    metadata.alternates = {
      canonical: yoastData.canonical,
    };
  }

  // Open Graph
  if (yoastData.ogTitle || yoastData.ogDescription || yoastData.ogImage) {
    metadata.openGraph = {};
    
    if (yoastData.ogTitle) {
      metadata.openGraph.title = yoastData.ogTitle;
    }
    
    if (yoastData.ogDescription) {
      metadata.openGraph.description = yoastData.ogDescription;
    }
    
    if (yoastData.ogImage) {
      metadata.openGraph.images = [{
        url: yoastData.ogImage.url,
        width: yoastData.ogImage.width,
        height: yoastData.ogImage.height,
        alt: yoastData.ogTitle || fallbackTitle,
      }];
    }
  }

  // Twitter
  if (yoastData.twitterTitle || yoastData.twitterDescription || yoastData.twitterImage) {
    metadata.twitter = {};
    
    if (yoastData.twitterTitle) {
      metadata.twitter.title = yoastData.twitterTitle;
    }
    
    if (yoastData.twitterDescription) {
      metadata.twitter.description = yoastData.twitterDescription;
    }
    
    if (yoastData.twitterImage) {
      metadata.twitter.images = [yoastData.twitterImage.url];
    }
  }

  return metadata;
}

// ============================================================================
// MULTISITE SUPPORT
// ============================================================================
// 
// This file now supports both single-site and multisite configurations.
// 
// For multisite usage, pass the siteSlug parameter to any function:
// 
// Example usage:
// const posts = await getPostsPaginated(1, 9, undefined, 'tubemagnet');
// const post = await getPostBySlug('my-post', 'js1');
// const categories = await getAllCategories('tubemagnet');
//
// Environment variables needed for multisite:
// - NEXT_PUBLIC_HEADLESS_WP_URL_TUBEMAGNET (for tubemagnet site)
// - NEXT_PUBLIC_HEADLESS_WP_URL_JS1 (for js1 site)
// - NEXT_PUBLIC_HEADLESS_WP_URL (fallback)
//
// The functions will automatically resolve the correct WordPress URL based on:
// 1. The siteSlug parameter (if provided)
// 2. NEXT_PUBLIC_HEADLESS_WP_URL (final fallback)
