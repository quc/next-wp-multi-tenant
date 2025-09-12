import { getAllPages } from "@/lib/wordpress";
import type { Page } from "@/lib/wordpress.d";
import { Section, Container, Prose } from "@/components/craft";
import { generateArchiveMetadata } from "@/lib/metadata";
import BackButton from "@/components/back";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ site: string }>;
}): Promise<Metadata> {
  const { site } = await params;
  return generateArchiveMetadata(
    "All Pages",
    "Browse all pages of our website",
    "/pages",
    site
  );
}

export default async function Page() {
  let pages: Page[] = [];

  try {
    pages = await getAllPages();
  } catch (error) {
    console.error(error);
  }

  return (
    <Section>
      <Container className="space-y-6">
        <Prose className="mb-8">
          <h2>All Pages</h2>
          <ul className="grid">
            {pages.map((page: any) => (
              <li key={page.id}>
                <Link href={`/pages/${page.slug}`}>{page.title.rendered}</Link>
              </li>
            ))}
          </ul>
        </Prose>
        <BackButton />
      </Container>
    </Section>
  );
}
