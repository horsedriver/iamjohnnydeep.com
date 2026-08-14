import Link from "next/link";
import { navItems, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 py-10">
      <div className="shell grid gap-8 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">End transmission</p>
          <p className="mt-3 max-w-sm text-sm text-white/62">
            Official website for {site.name}. Missing factual materials remain marked as TODO until approved.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="mono text-xs uppercase text-white/68 hover:text-[var(--acid)]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
