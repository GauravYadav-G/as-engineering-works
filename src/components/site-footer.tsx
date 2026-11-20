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
          <Link href="/" className="flex w-fit items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/real/as-logo.png"
              alt="A.S. Engineering Works logo"
              className="h-13 w-13 rounded-xl bg-white object-contain p-1.5 sm:h-16 sm:w-16"
            />
            <span className="leading-none">
              <strong className="block text-[17px] font-bold tracking-[-0.02em] text-white sm:text-[19px]">
                A.S. Engineering Works
              </strong>
              <small className="mt-1.5 block font-mono text-[10.5px] font-medium tracking-[0.14em] text-white/55 uppercase sm:text-[11.5px]">
                Est. 1984 · Noida, India
              </small>
            </span>
          </Link>
          <p className="mt-6 max-w-[320px] text-[15px] leading-[1.8] text-white/65">
            Food processing machines, extruders, industrial dryers and flavouring systems manufactured in Noida, India.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/12 px-3.5 py-1.5 font-mono text-[11px] text-white/65">
              GST 09AHNPK3689D1ZX
            </span>
            <span className="rounded-full border border-white/12 px-3.5 py-1.5 font-mono text-[11px] text-white/65">
              IEC 0504026763
            </span>
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-white/45">Solutions</h2>
          <ul className="mt-5 space-y-3">
            {solutions.slice(0, 7).map((solution) => (
              <li key={solution.slug}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="text-[14.5px] text-white/70 transition hover:text-white"
                >
                  {solution.name}
                </Link>
              </li>
            ))}
            <li className="pt-1.5">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-brasslight transition hover:text-white"
              >
                All processing lines <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-white/45">Machines &amp; company</h2>
          <ul className="mt-5 space-y-3">
            {categories.slice(0, 6).map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/products?category=${category.slug}`}
                  className="text-[14.5px] text-white/70 transition hover:text-white"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li className="pt-1.5">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-brasslight transition hover:text-white"
              >
                Full catalogue <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[14px] text-white/60">
            <Link href="/about" className="transition hover:text-white">About us</Link>
            <Link href="/infrastructure" className="transition hover:text-white">Facility</Link>
            <Link href="/clients" className="transition hover:text-white">Clients</Link>
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-white/45">Contact</h2>
          <div className="mt-5 space-y-3.5 text-[14.5px] text-white/70">
            <div className="flex items-start gap-2.5">
              <IconMapPin className="mt-1 h-4 w-4 shrink-0 text-white/40" />
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
          <Link href="/contact" className="btn btn-ghost-light mt-6 w-full justify-between px-5 py-3 text-[14px]">
            Send a requirement <IconArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/[0.08] pb-16 lg:pb-0">
        <div className="wrap flex flex-col items-start justify-between gap-3 py-6 text-[12.5px] text-white/45 sm:flex-row sm:items-center">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="leading-relaxed">
            Designed and developed by{" "}
            <a
              href="https://www.arkatechnovation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/75 transition hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white"
            >
              Arka Technovation Private Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
