import { getPageBySlugWithYoast, getAllPages } from "@/lib/wordpress";
import type { Page } from "@/lib/wordpress.d";
import { Section, Container, Prose } from "@/components/craft";
import { generatePostMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

// Revalidate pages every hour
export const revalidate = 3600;

export async function generateStaticParams() {
  let pages: Page[] = [];

  try {
    pages = await getAllPages();
  } catch (error) {
    console.error(error);
  }

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; site: string }>;
}): Promise<Metadata> {
  const { slug, site } = await params;
  const page = await getPageBySlugWithYoast(slug, site);

  if (!page) {
    return {};
  }

  return generatePostMetadata(
    page.title.rendered,
    page.content.rendered,
    page.excerpt?.rendered,
    page.slug,
    site,
    "page",
    page.yoast_head_json
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; site: string }>;
}) {
  const { slug, site } = await params;
  const page = await getPageBySlugWithYoast(slug, site);

  return (
    <Section>
      <Container>
        <Prose>
          <h2>{page.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </Prose>
      </Container>
    </Section>
  );
}
