import json
import os
import re
import ssl
import urllib.request
from PIL import Image, ImageEnhance

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# All 45 product mappings to their official product listing photography on IndiaMART
img_map = {
    "corn-puff-making-machine": "https://3.imimg.com/data3/HH/TQ/MY-452167/snacks-machine-500x500.jpg",
    "snacks-puff-extruder-machine": "https://3.imimg.com/data3/UB/UY/MY-452167/snacks-puff-machine-500x500.jpg",
    "cheese-ball-extruder": "https://5.imimg.com/data5/SELLER/Default/2022/11/GC/AH/RD/452167/puffed-rice-machinery-1000x1000.jpg",
    "twin-screw-extruder": "https://5.imimg.com/data5/SELLER/Default/2022/11/GC/AH/RD/452167/puffed-rice-machinery-1000x1000.jpg",
    "snacks-puff-extruder": "https://4.imimg.com/data4/SC/ON/MY-452167/snacks-puff-machine-500x500.jpg",
    "snack-flavoring-machine": "https://5.imimg.com/data5/SELLER/Default/2024/6/430418670/ET/CN/YB/452167/snack-flavoring-machine-1000x1000.jpg",
    "kurkure-manufacturing-machine": "https://4.imimg.com/data4/XO/CI/MY-452167/kur-kure-plant-500x500.jpg",
    "automatic-kurkure-machine": "https://4.imimg.com/data4/PO/HW/MY-452167/kurkure-making-machine-500x500.jpg",
    "kurkure-making-machine": "https://3.imimg.com/data3/TI/UV/MY-452167/kurkure-making-machines-500x500.jpg",
    "kurkure-making-machine-25hp": "https://4.imimg.com/data4/PO/HW/MY-452167/kurkure-making-machine-500x500.jpg",
    "kurkure-extruder": "https://3.imimg.com/data3/BD/MK/MY-452167/kurkure-extruder-500x500.jpg",
    "pasta-making-machine": "https://5.imimg.com/data5/SELLER/Default/2022/11/VC/XD/OF/452167/pasta-making-machine-1000x1000.jpg",
    "macaroni-pasta-making-machine": "https://5.imimg.com/data5/PR/CQ/MY-452167/macaroni-pasta-machine-500x500.jpg",
    "pasta-extruder-machine": "https://5.imimg.com/data5/YP/AA/MY-452167/pasta-extruder-machine-500x500.jpeg",
    "vermicelli-extruder-machine": "https://5.imimg.com/data5/SELLER/Default/2022/11/LF/YF/EC/452167/vermicelli-making-machine-1000x1000.jpg",
    "pola-puff-cutter-machine": "https://3.imimg.com/data3/XB/QS/MY-452167/mad-angle-cutter-1000x1000.jpg",
    "continuous-dryer": "https://5.imimg.com/data5/SELLER/Default/2022/7/VR/IB/HR/452167/continuous-dryer-500x500.jpg",
    "tray-dryer": "https://3.imimg.com/data3/LR/EC/MY-452167/tray-dryer-for-vermicelli-500x500.jpg",
    "pasta-static-dryer": "https://5.imimg.com/data5/SELLER/Default/2022/11/EJ/KQ/DV/452167/pasta-static-dryer-1000x1000.jpg",
    "rotary-cell-roaster": "https://5.imimg.com/data5/HS/JG/OO/SELLER-452167/rotary-roaster-cell-500x500.jpg",
    "rotary-roaster-for-puff": "https://5.imimg.com/data5/PX/FF/JF/SELLER-452167/rotary-roaster-for-puff-500x500.jpg",
    "automatic-snacks-roaster-toaster": "https://5.imimg.com/data5/SELLER/Default/2022/7/FA/JV/UH/452167/automatic-snacks-roaster-toaster-machine-500x500.jpg",
    "soya-chunk-machine": "https://5.imimg.com/data5/SELLER/Default/2023/2/LI/LL/OT/452167/soya-chunk-machine-1000x1000.jpeg",
    "soya-nuggets-making-machine": "https://5.imimg.com/data5/SELLER/Default/2025/4/506560846/MH/JA/QK/452167/soya-nuggtes-making-machine-1000x1000.jpg",
    "soya-bean-bari-and-nuggets-plant": "https://5.imimg.com/data5/SELLER/Default/2024/6/430419796/TF/WR/PH/452167/soya-nugget-plant-1000x1000.jpeg",
    "soya-nugget-plant": "https://5.imimg.com/data5/SELLER/Default/2024/6/430419796/TF/WR/PH/452167/soya-nugget-plant-1000x1000.jpeg",
    "energy-food-extruder": "https://3.imimg.com/data3/LS/RF/MY-452167/heavy-duty-extruder-500x500.jpg",
    "corn-snacks-machine": "https://5.imimg.com/data5/SELLER/Default/2023/11/361012977/FQ/GC/YD/452167/corn-snacks-machine-1000x1000.jpg",
    "millet-extruder-and-processing-plant": "https://5.imimg.com/data5/SELLER/Default/2024/6/424538246/MU/EN/GL/452167/millet-extruder-and-millet-processing-plant-1000x1000.jpg",
    "snacks-food-processing-plant": "https://5.imimg.com/data5/SELLER/Default/2023/11/361012542/ZM/YQ/RE/452167/corn-snacks-machine-1000x1000.png",
    "flavor-coating-machine": "https://4.imimg.com/data4/YN/US/MY-452167/snacks-masala-mixing-machine-500x500.jpg",
    "flavor-coating-systems": "https://3.imimg.com/data3/OD/TW/MY-452167/puff-coating-systems-500x500.jpg",
    "masala-mixing-machine": "https://5.imimg.com/data5/AP/CR/OH/SELLER-452167/masala-mixing-machine-500x500.jpg",
    "food-mixing-machine": "https://5.imimg.com/data5/SELLER/Default/2022/7/IH/AJ/AP/452167/food-mixing-machine-500x500.jpg",
    "slurry-kettle-mixing-machine": "https://3.imimg.com/data3/KN/OK/MY-452167/slurry-systems-500x500.jpg",
    "inclined-conveyor-belt": "https://3.imimg.com/data3/BL/OB/MY-452167/conveyor-belt-500x500.jpg",
    "screw-conveyor": "https://3.imimg.com/data3/EW/XJ/MY-452167/screw-conveyor-500x500.jpg",
    "industrial-roaster": "https://5.imimg.com/data5/HS/JG/OO/SELLER-452167/rotary-roaster-cell-500x500.jpg",
    "puff-kachri-machine": "https://3.imimg.com/data3/CL/ET/MY-452167/ring-plant-500x500.jpg",
    "puff-extruder-machine": "https://3.imimg.com/data3/UB/UY/MY-452167/snacks-puff-machine-500x500.jpg",
    "cheese-balls-making-machine": "https://5.imimg.com/data5/SELLER/Default/2022/11/GC/AH/RD/452167/puffed-rice-machinery-1000x1000.jpg",
    "snacks-making-line": "https://3.imimg.com/data3/TI/UV/MY-452167/kurkure-making-machines-500x500.jpg",
    "soya-nuggets-extruder": "https://5.imimg.com/data5/SELLER/Default/2025/4/506560846/MH/JA/QK/452167/soya-nuggtes-making-machine-1000x1000.jpg",
    "soybean-processing-machinery": "https://5.imimg.com/data5/SELLER/Default/2025/5/512984359/IC/ZD/CL/452167/soya-nuggtes-making-machine-1000x1000.jpeg",
    "snacks-puff-making-machine": "https://3.imimg.com/data3/OB/AJ/MY-452167/puff-copy-500x500.jpg",
}

