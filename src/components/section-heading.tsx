import Link from "next/link";
import type { ReactNode } from "react";

import { IconArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export function SectionHeading({
  eyebrow,
  title,
  description,
  link,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  link?: { href: string; label: string };
  tone?: "light" | "dark";
  align?: "left" | "between";
  className?: string;
}) {
  return (
    <Reveal
      className={cx(
        "flex flex-col gap-5",
        align === "between" && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        <p
          className={cx(
            "eyebrow",
            tone === "dark" ? "text-brasslight" : "text-sage",
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cx(
            "display mt-3.5 text-[clamp(1.85rem,3.4vw,2.75rem)]",
            tone === "dark" ? "text-white" : "text-forest",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cx(
              "mt-4 text-[14.5px] leading-[1.75]",
              tone === "dark" ? "text-white/60" : "text-sage",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {link && (
        <Link
          href={link.href}
          className={cx(
            "group inline-flex w-fit items-center gap-1.5 border-b pb-1 text-[13px] font-medium transition",
            tone === "dark"
              ? "border-white/25 text-white/85 hover:border-white hover:text-white"
              : "border-forest/20 text-forest/80 hover:border-forest hover:text-forest",
          )}
        >
          {link.label}
          <IconArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </Reveal>
  );
}
