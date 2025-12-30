import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { ClientHeader } from "@/components/home/ClientHeader";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ---------------- METADATA ---------------- */

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,

    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
      url: `https://yourdomain.com/blog/${article.slug}`,
    },

    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },

    other: {
      "article:published_time": article.publishedAt,
    },
  };
}

/* ---------------- PAGE ---------------- */

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <ClientHeader />
      <article className="mx-auto max-w-3xl px-4 py-16">
        {/* Header */}
        <header className="mb-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{article.title}</h1>
        </header>

        {/* Published Date */}
        <time dateTime={article.publishedAt} className="mb-6 block text-sm text-muted-foreground">
          Published on {formattedDate}
        </time>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          {article.content.map((paragraph, index) => (
            <p key={index} className="py-3">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
