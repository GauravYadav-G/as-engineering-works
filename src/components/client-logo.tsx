import React from "react";

export function getClientLogo(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("kiwi")) return "/images/clients/kiwi-food.png";
  if (n.includes("nanaji")) return "/images/clients/nanaji.png";
  if (n.includes("cbl")) return "/images/clients/cbl.png";
  if (n.includes("bharat masala") || n.includes("jay bharat")) return "/images/clients/bharat-masala.png";
  if (n.includes("ashok")) return "/images/clients/ashoka-tea.png";
  if (n.includes("shah")) return "/images/clients/shah-namkeen.png";
  if (n.includes("wijitha")) return "/images/clients/wijitha.png";
  if (n.includes("swadist") || n.includes("agarwal")) return "/images/clients/swadist-masala.svg";
  if (n.includes("fun choice")) return "/images/clients/fun-choice.svg";
  if (n.includes("s.k.") || n.includes("sk food")) return "/images/clients/sk-food.svg";
  if (n.includes("u-like") || n.includes("ulike")) return "/images/clients/u-like.svg";
  if (n.includes("dugar")) return "/images/clients/dugar-spices.svg";
  if (n.includes("maa food")) return "/images/clients/maa-food.svg";
  if (n.includes("khaowji")) return "/images/clients/khaowji.svg";
  if (n.includes("r.j") || n.includes("rj food")) return "/images/clients/rj-food.svg";
  if (n.includes("damni")) return "/images/clients/damni-food.svg";
  if (n.includes("barry")) return "/images/clients/barry-tarts.svg";
  if (n.includes("shani")) return "/images/clients/shani-food.svg";
  if (n.includes("subas")) return "/images/clients/subas-nutrition.svg";
  if (n.includes("orissa")) return "/images/clients/orissa-confectionery.svg";
  if (n.includes("kalinga")) return "/images/clients/kalinga-food.svg";
  if (n.includes("mill")) return "/images/clients/mill-machinery.svg";
  if (n.includes("vijaya")) return "/images/clients/vijaya-food.svg";
  if (n.includes("turney")) return "/images/clients/turney-biscuit.svg";
  if (n.includes("rajaratta")) return "/images/clients/rajaratta.svg";
  if (n.includes("roche")) return "/images/clients/roche.svg";
  return "/images/real/as-logo.png";
}

export function ClientLogo({
  name,
  size = 28,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const logo = getClientLogo(name);
  return (
    <img
      src={logo}
      alt={`${name} logo`}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={`object-contain shrink-0 ${className}`}
      loading="lazy"
    />
  );
}
