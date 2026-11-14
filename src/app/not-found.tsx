import Link from "next/link";

import { IconArrowRight, IconArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-[#0e1113] py-28 text-white">
      <div className="wrap max-w-3xl">
        <p className="eyebrow text-brasslight">404 · Page not found</p>
        <h1 className="display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
          This page is off the line.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">
          The page you were looking for has moved or does not exist. The machine catalogue is the
          best place to start — or speak to our team directly.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/products" className="btn btn-light px-6 py-3">
            Browse machines <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-ghost-light px-6 py-3">
            Contact us <IconArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <p className="mt-10 font-mono text-[10.5px] tracking-[0.14em] text-white/40 uppercase">
          Or call {site.contact.phone}
        </p>
      </div>
    </section>
  );
}
