import React from "react";

export type ClientBrandInfo = {
  brandName: string;
  legalName: string;
  initials: string;
  category: string;
  theme: {
    bg: string;
    border: string;
    text: string;
    accent: string;
  };
};

const CLIENT_BRANDS: Record<
  string,
  {
    brandName: string;
    initials: string;
    category: string;
    theme: { bg: string; border: string; text: string; accent: string };
    renderLogo: (size: number) => React.ReactNode;
  }
> = {
  "Fun Choice Pvt Ltd": {
    brandName: "Fun Choice",
    initials: "FC",
    category: "Puff & Extruded Snacks",
    theme: { bg: "#eef2ff", border: "#c7d2fe", text: "#4338ca", accent: "#6366f1" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#4338ca" />
        <circle cx="24" cy="24" r="16" fill="#3730a3" />
        <path d="M24 13v22M13 24h22" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="10" fill="#4f46e5" />
        <text
          x="24"
          y="28.5"
          fill="#ffffff"
          fontSize="14"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="-0.5"
        >
          FC
        </text>
      </svg>
    ),
  },
  "Kiwi Food India (P) Ltd": {
    brandName: "Kiwi Foods",
    initials: "KF",
    category: "Confectionery & Snacks",
    theme: { bg: "#ecfdf5", border: "#a7f3d0", text: "#065f46", accent: "#10b981" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#065f46" />
        <ellipse cx="24" cy="24" rx="17" ry="17" fill="#047857" />
        <ellipse cx="24" cy="24" rx="12" ry="12" fill="#10b981" />
        <ellipse cx="24" cy="24" rx="7" ry="7" fill="#ecfdf5" />
        <circle cx="24" cy="21" r="1" fill="#065f46" />
        <circle cx="27" cy="24" r="1" fill="#065f46" />
        <circle cx="21" cy="24" r="1" fill="#065f46" />
        <circle cx="24" cy="27" r="1" fill="#065f46" />
        <text
          x="24"
          y="42"
          fill="#ffffff"
          fontSize="7.5"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          KIWI
        </text>
      </svg>
    ),
  },
  "S.K. Food Products (P) Ltd": {
    brandName: "S.K. Food",
    initials: "SK",
    category: "Packaged Snacks",
    theme: { bg: "#eff6ff", border: "#bfdbfe", text: "#1e40af", accent: "#3b82f6" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#1e3a8a" />
        <path d="M24 10l12 7v14l-12 7-12-7V17l12-7z" fill="#1d4ed8" />
        <path d="M24 14l8 4.6v9.2l-8 4.6-8-4.6V18.6l8-4.6z" stroke="#93c5fd" strokeWidth="1.5" />
        <text
          x="24"
          y="29"
          fill="#ffffff"
          fontSize="13"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          SK
        </text>
      </svg>
    ),
  },
  "U-Like Food Products (P) Ltd": {
    brandName: "U-Like",
    initials: "UL",
    category: "Extruded Snacks",
    theme: { bg: "#fffbeb", border: "#fde68a", text: "#92400e", accent: "#f59e0b" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#b45309" />
        <circle cx="24" cy="24" r="16" fill="#d97706" />
        <path d="M16 26c2 4.5 14 4.5 16 0" stroke="#fef3c7" strokeWidth="3" strokeLinecap="round" />
        <text
          x="24"
          y="23"
          fill="#ffffff"
          fontSize="11"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="-0.2"
        >
          U-LIKE
        </text>
      </svg>
    ),
  },
  "Shah Namkeen (P) Ltd": {
    brandName: "Shah Namkeen",
    initials: "SN",
    category: "Traditional Namkeen",
    theme: { bg: "#fef2f2", border: "#fecaca", text: "#991b1b", accent: "#ef4444" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#881337" />
        <path d="M14 28l4-12 6 7 6-7 4 12H14z" fill="#f43f5e" />
        <circle cx="18" cy="14" r="2" fill="#fecdd3" />
        <circle cx="24" cy="19" r="2" fill="#fecdd3" />
        <circle cx="30" cy="14" r="2" fill="#fecdd3" />
        <text
          x="24"
          y="39"
          fill="#ffffff"
          fontSize="8"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          SHAH
        </text>
      </svg>
    ),
  },
  "Nanaji Namkeen Udyog (P) Ltd": {
    brandName: "Nanaji Namkeen",
    initials: "NN",
    category: "Namkeen & Sweets",
    theme: { bg: "#fff7ed", border: "#fed7aa", text: "#9a3412", accent: "#ea580c" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#c2410c" />
        <circle cx="24" cy="24" r="17" fill="#ea580c" />
        <circle cx="24" cy="24" r="14" stroke="#ffedd5" strokeWidth="1.5" strokeDasharray="3 2" />
        <text
          x="24"
          y="27"
          fill="#ffffff"
          fontSize="13"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          N
        </text>
        <text
          x="24"
          y="36"
          fill="#ffedd5"
          fontSize="6"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          NANAJI
        </text>
      </svg>
    ),
  },
  "Dugar Spices Food Pvt Ltd": {
    brandName: "Dugar Spices",
    initials: "DS",
    category: "Spices & Seasoning",
    theme: { bg: "#fff1f2", border: "#fecdd3", text: "#9f1239", accent: "#e11d48" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#9f1239" />
        <path d="M24 11c3 6 8 8 8 15a8 8 0 0 1-16 0c0-7 5-9 8-15z" fill="#f43f5e" />
        <path d="M24 18c1.5 3 4 4.5 4 8a4 4 0 0 1-8 0c0-3.5 2.5-5 4-8z" fill="#ffe4e6" />
        <text
          x="24"
          y="41"
          fill="#ffffff"
          fontSize="7"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          DUGAR
        </text>
      </svg>
    ),
  },
  "Maa Food Products Pvt Ltd": {
    brandName: "Maa Food",
    initials: "MF",
    category: "Grain & Puffed Foods",
    theme: { bg: "#fdf4ff", border: "#f5d0fe", text: "#86198f", accent: "#c026d3" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#701a75" />
        <circle cx="24" cy="24" r="16" fill="#a21caf" />
        <path
          d="M24 16c-4-4-9 1-6 6l6 6 6-6c3-5-2-10-6-6z"
          fill="#fdf4ff"
        />
        <text
          x="24"
          y="39"
          fill="#ffffff"
          fontSize="7.5"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.6"
        >
          MAA
        </text>
      </svg>
    ),
  },
  "Khaowji Food Products Pvt Ltd": {
    brandName: "Khaowji",
    initials: "KJ",
    category: "Crisps & Fryums",
    theme: { bg: "#fefce8", border: "#fef08a", text: "#854d0e", accent: "#eab308" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#a16207" />
        <circle cx="24" cy="24" r="16" fill="#ca8a04" />
        <path d="M17 29c4 4 10 4 14 0" stroke="#fef08a" strokeWidth="2.5" strokeLinecap="round" />
        <text
          x="24"
          y="24"
          fill="#ffffff"
          fontSize="11"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          KJ
        </text>
        <text
          x="24"
          y="38"
          fill="#fef9c3"
          fontSize="6"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          KHAOWJI
        </text>
      </svg>
    ),
  },
  "Ashoka Tea Company (P) Ltd": {
    brandName: "Ashoka Tea",
    initials: "AT",
    category: "Beverages & Tea",
    theme: { bg: "#f0fdf4", border: "#bbf7d0", text: "#166534", accent: "#22c55e" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#14532d" />
        <path
          d="M24 12c-5 4-8 10-6 16 3-1 8-3 10-7 2 4 7 6 10 7 2-6-1-12-6-16-3 4-5 5-8 0z"
          fill="#22c55e"
        />
        <text
          x="24"
          y="40"
          fill="#ffffff"
          fontSize="7"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          ASHOKA
        </text>
      </svg>
    ),
  },
  "R.J. Food": {
    brandName: "R.J. Food",
    initials: "RJ",
    category: "Processed Snacks",
    theme: { bg: "#ecfeff", border: "#a5f3fc", text: "#155e75", accent: "#06b6d4" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#0e7490" />
        <rect x="14" y="14" width="20" height="20" rx="4" transform="rotate(45 24 24)" fill="#06b6d4" />
        <text
          x="24"
          y="28.5"
          fill="#ffffff"
          fontSize="13"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          RJ
        </text>
      </svg>
    ),
  },
  "Damni Food Products Pvt Ltd": {
    brandName: "Damni Foods",
    initials: "DF",
    category: "Snack Processing",
    theme: { bg: "#fff7ed", border: "#fed7aa", text: "#7c2d12", accent: "#f97316" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#9a3412" />
        <circle cx="24" cy="24" r="16" fill="#ea580c" />
        <path d="M24 15v18M15 24h18M18 18l12 12M18 30l12-12" stroke="#ffedd5" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="8" fill="#9a3412" />
        <text
          x="24"
          y="27.5"
          fill="#ffffff"
          fontSize="10"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          DF
        </text>
      </svg>
    ),
  },
  "Barry Tarts Foods LLP": {
    brandName: "Barry Tarts",
    initials: "BT",
    category: "Bakery & Confectionery",
    theme: { bg: "#fefce8", border: "#fde047", text: "#713f12", accent: "#eab308" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#78350f" />
        <circle cx="24" cy="22" r="14" fill="#d97706" />
        <path d="M14 26h20l-3 7H17l-3-7z" fill="#fef3c7" />
        <circle cx="24" cy="18" r="3" fill="#fef3c7" />
        <text
          x="24"
          y="42"
          fill="#ffffff"
          fontSize="7"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          BARRY
        </text>
      </svg>
    ),
  },
  "Shani Food Products Pvt Ltd": {
    brandName: "Shani Food",
    initials: "SF",
    category: "Namkeen & Snacks",
    theme: { bg: "#eff6ff", border: "#bfdbfe", text: "#1e3a8a", accent: "#3b82f6" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#1e3a8a" />
        <path d="M24 12l3.5 8.5L36 24l-8.5 3.5L24 36l-3.5-8.5L12 24l8.5-3.5L24 12z" fill="#60a5fa" />
        <circle cx="24" cy="24" r="5" fill="#eff6ff" />
        <text
          x="24"
          y="27"
          fill="#1e3a8a"
          fontSize="9"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          S
        </text>
      </svg>
    ),
  },
  "Jay Bharat Food Processor Pvt Ltd": {
    brandName: "Jay Bharat",
    initials: "JB",
    category: "Grain Milling & Snacks",
    theme: { bg: "#fff7ed", border: "#ffedd5", text: "#9a3412", accent: "#f97316" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#111827" />
        <circle cx="24" cy="24" r="16" fill="#ea580c" />
        <circle cx="24" cy="24" r="11" fill="#1e3a8a" />
        <circle cx="24" cy="24" r="7" fill="#ffffff" />
        <text
          x="24"
          y="27.5"
          fill="#1e3a8a"
          fontSize="9"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          JB
        </text>
      </svg>
    ),
  },
  "Agarwal Food & Spices Pvt Ltd": {
    brandName: "Agarwal Spices",
    initials: "AF",
    category: "Spices & Food Processing",
    theme: { bg: "#fff1f2", border: "#ffe4e6", text: "#881337", accent: "#e11d48" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#881337" />
        <circle cx="24" cy="24" r="16" fill="#be123c" />
        <path d="M16 28h16l-2 6H18l-2-6z" fill="#ffe4e6" />
        <circle cx="24" cy="18" r="4" fill="#ffe4e6" />
        <text
          x="24"
          y="41"
          fill="#ffffff"
          fontSize="6"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          AGARWAL
        </text>
      </svg>
    ),
  },
  "Subas Nutrition Pvt Ltd": {
    brandName: "Subas Nutrition",
    initials: "SN",
    category: "Nutritional Food",
    theme: { bg: "#f0fdfa", border: "#ccfbf1", text: "#115e59", accent: "#0d9488" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#134e4a" />
        <path d="M24 10l12 6v8c0 8-5 13-12 16-7-3-12-8-12-16v-8l12-6z" fill="#0d9488" />
        <path d="M24 16c2 4 6 5 6 9a6 6 0 0 1-12 0c0-4 4-5 6-9z" fill="#ccfbf1" />
        <text
          x="24"
          y="31"
          fill="#134e4a"
          fontSize="9"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          SN
        </text>
      </svg>
    ),
  },
  "Orissa Confectionery Pvt Ltd": {
    brandName: "Orissa Confectionery",
    initials: "OC",
    category: "Confectionery",
    theme: { bg: "#faf5ff", border: "#f3e8ff", text: "#6b21a8", accent: "#9333ea" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#581c87" />
        <circle cx="24" cy="24" r="16" fill="#9333ea" />
        <circle cx="24" cy="24" r="10" stroke="#f3e8ff" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="5" fill="#f3e8ff" />
        <text
          x="24"
          y="41"
          fill="#ffffff"
          fontSize="6.5"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          ORISSA
        </text>
      </svg>
    ),
  },
  "Kalinga Food and Alind Pvt Ltd": {
    brandName: "Kalinga Food",
    initials: "KF",
    category: "Snack & Food Lines",
    theme: { bg: "#fff7ed", border: "#ffedd5", text: "#7c2d12", accent: "#c2410c" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#7c2d12" />
        <circle cx="24" cy="24" r="16" fill="#c2410c" />
        <circle cx="24" cy="24" r="12" stroke="#ffedd5" strokeWidth="1.5" />
        <path d="M24 12v24M12 24h24M16 16l16 16M16 32l16-16" stroke="#ffedd5" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" fill="#ffedd5" />
      </svg>
    ),
  },
  "Vijaya Food Products": {
    brandName: "Vijaya Foods",
    initials: "VF",
    category: "Snacks & Namkeen",
    theme: { bg: "#f5f3ff", border: "#ede9fe", text: "#5b21b6", accent: "#7c3aed" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#4c1d95" />
        <circle cx="24" cy="24" r="16" fill="#7c3aed" />
        <path d="M16 17l8 15 8-15" stroke="#ede9fe" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <text
          x="24"
          y="40"
          fill="#ffffff"
          fontSize="6"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          VIJAYA
        </text>
      </svg>
    ),
  },
  "Wijitha Group of Companies": {
    brandName: "Wijitha Group",
    initials: "WG",
    category: "Export & Food Manufacturing",
    theme: { bg: "#f0f9ff", border: "#e0f2fe", text: "#075985", accent: "#0284c7" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#0c4a6e" />
        <circle cx="24" cy="24" r="16" fill="#0284c7" />
        <path d="M14 24h20M24 14c4 4 6 8 6 10s-2 6-6 10c-4-4-6-8-6-10s2-6 6-10z" stroke="#e0f2fe" strokeWidth="1.5" />
        <text
          x="24"
          y="42"
          fill="#ffffff"
          fontSize="5.5"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          WIJITHA
        </text>
      </svg>
    ),
  },
  "Turney Biscuit Manufacturers (Pvt) Ltd": {
    brandName: "Turney Biscuits",
    initials: "TB",
    category: "Biscuit Lines",
    theme: { bg: "#fefce8", border: "#fef08a", text: "#713f12", accent: "#ca8a04" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#713f12" />
        <rect x="12" y="14" width="24" height="20" rx="5" fill="#ca8a04" stroke="#fef08a" strokeWidth="1.5" />
        <circle cx="18" cy="20" r="1.5" fill="#713f12" />
        <circle cx="24" cy="20" r="1.5" fill="#713f12" />
        <circle cx="30" cy="20" r="1.5" fill="#713f12" />
        <circle cx="18" cy="28" r="1.5" fill="#713f12" />
        <circle cx="24" cy="28" r="1.5" fill="#713f12" />
        <circle cx="30" cy="28" r="1.5" fill="#713f12" />
        <text
          x="24"
          y="41"
          fill="#ffffff"
          fontSize="6"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          TURNEY
        </text>
      </svg>
    ),
  },
  "RajaRatta Manufacturers Pvt Ltd": {
    brandName: "RajaRatta",
    initials: "RM",
    category: "Food Processing Plant",
    theme: { bg: "#fff1f2", border: "#ffe4e6", text: "#881337", accent: "#be123c" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#4c0519" />
        <circle cx="24" cy="24" r="16" fill="#be123c" />
        <path d="M16 28l3-10 5 6 5-6 3 10H16z" fill="#fecdd3" />
        <text
          x="24"
          y="41"
          fill="#ffffff"
          fontSize="6"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          RAJARATTA
        </text>
      </svg>
    ),
  },
  "CBL Foods International Pvt Ltd": {
    brandName: "CBL Foods",
    initials: "CBL",
    category: "Biscuits & Confectionery",
    theme: { bg: "#fef2f2", border: "#fecaca", text: "#991b1b", accent: "#dc2626" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#dc2626" />
        <rect x="10" y="12" width="28" height="24" rx="4" fill="#b91c1c" />
        <text
          x="24"
          y="28"
          fill="#ffffff"
          fontSize="13"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="-0.5"
        >
          CBL
        </text>
        <rect x="14" y="31" width="20" height="2" rx="1" fill="#fecaca" />
      </svg>
    ),
  },
  "Roche Enterprises": {
    brandName: "Roche",
    initials: "RE",
    category: "Industrial Food",
    theme: { bg: "#f8fafc", border: "#e2e8f0", text: "#1e293b", accent: "#475569" },
    renderLogo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="12" fill="#0f172a" />
        <path d="M24 12l10 6v12l-10 6-10-6V18l10-6z" fill="#334155" />
        <text
          x="24"
          y="28"
          fill="#ffffff"
          fontSize="11"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          RE
        </text>
      </svg>
    ),
  },
};

