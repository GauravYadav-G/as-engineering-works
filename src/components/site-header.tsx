"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { solutions } from "@/data/solutions";
import { site } from "@/lib/site";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconChevronDown,
  IconClose,
  IconMenu,
} from "@/components/icons";

type NavCategory = { slug: string; name: string; kicker: string };

const links = [
  { label: "About us", href: "/about" },
  { label: "Solutions", href: "/solutions", menu: "solutions" },
  { label: "Machines", href: "/products", menu: "machines" },
  { label: "Facility", href: "/infrastructure" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader({ categories }: { categories: NavCategory[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<"solutions" | "machines" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"solutions" | "machines" | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: "solutions" | "machines") => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(null);
  };

  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
    handleClose();
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // A hairline shadow appears only once the page has moved, keeping the top of
  // the page completely flat and calm.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white/92 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-forest/[0.08] shadow-[0_1px_20px_-8px_rgba(17,20,22,0.18)]"
            : "border-forest/[0.06]"
        }`}
      >
        <div className="wrap flex h-[80px] items-center justify-between gap-4 lg:h-[88px] lg:gap-6">
        <Link
          href="/"
          aria-label="A.S. Engineering Works home"
          className="group flex shrink-0 items-center gap-3.5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/real/as-logo.png"
            alt="A.S. Engineering Works logo"
            className="h-11 w-11 object-contain sm:h-12 sm:w-12 lg:h-[52px] lg:w-[52px]"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[16px] font-bold tracking-[-0.02em] text-forest sm:text-[18px] lg:text-[19.5px]">
              A.S. Engineering Works
            </span>
            <span className="mt-1.5 hidden font-mono text-[10px] font-medium tracking-[0.14em] text-sage uppercase sm:inline sm:text-[11px]">
              Est. 1984 · Noida
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            const isDropdown = "menu" in link;
            const isOpen = isDropdown && activeMenu === link.menu;
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={isDropdown ? () => handleMouseEnter(link.menu) : undefined}
                onMouseLeave={isDropdown ? handleMouseLeave : undefined}
                onFocus={isDropdown ? () => handleMouseEnter(link.menu) : undefined}
                onBlur={
                  isDropdown
                    ? (e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                          handleClose();
                        }
                      }
                    : undefined
                }
              >
                <Link
                  href={link.href}
                  onClick={handleClose}
                  className={`flex h-[88px] items-center gap-1.5 px-3.5 text-[15px] font-medium tracking-[-0.005em] whitespace-nowrap transition-colors ${
                    active ? "text-forest font-semibold" : "text-forest/65 hover:text-forest"
                  }`}
                >
                  {link.label}
                  {isDropdown && (
                    <IconChevronDown
                      className={`h-3.5 w-3.5 opacity-55 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {active && (
                  <span className="pointer-events-none absolute inset-x-3.5 bottom-0 h-[2px] bg-forest" />
                )}
                {isDropdown && (
                  <div
                    className={`absolute top-full left-1/2 w-[580px] -translate-x-1/2 pt-2 transition-all duration-200 ${
                      isOpen
                        ? "visible translate-y-0 opacity-100 pointer-events-auto"
                        : "invisible translate-y-1.5 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="rounded-2xl border border-forest/[0.08] bg-white/98 p-6 shadow-[0_24px_60px_-20px_rgba(17,20,22,0.16)] backdrop-blur-xl">
                      <div className="mb-4 flex items-center justify-between border-b border-forest/[0.06] pb-3.5">
                        <span className="eyebrow text-sage">
                          {link.menu === "solutions" ? "By finished product" : "By machine category"}
                        </span>
                        <Link
                          href={link.href}
                          onClick={handleClose}
                          className="inline-flex items-center gap-1 text-[13.5px] font-medium text-forest/70 transition hover:text-forest"
                        >
                          View all <IconArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                        {link.menu === "solutions"
                          ? solutions.map((solution) => (
                              <Link
                                key={solution.slug}
                                href={`/solutions/${solution.slug}`}
                                onClick={handleClose}
                                className="rounded-lg px-2.5 py-2 text-[14px] font-medium text-forest/80 transition hover:bg-bone hover:text-forest"
                              >
                                {solution.name}
                              </Link>
                            ))
                          : categories.map((category) => (
                              <Link
                                key={category.slug}
                                href={`/products?category=${category.slug}`}
                                onClick={handleClose}
                                className="rounded-lg px-2.5 py-2 text-[14px] font-medium text-forest/80 transition hover:bg-bone hover:text-forest"
                              >
                                {category.name}
                              </Link>
                            ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between rounded-xl bg-bone px-4 py-3 text-[13.5px] text-sage">
                        <span>Custom specification needed?</span>
                        <Link
                          href="/contact"
                          onClick={handleClose}
                          className="font-medium text-forest transition hover:opacity-70"
                        >
                          Tell us your output →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <a
            href={site.contact.phoneHref}
            className="hidden whitespace-nowrap font-mono text-[13px] font-medium text-forest/65 transition hover:text-forest xl:inline-block"
          >
            {site.contact.phone}
          </a>
          <Link
            href="/contact"
            className="btn btn-dark hidden px-5 py-2.5 text-[14px] sm:inline-flex"
          >
            Enquire
            <IconArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-full border border-forest/12 text-forest transition hover:border-forest/35 lg:hidden"
          >
            {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[80px] bottom-0 z-50 overflow-y-auto border-t border-forest/[0.07] bg-white lg:hidden">
          <div className="wrap py-6">
            <nav aria-label="Mobile navigation" className="divide-y divide-forest/[0.07]">
              <Link
                href="/"
                className="flex items-center justify-between py-4 text-[17.5px] font-medium text-forest"
              >
                Home
                <IconArrowUpRight className="h-4 w-4 text-sage" />
              </Link>
              {links.map((link) => (
                <div key={link.label}>
                  <div className="flex items-center justify-between gap-2 py-4">
                    <Link href={link.href} className="flex-1 text-[17.5px] font-medium text-forest">
                      {link.label}
                    </Link>
                    {"menu" in link ? (
                      <button
                        type="button"
                        aria-label={`Expand ${link.label}`}
                        aria-expanded={mobileSection === link.menu}
                        onClick={() =>
                          setMobileSection((current) =>
                            current === link.menu ? null : link.menu,
                          )
                        }
                        className="grid h-9 w-9 place-items-center rounded-full border border-forest/12 text-forest/70"
                      >
                        <IconChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileSection === link.menu ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <IconArrowUpRight className="h-4 w-4 text-sage" />
                    )}
                  </div>
                  {"menu" in link && mobileSection === link.menu && (
                    <div className="mb-3 grid gap-1.5 rounded-xl bg-bone p-3 sm:grid-cols-2">
                      {link.menu === "solutions"
                        ? solutions.map((solution) => (
                            <Link
                              key={solution.slug}
                              href={`/solutions/${solution.slug}`}
                              className="rounded-lg px-3 py-2.5 text-[14.5px] text-forest/80 hover:bg-white hover:text-forest"
                            >
                              {solution.name}
                            </Link>
                          ))
                        : categories.map((category) => (
                            <Link
                              key={category.slug}
                              href={`/products?category=${category.slug}`}
                              className="rounded-lg px-3 py-2.5 text-[14.5px] text-forest/80 hover:bg-white hover:text-forest"
                            >
                              {category.name}
                            </Link>
                          ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8 rounded-2xl bg-forest p-6 text-white">
              <p className="eyebrow text-brasslight">Direct line</p>
              <a href={site.contact.phoneHref} className="mt-2 block text-[22px] font-medium tracking-tight">
                {site.contact.phone}
              </a>
              <p className="mt-1 text-[14px] text-white/60">{site.contact.email}</p>
              <Link href="/contact" className="btn btn-light mt-6 w-full text-[15px]">
                Request a quotation <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
