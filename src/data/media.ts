/*
 * Image sources used by the site
 * - `generated`: AI-generated machine imagery (and detail crops of it). These
 *   illustrate a type of machine. They are NOT photographs of A.S. Engineering
 *   Works' own machines and are labelled as representative wherever shown.
 * - `machineAssets`: the company logo, stills of the company's YouTube videos,
 *   and an archive of the original listing photographs in /public/images/real
 *   (not shown in the UI; kept for when actual machine photos are wanted).
 * - `applicationAssets`: Pexels stock photographs of finished snacks.
 */
export type MediaAsset = {
  path: string;
  source: string;
  credit: string;
};

const original = (filename: string, source: string): MediaAsset => ({
  path: `/images/real/${filename}`,
  source,
  credit: "A.S. Engineering Works product listing",
});
const stock = (filename: string, id: number, credit: string): MediaAsset => ({
  path: `/images/applications/${filename}`,
  source: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1500`,
  credit: `Illustrative application photo · ${credit} / Pexels`,
});

export const machineAssets: Record<string, MediaAsset> = {
  logo: original("as-logo.png", "https://3.imimg.com/data3/CT/HR/MY-452167/a-s-engineering-works-noida-logo-250x250.png"),
  cornPuff: original("corn-puff-extruder.jpg", "https://3.imimg.com/data3/HH/TQ/MY-452167/snacks-machine-500x500.jpg"),
  puffKachri: original("puff-kachri.jpg", "https://3.imimg.com/data3/CL/ET/MY-452167/ring-plant-500x500.jpg"),
  puffMachine: original("puff-extruder-machine.jpg", "https://3.imimg.com/data3/UB/UY/MY-452167/snacks-puff-machine-250x250.jpg"),
  puffExtruder: original("snacks-puff-extruder.jpg", "https://4.imimg.com/data4/SC/ON/MY-452167/snacks-puff-machine-500x500.jpg"),
  puffCopy: original("snacks-puff-making.jpg", "https://3.imimg.com/data3/OB/AJ/MY-452167/puff-copy-250x250.jpg"),
  cheeseBall: original("cheese-ball-extruder.jpg", "https://5.imimg.com/data5/SELLER/Default/2022/11/GC/AH/RD/452167/puffed-rice-machinery-500x500.jpg"),
  heavyDuty: original("heavy-duty-extruder.jpg", "https://3.imimg.com/data3/LS/RF/MY-452167/heavy-duty-extruder-500x500.jpg"),
  kurkure: original("kurkure-plant.jpg", "https://4.imimg.com/data4/XO/CI/MY-452167/kur-kure-plant-500x500.jpg"),
  kurkureAutomatic: original("automatic-kurkure.jpg", "https://4.imimg.com/data4/PO/HW/MY-452167/kurkure-making-machine-500x500.jpg"),
  kurkureExtruder: original("kurkure-extruder.jpg", "https://3.imimg.com/data3/BD/MK/MY-452167/kurkure-extruder-500x500.jpg"),
  kurkureMachine: original("kurkure-machine.jpg", "https://3.imimg.com/data3/WW/CL/MY-452167/kurkure-machine-250x250.jpg"),
  kurkureLine: original("kurkure-line.jpg", "https://3.imimg.com/data3/TI/UV/MY-452167/kurkure-making-machines-500x500.jpg"),
  pasta: original("pasta-making-machine.jpg", "https://5.imimg.com/data5/SELLER/Default/2022/11/VC/XD/OF/452167/pasta-making-machine-500x500.jpg"),
  macaroni: original("macaroni-machine.jpg", "https://5.imimg.com/data5/PR/CQ/MY-452167/macaroni-pasta-machine-500x500.jpg"),
  pastaNew: original("pasta-extruder.jpg", "https://5.imimg.com/data5/SELLER/Default/2025/1/480894027/TB/NS/VT/452167/pasta-making-machine-500x500.jpg"),
  madAngle: original("mad-angle-cutter.jpg", "https://3.imimg.com/data3/XB/QS/MY-452167/mad-angle-cutter-500x500.jpg"),
  soyaChunk: original("soya-chunk-machine.jpeg", "https://5.imimg.com/data5/SELLER/Default/2023/2/LI/LL/OT/452167/soya-chunk-machine-500x500.jpeg"),
  soyaNuggets: original("soya-nuggets-making.jpg", "https://5.imimg.com/data5/SELLER/Default/2025/4/506560846/MH/JA/QK/452167/soya-nuggtes-making-machine-500x500.jpg"),
  soyaPlant: original("soya-nugget-plant.jpeg", "https://5.imimg.com/data5/SELLER/Default/2024/6/430419796/TF/WR/PH/452167/soya-nugget-plant-500x500.jpeg"),
  cornSnacks: original("corn-snacks-machine.jpg", "https://5.imimg.com/data5/SELLER/Default/2023/11/361012977/FQ/GC/YD/452167/corn-snacks-machine-500x500.jpg"),
  rotaryRoaster: original("rotary-cell-roaster.jpg", "https://5.imimg.com/data5/HS/JG/OO/SELLER-452167/rotary-roaster-cell-500x500.jpg"),
  automaticRoaster: original("automatic-roaster.jpg", "https://5.imimg.com/data5/SELLER/Default/2022/7/FA/JV/UH/452167/automatic-snacks-roaster-toaster-machine-500x500.jpg"),
  trayDryer: original("tray-dryer.jpg", "https://3.imimg.com/data3/LR/EC/MY-452167/tray-dryer-for-vermicelli-500x500.jpg"),
  pastaDryer: original("pasta-static-dryer.jpg", "https://5.imimg.com/data5/SELLER/Default/2022/7/YI/TA/GF/452167/static-dryer-500x500.jpg"),
  masala: original("masala-mixing-machine.jpg", "https://5.imimg.com/data5/AP/CR/OH/SELLER-452167/masala-mixing-machine-500x500.jpg"),
  flavour: original("flavour-coating-system.jpg", "https://3.imimg.com/data3/OD/TW/MY-452167/puff-coating-systems-500x500.jpg"),
  snackFlavour: original("snack-flavouring-machine.jpg", "https://5.imimg.com/data5/SELLER/Default/2024/6/430418670/ET/CN/YB/452167/snack-flavoring-machine-500x500.jpg"),
  videoExtruder: original("video-extruder.jpg", "https://img.youtube.com/vi/im38GoURAwI/hqdefault.jpg"),
  videoLine: original("video-line.jpg", "https://img.youtube.com/vi/PkRV7NXZlYQ/hqdefault.jpg"),
  videoSoya: original("video-soya.jpg", "https://img.youtube.com/vi/tvHn1GEE_tE/hqdefault.jpg"),
};

export const applicationAssets: Record<string, MediaAsset> = {
  cornPuffs: stock("corn-puffs.jpg", 15475390, "Liam Lyons"),
  kurkure: stock("seasoned-snacks.jpg", 12865864, "Krishna Prasad"),
  pasta: stock("pasta.jpg", 8963995, "RDNE Stock project"),
  vermicelli: stock("vermicelli.jpg", 13373178, "Mateusz Feliksik"),
  namkeen: stock("namkeen.jpg", 38453275, "Jahra Tasfia Reza"),
  millet: stock("millet.jpg", 27959280, "Rahul Sonawane"),
  roasted: stock("roasted-snacks.jpg", 13005064, "Srattha Nualsate"),
  chickpeas: stock("seasoned-chickpeas.jpg", 10112101, "Engin Akyurt"),
  puffRings: stock("puff-rings.jpg", 7033657, "Tima Miroshnichenko"),
  cheeseBalls: stock("cheese-balls.jpg", 15475390, "Liam Lyons"),
};

const a = (key: string) => applicationAssets[key]?.path ?? applicationAssets.cornPuffs.path;

/* 1100 px catalogue versions; the full-resolution originals sit in /public/images. */
export const generated = {
  line: "/images/machines/processing-line.jpg",
  lineExtruder: "/images/machines/line-extruder.jpg",
  extruder: "/images/machines/snack-extruder.jpg",
  extruderDie: "/images/machines/snack-extruder-die.jpg",
  extruderDrive: "/images/machines/snack-extruder-drive.jpg",
  kurkureLine: "/images/machines/kurkure-line.jpg",
  kurkureExtruder: "/images/machines/kurkure-extruder.jpg",
  pasta: "/images/machines/pasta-machine.jpg",
  pastaDie: "/images/machines/pasta-die.jpg",
  pastaRacks: "/images/machines/pasta-racks.jpg",
  soya: "/images/machines/soya-extruder.jpg",
  soyaDie: "/images/machines/soya-die.jpg",
  dryer: "/images/machines/dryer-roaster.jpg",
  trayDryer: "/images/machines/tray-dryer.jpg",
  rotaryRoaster: "/images/machines/rotary-roaster.jpg",
  seasoning: "/images/machines/seasoning-drum.jpg",
  seasoningSpray: "/images/machines/seasoning-spray.jpg",
  conveyor: "/images/machines/belt-conveyor.jpg",
  conveyorDrive: "/images/machines/conveyor-drive.jpg",
} as const;

const g = generated;

export const productImages: Record<string, string> = {
  // Snack extruders
  "corn-puff-making-machine": g.extruder,
  "snacks-puff-extruder-machine": g.extruderDie,
  "cheese-ball-extruder": g.extruderDrive,
  "twin-screw-extruder": g.lineExtruder,
  "snacks-puff-extruder": g.extruderDrive,
  "puff-kachri-machine": g.extruderDie,
  "puff-extruder-machine": g.extruder,
  "cheese-balls-making-machine": g.extruderDie,
  "snacks-puff-making-machine": g.extruderDrive,
  // Kurkure
  "kurkure-manufacturing-machine": g.kurkureExtruder,
  "automatic-kurkure-machine": g.kurkureExtruder,
  "kurkure-making-machine": g.extruderDrive,
  "kurkure-extruder": g.extruderDrive,
  "kurkure-making-machine-25hp": g.kurkureExtruder,
  // Pasta and vermicelli
  "pasta-making-machine": g.pasta,
  "macaroni-pasta-making-machine": g.pastaDie,
  "pasta-extruder-machine": g.pastaDie,
  "vermicelli-extruder-machine": g.pasta,
  "pola-puff-cutter-machine": g.extruderDie,
  // Soya
  "soya-chunk-machine": g.soya,
  "soya-nuggets-making-machine": g.soyaDie,
  "soya-bean-bari-and-nuggets-plant": g.soya,
  "soya-nugget-plant": g.soyaDie,
  "soya-nuggets-extruder": g.soya,
  "soybean-processing-machinery": g.soyaDie,
  // Dryers and roasters
  "continuous-dryer": g.dryer,
  "tray-dryer": g.trayDryer,
  "pasta-static-dryer": g.pastaRacks,
  "rotary-cell-roaster": g.rotaryRoaster,
  "rotary-roaster-for-puff": g.rotaryRoaster,
  "automatic-snacks-roaster-toaster": g.dryer,
  "industrial-roaster": g.rotaryRoaster,
  // Seasoning
  "snack-flavoring-machine": g.seasoningSpray,
  "flavor-coating-machine": g.seasoning,
  "flavor-coating-systems": g.seasoning,
  "masala-mixing-machine": g.seasoningSpray,
  "food-mixing-machine": g.seasoning,
  "slurry-kettle-mixing-machine": g.seasoningSpray,
  // Conveyors
  "inclined-conveyor-belt": g.conveyor,
  "screw-conveyor": g.conveyorDrive,
  // Plants
  "energy-food-extruder": g.lineExtruder,
  "corn-snacks-machine": g.extruder,
  "millet-extruder-and-processing-plant": g.lineExtruder,
  "snacks-food-processing-plant": g.line,
  "snacks-making-line": g.line,
};

/* Machines for which no image of the same machine type exists yet. */
const relatedEquipment = new Set([
  "pola-puff-cutter-machine",
  "screw-conveyor",
  "slurry-kettle-mixing-machine",
  "food-mixing-machine",
  "continuous-dryer",
]);

export function productImageCaption(slug: string) {
  return relatedEquipment.has(slug) ? "Related equipment shown" : "Representative image";
}

export function productImageNote(slug: string) {
  return relatedEquipment.has(slug)
    ? "The image shows related equipment from this range, not this machine. Ask us for photographs and video of the actual machine."
    : "The image is a representative illustration of this type of machine, not a photograph of the unit supplied. Ask us for photographs and video of the actual machine.";
}

export const categoryImages: Record<string, string> = {
  "snack-extruders": g.extruder,
  "kurkure-plant": g.kurkureExtruder,
  "pasta-vermicelli": g.pasta,
  "soya-processing": g.soya,
  "dryers-roasters": g.dryer,
  "seasoning-systems": g.seasoning,
  conveyors: g.conveyor,
  "snack-plants": g.line,
};

export const solutionImages: Record<string, string> = {
  "corn-puffs": a("cornPuffs"),
  "kurkure-corn-sticks": a("kurkure"),
  "soya-nuggets": g.soyaDie,
  "pasta-macaroni": a("pasta"),
  vermicelli: a("vermicelli"),
  "puff-rings-kachri": a("puffRings"),
  "millet-snacks": a("millet"),
  "namkeen-seasoning": a("namkeen"),
  "roasted-snacks": a("chickpeas"),
  "complete-snack-lines": g.line,
};