/**
 * Extracts clean brand information, initials, and theme from any client legal entity name.
 */
export function extractClientBrand(fullName: string): ClientBrandInfo {
  if (CLIENT_BRANDS[fullName]) {
    const item = CLIENT_BRANDS[fullName];
    return {
      brandName: item.brandName,
      legalName: fullName,
      initials: item.initials,
      category: item.category,
      theme: item.theme,
    };
  }

  // Fallback heuristic for any arbitrary company name
  const stripped = fullName
    .replace(/\b(Pvt|Ltd|\(P\)|LLP|\(Pvt\)|Companies|Enterprises|Manufacturers|Processor|Udyog)\b/gi, "")
    .replace(/[(),.]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const words = stripped.split(" ").filter(Boolean);
  const brandName = words.slice(0, 2).join(" ") || fullName;
  const initials = (
    words.length >= 2 ? words[0][0] + words[1][0] : words[0]?.slice(0, 2) || "CO"
  ).toUpperCase();

  // Deterministic color assignment based on name hash
  const colors = [
    { bg: "#eef2ff", border: "#c7d2fe", text: "#4338ca", accent: "#6366f1" },
    { bg: "#ecfdf5", border: "#a7f3d0", text: "#065f46", accent: "#10b981" },
    { bg: "#eff6ff", border: "#bfdbfe", text: "#1e40af", accent: "#3b82f6" },
    { bg: "#fff7ed", border: "#fed7aa", text: "#9a3412", accent: "#ea580c" },
    { bg: "#fef2f2", border: "#fecaca", text: "#991b1b", accent: "#ef4444" },
    { bg: "#f0fdf4", border: "#bbf7d0", text: "#166534", accent: "#22c55e" },
    { bg: "#faf5ff", border: "#f3e8ff", text: "#6b21a8", accent: "#9333ea" },
  ];
  let hash = 0;
  for (let i = 0; i < fullName.length; i++) {
    hash = (hash << 5) - hash + fullName.charCodeAt(i);
    hash |= 0;
  }
  const theme = colors[Math.abs(hash) % colors.length];

  return {
    brandName,
    legalName: fullName,
    initials,
    category: "Food Manufacturer",
    theme,
  };
}

/**
 * ClientLogo Component
 * Renders the brand logo mark extracted from the client company.
 */
export function ClientLogo({
  name,
  size = 44,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const brand = CLIENT_BRANDS[name];

  if (brand?.renderLogo) {
    return (
      <div
        className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-2xs transition-transform duration-200 ${className}`}
        style={{ width: size, height: size }}
        aria-label={`${brand.brandName} logo`}
      >
        {brand.renderLogo(size)}
      </div>
    );
  }

  // Fallback monogram logo
  const info = extractClientBrand(name);
  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl border font-bold shadow-2xs transition-transform duration-200 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: info.theme.bg,
        borderColor: info.theme.border,
        color: info.theme.text,
      }}
      aria-label={`${info.brandName} logo`}
    >
      <span className="font-mono tracking-tight" style={{ fontSize: Math.max(10, size * 0.36) }}>
        {info.initials}
      </span>
    </div>
  );
}

/**
 * ClientCard Component
 * Displays the extracted brand logo alongside the company name and region.
 */
export function ClientCard({
  name,
  region,
  className = "",
}: {
  name: string;
  region: string;
  className?: string;
}) {
  const brand = extractClientBrand(name);

  return (
    <div
      className={`group flex items-center gap-3.5 border-r border-b border-forest/[0.07] bg-white p-4 transition-all duration-150 hover:bg-forest/[0.02] ${className}`}
    >
      <ClientLogo name={name} size={42} className="group-hover:scale-105" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-[13px] font-semibold leading-tight text-forest" title={brand.brandName}>
            {brand.brandName}
          </span>
        </div>
        <span className="mt-0.5 block truncate text-[11px] leading-snug text-forest/65" title={name}>
          {name}
        </span>
        <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-wider text-sage">
          {region}
        </span>
      </div>
    </div>
  );
}
