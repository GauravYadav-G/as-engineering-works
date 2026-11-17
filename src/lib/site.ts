export const site = {
  name: "A.S. Engineering Works",
  shortName: "A.S. Engineering",
  tagline: "Food processing machinery, manufactured in Noida since 1984.",
  established: 1984,
  description:
    "A.S. Engineering Works, Noida — manufacturer and exporter of food processing machines since 1984: snack extruders, kurkure machines, pasta and vermicelli machines, soya nugget plants, industrial dryers, roasters, flavouring systems and conveyors.",
  url: "https://www.asenggworks.com",
  contact: {
    person: "Akhtar Ali Khan",
    designation: "Managing Director",
    phone: "+91 98116 06544",
    phoneHref: "tel:+919811606544",
    email: "akhtar@asenggworks.com",
    emailHref: "mailto:akhtar@asenggworks.com",
    // Main address and map pin as published on the original contact page.
    address: {
      label: "Address",
      lines: ["A-69, G.B. Nagar, Sector 8", "Noida 201301, Gautam Buddha Nagar", "Uttar Pradesh, India"],
    },
    // Published as "Corporate Office" (contact page) and "Registered Address" (about page).
    corporateOffice: {
      label: "Corporate office",
      lines: ["Plot No. G-195, Sector 63", "Noida 201307, Uttar Pradesh, India"],
    },
    // WhatsApp deep link derived from the published mobile number.
    whatsapp: "https://wa.me/919811606544",
    mapUrl: "https://maps.google.com?q=28.59221000,77.32750000",
  },
  facts: [
    { label: "Established", value: "1984 (42+ Years of Legacy)" },
    { label: "Machines delivered", value: "50,000+ Units" },
    { label: "Projects completed", value: "2,000+ Plants & Lines" },
    { label: "Nature of business", value: "Manufacturer & Exporter" },
    { label: "Additional business", value: "Factory / Retail / Wholesale" },
    { label: "Company CEO", value: "Akhtar Ali Khan" },
    { label: "Legal status", value: "Proprietorship" },
    { label: "Employees", value: "11 to 25 people" },
    { label: "Annual turnover", value: "₹1.5 – 5 Cr" },
    { label: "GST registration", value: "01-07-2017" },
    { label: "GST number", value: "09AHNPK3689D1ZX" },
    { label: "IEC code", value: "0504026763" },
    { label: "Banker", value: "Bank of Baroda" },
    { label: "Customized packaging", value: "Yes" },
  ],
  vision:
    "To be the leading global resource for food processing plants and all kinds of food industry plants — improving and promoting our customers' ability to succeed in a global food marketplace.",
  mission:
    "To go the extra mile in today's business environment: manufacture the highest quality equipment, offer responsive service and commit to meeting customers' needs through accurate delivery dates, controlled pricing and reduced spares inventory.",
  quality: [
    "Durability",
    "Efficiency",
    "Performance",
    "Ability to withstand rugged conditions",
    "Resistance to corrosion",
  ],
  markets: ["India", "Gulf countries", "Sri-Lanka"],
  imageNote:
    "Machine images on this website are representative illustrations, not photographs of the machines supplied. Actual machines may differ in design and finish — ask us for current photos and video.",
} as const;

export const formatPrice = (price: number | null, unit = "Piece") =>
  price === null
    ? "Price on request"
    : `₹${price.toLocaleString("en-IN")} / ${unit}`;
