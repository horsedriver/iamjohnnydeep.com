import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section min-h-[70vh]">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl font-black uppercase">Signal not found</h1>
        <p className="mt-5 max-w-xl text-white/66">The requested page is not part of the current official archive.</p>
        <Link href="/" className="btn mt-8">
          Return home
        </Link>
      </div>
    </section>
  );
}
