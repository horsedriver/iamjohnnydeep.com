import Link from "next/link";
import { navItems, site } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/15 bg-black/88 backdrop-blur">
      <div className="shell flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex items-center gap-3" aria-label="Johnny Deep home">
          <span className="grid h-9 w-9 place-items-center border border-[var(--acid)] text-sm font-black text-[var(--acid)]">
            JD
          </span>
          <span className="leading-none">
            <span className="block text-sm font-black uppercase">{site.name}</span>
            <span className="mono block text-[0.65rem] uppercase text-white/55">official signal</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mono px-2.5 py-2 text-[0.68rem] font-bold uppercase text-white/68 hover:text-[var(--acid)] focus-visible:text-[var(--acid)] focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/booking/" className="btn btn-secondary hidden sm:inline-flex">
          Book
        </Link>
      </div>
      <nav aria-label="Mobile navigation" className="shell flex gap-2 overflow-x-auto border-t border-white/10 py-2 lg:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mono shrink-0 border border-white/15 px-3 py-2 text-[0.68rem] font-bold uppercase text-white/72"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
