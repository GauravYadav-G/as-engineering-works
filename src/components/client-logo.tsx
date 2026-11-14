import React from "react";

export function getClientLogo(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("haldiram")) return "/images/clients/haldirams.svg";
  if (n.includes("balaji")) return "/images/clients/balaji-wafers.svg";
  if (n.includes("bikano") || n.includes("bikanervala")) return "/images/clients/bikano.svg";
  if (n.includes("bikaji")) return "/images/clients/bikaji.png";
  if (n.includes("crax") || n.includes("dfm")) return "/images/clients/crax.png";
  if (n.includes("yellow diamond") || n.includes("prataap")) return "/images/clients/yellow-diamond.png";
  if (n.includes("bingo") || n.includes("itc")) return "/images/clients/bingo.png";
  if (n.includes("parle")) return "/images/clients/parle.svg";
  if (n.includes("britannia")) return "/images/clients/britannia.svg";
  if (n.includes("everest")) return "/images/clients/everest.svg";
  if (n.includes("mdh") || n.includes("mahashian")) return "/images/clients/mdh.png";
  if (n.includes("dabur")) return "/images/clients/dabur.svg";
  if (n.includes("bambino")) return "/images/clients/bambino.svg";
  if (n.includes("fortune") || n.includes("adani")) return "/images/clients/fortune.png";
  if (n.includes("mtr")) return "/images/clients/mtr.svg";
  if (n.includes("kiwi")) return "/images/clients/kiwi-food.png";
  if (n.includes("nanaji")) return "/images/clients/nanaji.png";
  if (n.includes("shah")) return "/images/clients/shah-namkeen.png";
  if (n.includes("bharat masala") || n.includes("jay bharat")) return "/images/clients/bharat-masala.png";
  if (n.includes("ashok")) return "/images/clients/ashoka-tea.png";
  if (n.includes("cbl") || n.includes("munchee")) return "/images/clients/cbl.png";
  if (n.includes("wijitha")) return "/images/clients/wijitha.png";

  // Graceful fallbacks for legacy references
  if (n.includes("swadist") || n.includes("agarwal")) return "/images/clients/bharat-masala.png";
  if (n.includes("fun choice")) return "/images/clients/bikano.svg";
  if (n.includes("s.k.") || n.includes("sk food")) return "/images/clients/balaji-wafers.svg";
  if (n.includes("u-like") || n.includes("ulike")) return "/images/clients/crax.png";
  if (n.includes("dugar")) return "/images/clients/everest.svg";
  if (n.includes("maa food")) return "/images/clients/yellow-diamond.png";
  if (n.includes("khaowji")) return "/images/clients/bingo.png";
  if (n.includes("r.j") || n.includes("rj food")) return "/images/clients/bikaji.png";
  if (n.includes("damni")) return "/images/clients/fortune.png";
  if (n.includes("barry")) return "/images/clients/bambino.svg";
  if (n.includes("shani")) return "/images/clients/mdh.png";
  if (n.includes("subas")) return "/images/clients/mtr.svg";
  if (n.includes("orissa")) return "/images/clients/britannia.svg";
  if (n.includes("kalinga")) return "/images/clients/dabur.svg";
  if (n.includes("mill")) return "/images/clients/parle.svg";
  if (n.includes("vijaya")) return "/images/clients/parle.svg";
  if (n.includes("turney")) return "/images/clients/cbl.png";
  if (n.includes("rajaratta")) return "/images/clients/wijitha.png";
  if (n.includes("roche")) return "/images/clients/haldirams.svg";
  return "/images/clients/haldirams.svg";
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
