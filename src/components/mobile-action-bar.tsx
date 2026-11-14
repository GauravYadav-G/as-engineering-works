"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { IconArrowUpRight, IconPhone } from "@/components/icons";
import { site } from "@/lib/site";

/**
 * Compact call / enquire bar for small screens. It appears once the visitor has
 * scrolled past the hero and steps aside near the page end so it never covers
 * the footer.
 */
export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrolled = window.scrollY;
      const nearEnd =
        scrolled + window.innerHeight >
        document.documentElement.scrollHeight - 260;
      setVisible(scrolled > 520 && !nearEnd);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-forest/[0.08] bg-white/95 px-4 pt-2.5 backdrop-blur-md transition-transform duration-300 ease-out lg:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-2.5">
        <a
          href={site.contact.phoneHref}
          className="btn btn-outline flex-1 px-4 py-2.5 text-[12.5px]"
          tabIndex={visible ? undefined : -1}
        >
          <IconPhone className="h-3.5 w-3.5" /> Call
        </a>
        <Link
          href="/contact"
          className="btn btn-dark flex-1 px-4 py-2.5 text-[12.5px]"
          tabIndex={visible ? undefined : -1}
        >
          Enquire <IconArrowUpRight className="h-3.5 w-3.5 opacity-75" />
        </Link>
      </div>
    </div>
  );
}