out_dir = "public/images/products"
os.makedirs(out_dir, exist_ok=True)
os.makedirs("/tmp/raw_products", exist_ok=True)

print(f"Starting download and enhancement for {len(img_map)} product images...")

for index, (slug, base_url) in enumerate(img_map.items(), 1):
    dest_path = os.path.join(out_dir, f"{slug}.jpg")
    raw_path = f"/tmp/raw_products/{slug}_raw"

    # Try 1000x1000 variant first if base_url is 500x500 or 250x250
    urls_to_try = []
    if "500x500" in base_url:
        urls_to_try.append(base_url.replace("500x500", "1000x1000"))
    elif "250x250" in base_url:
        urls_to_try.append(base_url.replace("250x250", "1000x1000"))
        urls_to_try.append(base_url.replace("250x250", "500x500"))
    urls_to_try.append(base_url)

    downloaded = False
    for test_url in urls_to_try:
        try:
            req = urllib.request.Request(test_url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
                content = resp.read()
                if len(content) > 1000:
                    with open(raw_path, "wb") as f:
                        f.write(content)
                    downloaded = True
                    break
        except Exception:
            continue

    if not downloaded:
        print(f"[{index}/{len(img_map)}] FAILED to download {slug} from {base_url}")
        continue

    try:
        im = Image.open(raw_path).convert("RGB")
        w, h = im.size

        # Image Quality Enhancement:
        # 1. Subtle sharpness enhancement to make machine parts, blades, and stainless steel edges pop
        im_sharp = ImageEnhance.Sharpness(im).enhance(1.22)
        # 2. Subtle contrast boost to remove factory lighting haze and deepen shadows
        im_contrast = ImageEnhance.Contrast(im_sharp).enhance(1.07)
        # 3. Subtle color boost for natural tone
        im_enhanced = ImageEnhance.Color(im_contrast).enhance(1.03)

        im_enhanced.save(dest_path, "JPEG", quality=92, optimize=True)
        final_size = os.path.getsize(dest_path)
        print(f"[{index}/{len(img_map)}] OK: {slug}.jpg ({w}x{h}, {final_size} bytes)")
    except Exception as e:
        print(f"[{index}/{len(img_map)}] ERROR processing {slug}: {e}")

print("Done! All product images processed.")
