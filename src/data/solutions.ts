import { solutionImages } from "./media";

export type Solution = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  image: string;
  imageIsIllustrative: boolean;
  tagline: string;
  intro: string;
  steps: { title: string; detail: string }[];
  productSlugs: string[];
  note: string;
};

export const solutions: Solution[] = [
  {
    slug: "corn-puffs",
    name: "Corn Puffs & Cheese Balls",
    shortName: "Corn Puffs",
    eyebrow: "Extruded snack solution",
    image: solutionImages["corn-puffs"],
    imageIsIllustrative: true,
    tagline: "From corn grits to crisp, flavourful puffs.",
    intro:
      "Build a corn puff or cheese ball production setup around our single-screw extruders, roasters and flavour coating equipment. Die and cutter options let you work toward balls, rings, curls and other directly expanded shapes; the exact line scope depends on your recipe and output target.",
    steps: [
      { title: "Feed & mix", detail: "Prepare the corn, rice or millet blend for consistent feeding." },
      { title: "Extrude", detail: "Form and expand the snack through the selected die and cutter." },
      { title: "Roast", detail: "Finish moisture and texture with a matched rotary or shell roaster." },
      { title: "Season", detail: "Apply dry masala or oil-based flavour in a coating system." },
    ],
    productSlugs: [
      "corn-puff-making-machine",
      "snacks-puff-extruder-machine",
      "cheese-ball-extruder",
      "rotary-roaster-for-puff",
      "flavor-coating-machine",
    ],
    note: "Available as individual machines or a custom-configured processing line. Packaging equipment is not listed in the current catalogue.",
  },
  {
    slug: "kurkure-corn-sticks",
    name: "Kurkure & Corn Sticks",
    shortName: "Kurkure",
    eyebrow: "Fried extruded snack solution",
    image: solutionImages["kurkure-corn-sticks"],
    imageIsIllustrative: true,
    tagline: "That signature crunchy, irregular corn stick.",
    intro:
      "Our kurkure extruders are designed to produce a varied length and diameter for the distinct home-made look of fried extruded snacks. Choose an automatic or semi-automatic machine around your output target; additional thermal and seasoning stages are scoped with your team.",
    steps: [
      { title: "Corn grits feed", detail: "Meter your corn-based blend into the extruder." },
      { title: "Extrude & cut", detail: "Form the varied lengths and diameters that give kurkure its home-made look." },
      { title: "Finish", detail: "Define your downstream frying or finishing scope for the desired texture." },
      { title: "Flavour", detail: "Coat snacks evenly using our masala and flavouring systems." },
    ],
    productSlugs: [
      "kurkure-manufacturing-machine",
      "automatic-kurkure-machine",
      "kurkure-making-machine",
      "kurkure-extruder",
      "snack-flavoring-machine",
    ],
    note: "Our current published catalogue specifies the extruders and seasoning equipment. Discuss the complete frying scope with us before ordering.",
  },
  {
    slug: "soya-nuggets",
    name: "Soya Nuggets, Chunks & Badi",
    shortName: "Soya Nuggets",
    eyebrow: "Textured protein solution",
    image: solutionImages["soya-nuggets"],
    imageIsIllustrative: true,
    tagline: "Textured protein, produced to your specification.",
    intro:
      "From compact soya chunk machines to larger soya bari and nuggets plants, we manufacture extruders for textured soybean protein processing. Configure the hopper mixer, extruder, cutter and drying stage according to your flour, product shape and throughput target.",
    steps: [
      { title: "Flour preparation", detail: "Condition defatted soya flour for extrusion." },
      { title: "Extrusion", detail: "Texturise protein with the selected extruder configuration." },
      { title: "Cutting", detail: "Set the nugget or chunk size with cutter geometry." },
      { title: "Drying", detail: "Match a drying stage to the final moisture specification." },
    ],
    productSlugs: [
      "soya-chunk-machine",
      "soya-nuggets-making-machine",
      "soya-bean-bari-and-nuggets-plant",
      "soya-nugget-plant",
      "tray-dryer",
    ],
    note: "Capacity is configuration-dependent. Refer to each machine listing for its published specification.",
  },
  {
    slug: "pasta-macaroni",
    name: "Pasta & Macaroni",
    shortName: "Pasta & Macaroni",
    eyebrow: "Pasta manufacturing solution",
    image: solutionImages["pasta-macaroni"],
    imageIsIllustrative: true,
    tagline: "A flexible line for macaroni and short pasta.",
    intro:
      "Our pasta-making machines and extruders mix and shape dough into multiple macaroni and short-pasta profiles. Pair the extruder with a tray or static dryer sized to your product and daily production schedule.",
    steps: [
      { title: "Mix", detail: "Prepare a controlled dough blend for consistent extrusion." },
      { title: "Extrude", detail: "Shape pasta through the selected die and cutting arrangement." },
      { title: "Dry", detail: "Use static or tray drying to reach your product specification." },
      { title: "Inspect", detail: "Check shape consistency, finish and drying uniformity." },
    ],
    productSlugs: [
      "pasta-making-machine",
      "macaroni-pasta-making-machine",
      "pasta-extruder-machine",
      "pasta-static-dryer",
      "tray-dryer",
    ],
    note: "Die shapes, drying layout and connected load are confirmed in the engineered quotation.",
  },
  {
    slug: "vermicelli",
    name: "Vermicelli",
    shortName: "Vermicelli",
    eyebrow: "Vermicelli manufacturing solution",
    image: solutionImages.vermicelli,
    imageIsIllustrative: true,
    tagline: "Extrusion and drying for fine strands.",
    intro:
      "We offer vermicelli extrusion equipment and the tray/static drying systems used after forming. Tell us your preferred strand gauge, flour mix and output target and we will help configure the appropriate machine pairing.",
    steps: [
      { title: "Prepare", detail: "Feed a consistent, conditioned flour blend." },
      { title: "Extrude", detail: "Form strands using the selected vermicelli die." },
      { title: "Cut", detail: "Set strand length to your product requirements." },
      { title: "Dry", detail: "Use a matched tray or static dryer for a controlled finish." },
    ],
    productSlugs: ["vermicelli-extruder-machine", "tray-dryer", "pasta-static-dryer"],
    note: "Please enquire for vermicelli-extruder technical specifications and custom die tooling.",
  },
  {
    slug: "puff-rings-kachri",
    name: "Puff Rings, Kachri & Shaped Snacks",
    shortName: "Puff Rings",
    eyebrow: "Shaped snack solution",
    image: solutionImages["puff-rings-kachri"],
    imageIsIllustrative: true,
    tagline: "One platform, more possibilities for shape.",
    intro:
      "Directly expanded rings, kachri, curls and shaped snacks start with the extruder and die. Our puff and ring machines, roasters and coating systems give snack producers a practical route from base ingredients to seasoned product.",
    steps: [
      { title: "Blend", detail: "Set the ingredient mix and moisture for expansion." },
      { title: "Form", detail: "Select the die and cutter for the target ring or puff profile." },
      { title: "Roast", detail: "Finish with even heating, where your recipe requires it." },
      { title: "Coat", detail: "Add masala and oil using a continuous coating system." },
    ],
    productSlugs: [
      "snacks-puff-extruder-machine",
      "snacks-puff-extruder",
      "corn-puff-making-machine",
      "rotary-roaster-for-puff",
      "flavor-coating-systems",
    ],
    note: "Product appearance depends on raw materials, die, process settings and seasoning.",
  },
  {
    slug: "millet-snacks",
    name: "Millet-Based Snacks",
    shortName: "Millet Snacks",
    eyebrow: "Grain-based snack solution",
    image: solutionImages["millet-snacks"],
    imageIsIllustrative: true,
    tagline: "Turn everyday millets into an extruded snack.",
    intro:
      "Our listed millet extruder processes millet grains into snack shapes. A typical equipment arrangement includes feeding, preconditioning, extrusion, cutting, cooling and optional flavouring; the specification is finalised around your millet blend.",
    steps: [
      { title: "Precondition", detail: "Control moisture and feed the millet blend." },
      { title: "Extrude", detail: "Cook and shape under the selected process settings." },
      { title: "Cut & cool", detail: "Stabilise the shape and texture after forming." },
      { title: "Flavour", detail: "Add dry seasoning if the end product calls for it." },
    ],
    productSlugs: [
      "millet-extruder-and-processing-plant",
      "corn-snacks-machine",
      "snack-flavoring-machine",
    ],
    note: "Exact capacity and product results depend on the formulation and line design.",
  },
  {
    slug: "namkeen-seasoning",
    name: "Namkeen & Seasoned Snacks",
    shortName: "Namkeen",
    eyebrow: "Flavouring & coating solution",
    image: solutionImages["namkeen-seasoning"],
    imageIsIllustrative: true,
    tagline: "The finishing touch your snack line needs.",
    intro:
      "We manufacture batch masala mixing machines, slurry kettles and continuous flavour coating systems for snack production. This solution focuses on mixing and seasoning existing snacks; it does not imply a complete namkeen frying line is included in the current catalogue.",
    steps: [
      { title: "Prepare masala", detail: "Mix your dry spice or slurry in a batch mixing machine." },
      { title: "Feed the product", detail: "Present the finished snack to the coating stage." },
      { title: "Apply flavour", detail: "Tumble and coat evenly with masala and, where applicable, oil." },
      { title: "Transfer", detail: "Convey to the next stage in your existing factory." },
    ],
    productSlugs: [
      "masala-mixing-machine",
      "flavor-coating-machine",
      "flavor-coating-systems",
      "food-mixing-machine",
      "slurry-kettle-mixing-machine",
    ],
    note: "Seasoning and coating equipment only; ask us to assess integration with your existing fryer or upstream line.",
  },
  {
    slug: "roasted-snacks",
    name: "Roasted Snacks & Grains",
    shortName: "Roasted Snacks",
    eyebrow: "Thermal processing solution",
    image: solutionImages["roasted-snacks"],
    imageIsIllustrative: true,
    tagline: "Controlled heat. Consistent finish.",
    intro:
      "Our industrial roasters and dryers are used in food-processing applications where uniform heat and repeatable residence time matter. Choose from rotary cell roasters, automatic snack roasters and tray or continuous dryers according to your product.",
    steps: [
      { title: "Feed", detail: "Present product consistently to the thermal stage." },
      { title: "Roast", detail: "Set drum speed, heater setting and dwell time." },
      { title: "Dry", detail: "Reduce moisture with the right tray or continuous dryer." },
      { title: "Season", detail: "Add an optional coating stage for flavoured snacks." },
    ],
    productSlugs: [
      "rotary-cell-roaster",
      "automatic-snacks-roaster-toaster",
      "continuous-dryer",
      "tray-dryer",
      "masala-mixing-machine",
    ],
    note: "Suitability for a particular grain, nut or snack should be confirmed with us before ordering.",
  },
  {
    slug: "complete-snack-lines",
    name: "Complete Snack Processing Lines",
    shortName: "Complete Lines",
    eyebrow: "Integrated processing solution",
    image: solutionImages["complete-snack-lines"],
    imageIsIllustrative: true,
    tagline: "Build the equipment train around the product.",
    intro:
      "For businesses planning more than one machine, A.S. Engineering Works can configure compatible processing equipment from its own catalogue: extrusion, roasting or drying, flavouring and conveying. We start with your target product, output, utility supply and floor plan.",
    steps: [
      { title: "Define the product", detail: "Share the finished snack, recipe and output target." },
      { title: "Select equipment", detail: "Choose extruder, thermal, seasoning and handling machinery." },
      { title: "Balance capacities", detail: "Match machine sizes and connections in a practical layout." },
      { title: "Quote & supply", detail: "Receive a quotation covering the agreed machines and scope." },
    ],
    productSlugs: [
      "snacks-food-processing-plant",
      "corn-puff-making-machine",
      "rotary-roaster-for-puff",
      "flavor-coating-systems",
      "inclined-conveyor-belt",
    ],
    note: "The quoted scope is equipment-specific. Packaging is not represented as an A.S. Engineering catalogue product.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug) ?? null;
}
