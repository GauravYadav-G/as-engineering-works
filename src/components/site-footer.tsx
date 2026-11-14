import Link from "next/link";

import { solutions } from "@/data/solutions";
import { site } from "@/lib/site";
import { IconArrowRight, IconArrowUpRight, IconMail, IconMapPin, IconPhone } from "@/components/icons";

type FooterCategory = { slug: string; name: string };

export function SiteFooter({ categories }: { categories: FooterCategory[] }) {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0d1012] text-white">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.1fr] lg:gap-14 lg:py-24">
        <div>
          <Link href="/" className="flex w-fit items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/real/as-logo.png"
              alt="A.S. Engineering Works logo"
              className="h-10 w-10 rounded-lg bg-white object-contain p-1"
            />
            <span className="leading-none">
              <strong className="block text-[15px] font-semibold tracking-[-0.02em] text-white">
                A.S. Engineering Works
              </strong>
              <small className="mt-1.5 block font-mono text-[9px] tracking-[0.14em] text-white/45 uppercase">
                Est. 1984 · Noida, India
              </small>
            </span>
          </Link>
          <p className="mt-6 max-w-[310px] text-[13.5px] leading-[1.75] text-white/55">
            Food processing machines, extruders, industrial dryers and flavouring systems manufactured in Noida, India.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[9.5px] text-white/55">
              GST 09AHNPK3689D1ZX
            </span>
            <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[9.5px] text-white/55">
              IEC 0504026763
            </span>
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-white/40">Solutions</h2>
          <ul className="mt-5 space-y-2.5">
            {solutions.slice(0, 7).map((solution) => (
              <li key={solution.slug}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="text-[13px] text-white/65 transition hover:text-white"
                >
                  {solution.name}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brasslight transition hover:text-white"
              >
                All processing lines <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-white/40">Machines &amp; company</h2>
          <ul className="mt-5 space-y-2.5">
            {categories.slice(0, 6).map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/products?category=${category.slug}`}
                  className="text-[13px] text-white/65 transition hover:text-white"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brasslight transition hover:text-white"
              >
                Full catalogue <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[12.5px] text-white/55">
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/infrastructure" className="transition hover:text-white">Facility</Link>
            <Link href="/clients" className="transition hover:text-white">Clients</Link>
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-white/40">Contact</h2>
          <div className="mt-5 space-y-3.5 text-[13px] text-white/65">
            <div className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <span>
                {site.contact.address.lines.map((line) => (
                  <span key={line} className="block leading-[1.6]">
                    {line}
                  </span>
                ))}
              </span>
            </div>
            <a href={site.contact.phoneHref} className="flex items-center gap-2.5 transition hover:text-white">
              <IconPhone className="h-4 w-4 shrink-0 text-white/40" />
              {site.contact.phone}
            </a>
            <a
              href={site.contact.emailHref}
              className="flex items-center gap-2.5 break-all transition hover:text-white"
            >
              <IconMail className="h-4 w-4 shrink-0 text-white/40" />
              {site.contact.email}
            </a>
          </div>
          <Link href="/contact" className="btn btn-ghost-light mt-6 w-full justify-between px-5 py-3 text-[12.5px]">
            Send a requirement <IconArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/[0.08] pb-16 lg:pb-0">
        <div className="wrap flex flex-col gap-3 py-6 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl leading-relaxed">
            © {new Date().getFullYear()} {site.name}. All rights reserved.{" "}
            <span className="block pt-1 text-white/30">{site.imageNote}</span>
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] tracking-[0.06em] text-white/35">
            <span>Noida · Uttar Pradesh · India</span>
            <Link href="/image-credits" className="transition hover:text-white/70">Image credits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
