import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: { href?: string; label: string }[];
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0e1113] text-white">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-y-0 right-0 hidden h-full w-[52%] object-cover opacity-40 lg:block"
          />
          <div className="absolute inset-y-0 right-0 hidden w-[52%] bg-gradient-to-r from-[#0e1113] via-[#0e1113]/65 to-transparent lg:block" />
        </>
      )}
      <div className="wrap relative py-16 md:py-24">
        <div className="max-w-2xl">
          {breadcrumb.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2 font-mono text-[11.5px] tracking-[0.14em] text-white/50 uppercase"
            >
              <Link href="/" className="transition hover:text-white/80">
                Home
              </Link>
              {breadcrumb.map((item) => (
                <span key={item.label} className="flex items-center gap-2">
                  <span className="text-white/20">/</span>
                  {item.href ? (
                    <Link href={item.href} className="transition hover:text-white/80">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <p className="eyebrow text-brasslight">{eyebrow}</p>
          <h1 className="display mt-4 text-[clamp(2.4rem,5.2vw,4.1rem)] text-white">{title}</h1>
          {description && (
            <p className="mt-5 max-w-xl text-[17px] sm:text-[18.5px] leading-[1.8] text-white/70">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export function BreadcrumbStrip({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <div className="border-b border-forest/[0.06] bg-white">
      <div className="wrap flex items-center gap-2 overflow-x-auto py-3.5 font-mono text-[11.5px] tracking-[0.14em] whitespace-nowrap text-sage uppercase hide-scrollbar">
        <Link href="/" className="transition hover:text-forest">
          Home
        </Link>
        {items.map((item) => (
          <span key={item.label} className="flex items-center gap-2">
            <span className="text-forest/20">/</span>
            {item.href ? (
              <Link href={item.href} className="transition hover:text-forest">
                {item.label}
              </Link>
            ) : (
              <span className="text-forest">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
