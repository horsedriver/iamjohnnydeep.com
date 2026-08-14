import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pages, site } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.intro,
    alternates: {
      canonical: `/${page.slug}/`,
    },
    openGraph: {
      title: `${page.title} | ${site.name}`,
      description: page.intro,
      url: `${site.domain}/${page.slug}/`,
    },
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <section className="section min-h-[72vh]">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">{page.label}</p>
          <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">{page.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/68">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/booking/" className="btn">
              Booking
            </Link>
            <Link href="/contact/" className="btn btn-secondary">
              Contact
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="panel grid-line min-h-52 p-5">
            <p className="mono text-xs uppercase text-[var(--acid)]">Content status</p>
            <p className="mt-16 max-w-md text-2xl font-black uppercase">
              Live structure. Awaiting verified primary material.
            </p>
          </div>
          {page.items.map((item) => (
            <article key={item} className="panel p-5">
              <p className="text-base leading-7 text-white/76">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
