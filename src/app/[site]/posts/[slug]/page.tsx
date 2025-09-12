import { getPostBySlugWithYoast, getAllPostSlugs } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { generatePostMetadata } from "@/lib/metadata";
import BackButton from "@/components/back";
import type { Metadata } from "next";

// Revalidate posts every hour
export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; site: string }>;
}): Promise<Metadata> {
  const { slug, site } = await params;
  const post = await getPostBySlugWithYoast(slug, site);

  if (!post) {
    return {};
  }

  return generatePostMetadata(
    post.title.rendered,
    post.content.rendered,
    post.excerpt?.rendered,
    post.slug,
    site,
    "post",
    post.yoast_head_json
  );
}

export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string; site: string }> 
}) {
  const { slug, site } = await params;
  const post = await getPostBySlugWithYoast(slug, site);

  if (!post) {
    return (
      <Section>
        <Container>
          <Prose>
            <h1>Post Not Found</h1>
            <p>The post you&apos;re looking for doesn&apos;t exist.</p>
          </Prose>
          <BackButton />
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container className="space-y-6">
        <Prose className="mb-8">
          <h1>{post.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Prose>
        <BackButton />
      </Container>
    </Section>
  );
}
