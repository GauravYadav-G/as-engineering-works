import type { CatalogProduct } from "./catalog";

/*
 * Listings published on asenggworks.com that complete the catalogue.
 * Only data shown in the original listing is included; where a listing gives
 * just a name or a price, the specification is left "on request".
 */
const onRequest = (
  slug: string,
  name: string,
  categorySlug: string,
  range: string,
  price: number | null,
  sortOrder: number,
): CatalogProduct => ({
  slug,
  name,
  categorySlug,
  price,
  unit: "Piece",
  moq: "1 Piece",
  capacity: null,
  power: null,
  image: "",
  shortDescription: `${name} from our ${range} range. Specification on request.`,
  description:
    price === null
      ? `${name} is listed in the A.S. Engineering Works ${range} range. Price and technical specification are available on request — tell us your product and target output.`
      : `${name} is listed in the A.S. Engineering Works ${range} range at an indicative price of ₹${price.toLocaleString("en-IN")} per piece. Detailed capacity, power and configuration are available on request.`,
  specifications: [],
  features: [],
  badges: [],
  featured: false,
  sortOrder,
});

export const additionalListings: CatalogProduct[] = [
  {
    slug: "puff-kachri-machine",
    name: "Puff Kachri Machine",
    categorySlug: "snack-extruders",
    price: 265000,
    unit: "Piece",
    moq: "1 Piece",
    capacity: "100 per hour",
    power: "25 HP",
    image: "",
    shortDescription: "Snacks puff kachri machine for nachos, crax rings, mini samosa and kachori type snacks.",
    description:
      "Leveraging our rich industrial expertise, we make available Snacks Puff Kachri Machine to our revered customers. Characterized by a compact design, energy efficiency and high production capacity, these machines are highly appreciated by the customers. With the usage of these machines, customers can standardize their production process and attain consistency in the quality of their offerings. We make puff ring machines available at competitive prices.",
    specifications: [
      { label: "Power", value: "25 HP" },
      { label: "DC motor", value: "2 HP" },
      { label: "Dimension (L x W x H)", value: "6 ft x 3 ft x 6 ft" },
      { label: "Production capacity", value: "100 per hour" },
      { label: "Machine type", value: "Automatic, semi-automatic" },
      { label: "Automation grade", value: "Semi-automatic" },
      { label: "Snacks type", value: "Nachos, crax ring, mini samosa / kachori" },
      { label: "Condition", value: "New" },
    ],
    features: [],
    badges: [],
    featured: false,
    sortOrder: 38,
  },
  {
    slug: "kurkure-making-machine-25hp",
    name: "Kurkure Making Machine (25 HP)",
    categorySlug: "kurkure-plant",
    price: 300000,
    unit: "Piece",
    moq: "1 Piece",
    capacity: "100 kg",
    power: "25 HP",
    image: "",
    shortDescription: "Kurkure making machine with 25 HP power consumption and 100 kg capacity.",
    description:
      "A.S. Engineering Works has been composing and supplying a premium quality assortment of the Kurkure Making Machine that prepares a large variety of very delicious kachri. Our machines are largely adored for their premium quality standards, and are composed from premium quality material such as steel sheets, brass and copper.",
    specifications: [
      { label: "Capacity", value: "100 kg" },
      { label: "Power consumption", value: "25 HP" },
      { label: "Machine type", value: "Automatic, semi-automatic" },
      { label: "Automatic grade", value: "Automatic, semi-automatic" },
      { label: "Usage / application", value: "Industrial" },
    ],
    features: [],
    badges: [],
    featured: false,
    sortOrder: 39,
  },
  onRequest("puff-extruder-machine", "Puff Extruder Machine", "snack-extruders", "extruder machine", 290000, 40),
  onRequest("cheese-balls-making-machine", "Cheese Balls Making Machine", "snack-extruders", "extruder machine", 290000, 41),
  onRequest("snacks-making-line", "Snacks Making Line", "snack-plants", "extruder machine", 290000, 42),
  onRequest("soya-nuggets-extruder", "Soya Nuggets Extruder", "soya-processing", "food extruder machines", null, 43),
  onRequest("soybean-processing-machinery", "Soybean Processing Machinery", "soya-processing", "food processing machine", null, 44),
  onRequest("snacks-puff-making-machine", "Snacks Puff Making Machine", "snack-extruders", "puff making machines", null, 45),
];
