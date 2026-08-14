import Link from "next/link";
import { featureBlocks, pages, site } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-112px)] overflow-hidden border-b border-white/15">
        <div className="absolute inset-0 grid-line opacity-30" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(transparent,rgba(0,218,0,0.12))]" aria-hidden="true" />
        <div className="shell relative grid min-h-[calc(100vh-112px)] content-center gap-9 py-20">
          <div className="max-w-5xl">
            <p className="eyebrow">iamjohnnydeep.com / production signal</p>
            <h1 className="display mt-5 font-black">Johnny Deep</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 md:text-2xl md:leading-9">
              {site.tagline} An official black-site for music, live context, art projects, EPK, booking and archive material.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/music/" className="btn">
              Enter music hub
            </Link>
            <Link href="/booking/" className="btn btn-secondary">
              Booking signal
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {featureBlocks.map((block) => (
              <article key={block.title} className="panel p-5">
                <h2 className="mono text-sm font-black uppercase text-[var(--acid)]">{block.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/68">{block.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Site map</p>
            <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">Built for real material only.</h2>
            <p className="mt-5 text-white/66">
              Each section is live now with production structure and TODO markers where real content is still missing.
            </p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {pages.map((page, index) => (
              <Link key={page.slug} href={`/${page.slug}/`} className="panel group grid gap-4 p-5 transition hover:border-[var(--acid)]">
                <span className="mono text-xs text-white/42">0{index + 1}</span>
                <span className="text-2xl font-black uppercase group-hover:text-[var(--acid)]">{page.label}</span>
                <span className="text-sm leading-6 text-white/66">{page.intro}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
