import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function IconExtrusion(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h8v8H3z" />
      <path d="M11 12h4" />
      <circle cx="18" cy="12" r="3" />
      <path d="M3 5v14M21 5v14" />
    </svg>
  );
}

export function IconDryer(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M4 8h16M8 8v13M16 8v13M8 13h8" />
    </svg>
  );
}

export function IconSeasoning(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="7" rx="7" ry="3" />
      <path d="M5 7v10c0 1.7 3.1 3 7 3s7-1.3 7-3V7" />
      <path d="M9 12c1 .8 5 .8 6 0" />
    </svg>
  );
}

export function IconPasta(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20c2-6 6-10 16-16" />
      <path d="M8 20c2-5 5-8 12-12" />
      <path d="M12 20c1.5-3.5 4-6 8-8" />
    </svg>
  );
}

export function IconSoya(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="9" r="3.2" />
      <circle cx="16" cy="8" r="2.4" />
      <circle cx="12" cy="15" r="2.8" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="15" r="2.2" />
    </svg>
  );
}

export function IconConveyor(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 15h18" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M3 11l5-4h13" />
      <path d="M8 7v4" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12.5 5 5L20 6" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l8 3v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function IconFactory(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V9l5 3V9l5 3V9l5 3v9z" />
      <path d="M3 21h18M7 17h3M14 17h3" />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconCog(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M4.2 6.7l2.6 1.5M17.2 15.8l2.6 1.5M2.5 12h3M18.5 12h3M4.2 17.3l2.6-1.5M17.2 8.2l2.6-1.5" />
    </svg>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c1 4 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 .3 1.6 1.2 2.5 2.2 2.8C11.5 8.6 12 6 12 3Z" />
    </svg>
  );
}

export function IconDoc(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </svg>
  );
}

export const capabilityIcons = {
  extrusion: IconExtrusion,
  dryer: IconDryer,
  seasoning: IconSeasoning,
  pasta: IconPasta,
  soya: IconSoya,
  conveyor: IconConveyor,
} as const;
