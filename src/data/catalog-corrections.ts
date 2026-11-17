import type { CatalogProduct } from "./catalog";

/*
 * Catalogue accuracy rules
 * ------------------------
 * 1. Where the original A.S. Engineering Works listing published only a name
 *    and/or a price, no capacity, motor rating or configuration is invented.
 * 2. "Highlights" are shown only where the listing itself gives a feature list
 *    (see sourceFeatures). Every other machine renders without that block.
 * 3. Wording that was not in a listing is replaced by text drawn from that
 *    listing's own description or specification table.
 * These overrides are applied before the catalogue is seeded into PostgreSQL.
 */
export const verifiedOverrides: Record<string, Partial<CatalogProduct>> = {
  "corn-puff-making-machine": {
    shortDescription: "Corn puff making machine, 100-200 kg per hour, S.S. body, 440 V three phase.",
    description:
      "We are among the leading names in the industry, engaged in manufacturing and exporting Corn Puff Making Machine to our treasured customers. The offered machines are manufactured as per the industry laid guidelines and are unsurpassable in terms of quality and performance. These machines are easy to operate and require minimal maintenance on the part of the customers. Customers are reasonably charged for these machines.",
  },
  "snacks-puff-extruder-machine": {
    shortDescription: "Snacks puff extruder machine with a 25 HP main motor and VFD-controlled feeding and cutter motors.",
    description:
      "Snacks Puff Extruder Machine with a 25 HP main motor and 1 HP AC feeding and cutter motors, both VFD controlled. The listed machine measures approximately 5 ft x 3 ft x 6 ft with a production capacity of 100 kg per hour. Installation service is available.",
    specifications: [
      { label: "Main motor", value: "25 HP" },
      { label: "Feeding motor", value: "1 HP AC, VFD controlled" },
      { label: "Cutter motor", value: "1 HP AC, VFD controlled" },
      { label: "Dimension (L x W x H)", value: "5 ft x 3 ft x 6 ft approx." },
      { label: "Production capacity", value: "100 kg/hr" },
      { label: "Machine type", value: "Semi-automatic, automatic" },
      { label: "Installation services", value: "Yes" },
    ],
  },
  "cheese-ball-extruder": {
    capacity: null,
    power: null,
    shortDescription: "Cheese ball extruder from our extruder machine range. Specification on request.",
    description:
      "A.S. Engineering Works manufactures Cheese Ball Extruders among its extrusion machinery range. Request the latest technical specification, output, connected load and die options for your product before placing an order.",
    specifications: [],
  },
  "twin-screw-extruder": {
    capacity: null,
    power: null,
    shortDescription: "Twin screw extruder from our extruder machine range. Specification on request.",
    description:
      "A.S. Engineering Works manufactures Twin Screw Extruders in its food extrusion range. Output, power rating, barrel configuration and electricals are tailored to your recipe and confirmed in a technical quotation.",
    specifications: [],
  },
  "snack-flavoring-machine": {
    capacity: null,
    power: null,
    shortDescription: "Snack flavoring machine. Specification on request.",
    description:
      "A.S. Engineering Works manufactures Snack Flavoring Machines for continuous and batch seasoning. Ask us for the drum size, throughput and seasoning arrangement suitable for your snack line.",
    specifications: [],
  },
  "kurkure-extruder": {
    capacity: null,
    power: null,
    shortDescription: "Kurkure extruder for fried extruded snack processing. Output configured to requirement.",
    description:
      "The Kurkure Extruder is manufactured by A.S. Engineering Works for authentic crispy corn stick production. Capacity and connected load are configured to customer requirements. See the other Kurkure Making Machines for published standard model specifications.",
    specifications: [],
  },
  "macaroni-pasta-making-machine": {
    description:
      "We are offering a dynamic assortment of Macaroni Pasta Machine and Pasta Making Machine in the market, which requires less maintenance and is easy to use. These products are highly appreciated by patrons not only for their easy usage and best performance, but also for a long service life. Patrons can avail these machines configured to exact production requirements.",
  },
  "vermicelli-extruder-machine": {
    capacity: null,
    power: null,
    shortDescription: "Vermicelli extruder machine for industrial vermicelli processing.",
    description:
      "Vermicelli Extruder Machine appears in the A.S. Engineering Works published product range. Tell us your strand gauge, flour blend and daily output for model-specific configuration and die tooling.",
    specifications: [],
  },
  "pasta-static-dryer": {
    power: "9-12 kW heater per trolley",
    description:
      "Two trolleys, each containing 50 trays made of wood and S.S. wire mesh. Each trolley box contains a 9 to 12 kW heater to dry pasta, macaroni and vermicelli in 5-6 hours.",
  },
  "automatic-snacks-roaster-toaster": {
    shortDescription: "Shell type automatic snacks roaster / toaster with electric heaters, up to 250 kg/hr.",
    description:
      "Automatic Snacks Roaster / Toaster Machine: a shell type, electrically heated roaster listed for up to 250 kg per hour, with 16 kW to 24 kW power consumption and a 16 feet length. The machine is driven through a motor and electric control panel.",
  },
  "soya-chunk-machine": {
    shortDescription: "Soya chunk machine for soya badi, chunks, chaap and nuggets; 200 up to 1000 kg/hr as listed.",
    description:
      "Soya Chunk Machine for soya badi, soya chunks, soya chaap and soya nuggets. The listing gives a capacity of 200 up to 1000 kg/hr, a 40 HP power consumption, automatic grade and a hopper mixture. Request a quotation for the configuration that matches your output.",
  },
  "soya-bean-bari-and-nuggets-plant": {
    shortDescription: "Automatic soya bean bari and nuggets plant, 200 kg/hr, with a 60 HP main motor.",
  },
  "soya-nugget-plant": {
    capacity: null,
    power: null,
    shortDescription: "Soya nugget plant configured to your required production capacity.",
    description:
      "Soya Nugget Plant is built in Noida by A.S. Engineering Works for textured vegetable protein processing. Plants are configured according to your required product and capacity. Ask for the equipment scope and a current quotation.",
    specifications: [],
  },
  "energy-food-extruder": {
    shortDescription: "Energy food extruder with 300-400 kg per hour production capacity.",
    specifications: [
      { label: "Machine type", value: "Automatic, semi-automatic" },
      { label: "Power (kW)", value: "100-150" },
      { label: "Capacity", value: "1000 kg" },
      { label: "Production capacity (kg per hour)", value: "300-400" },
      { label: "Brand", value: "ASEA" },
      { label: "Automatic grade", value: "Automatic" },
    ],
  },
  "corn-snacks-machine": {
    power: null,
    shortDescription: "Corn snacks machine for corn, rice and millet snacks at 100 kg/hr.",
    description:
      "Corn Snacks Machine listed for corn, rice and millet snacks at a capacity of 100 kg/hr, for industrial use, in automatic, semi-automatic and manual machine types. Contact us for the detailed technical sheet.",
  },
  "millet-extruder-and-processing-plant": {
    power: null,
  },
  "snacks-food-processing-plant": {
    capacity: null,
    power: null,
    shortDescription: "Snacks food processing plant configured from our extrusion, thermal and seasoning machinery range.",
    description:
      "Snacks Food Processing Plant is engineered by A.S. Engineering Works to match your recipe and floor layout. We configure a matched combination of extrusion, thermal, seasoning and product-handling machines for your product.",
    specifications: [],
  },
  "inclined-conveyor-belt": {
    capacity: null,
    shortDescription: "Inclined conveyor belt, 10 ft length, PVC / rubber, heat resistant, 1 HP AC drive.",
  },
  "industrial-roaster": {
    capacity: null,
    power: null,
    shortDescription: "Industrial roaster. Technical specifications available on request.",
    description:
      "Industrial Roaster manufactured by A.S. Engineering Works. Please request current model specifications, heating configuration and quotation; the listing does not publish a fixed specification for this item.",
    specifications: [],
  },
};

/* Feature lists exactly as given in the original listings. */
export const sourceFeatures: Record<string, string[]> = {
  "snacks-puff-extruder": [
    "For direct expanded snacks",
    "Continuous cooking food extruder",
    "All standard fittings",
  ],
  "kurkure-making-machine": ["Outstanding performance", "Low power consumption", "Easy operations"],
  "soya-nuggets-making-machine": [
    "Best quality",
    "Excellent functionality",
    "Very durable",
    "Cost efficient",
  ],
  "rotary-roaster-for-puff": [
    "Resistance to corrosion",
    "High performance",
    "Perfect designing",
    "Longer service life",
  ],
  "energy-food-extruder": ["Technically accurate", "Optimum performance", "Reliable"],
  "flavor-coating-systems": [
    "No wastage start and shut down system",
    "Wash in place available",
    "Anti-bearding spray nozzles technology",
    "Variable throughput rates",
    "Automatically adjustable",
    "Precision airflow balancing system",
    "Block style manifold design with gasket for easy maintenance and cleaning",
    "Precision sanitary lobe pump",
  ],
  "screw-conveyor": [
    "High in performance",
    "Requires low maintenance",
    "Compact design",
    "Longer serviceability",
  ],
};
