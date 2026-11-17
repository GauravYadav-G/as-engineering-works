import Link from "next/link";

import type { Product } from "@/db/schema";
import { productImageCaption } from "@/data/media";
import { IconArrowUpRight } from "@/components/icons";

export function ProductCard({
  product,
  categoryName,
}: {
  product: Product;
  categoryName: string;
}) {
  const caption = productImageCaption(product.slug);
  const isRelated = caption === "Related equipment shown";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-forest/[0.07] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/[0.16] hover:shadow-[0_24px_48px_-28px_rgba(17,20,22,0.18)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white p-4 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={`${caption}: ${product.name}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <p className="font-mono text-[11px] font-medium tracking-[0.14em] text-sage uppercase">
            {categoryName}
          </p>
          {isRelated && (
            <span className="font-mono text-[10.5px] text-sage/75">Related equipment</span>
          )}
        </div>

        <h3 className="mt-2.5 text-[19px] leading-[1.3] font-semibold tracking-[-0.02em] text-forest transition-colors group-hover:text-moss">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-[44px] text-[14.5px] leading-[1.65] text-sage">
          {product.shortDescription}
        </p>

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-3 border-t border-forest/[0.07] pt-4">
            <div className="min-w-0">
              <span className="block font-mono text-[11px] tracking-[0.12em] text-sage/75 uppercase">
                {product.capacity ?? "Capacity on request"}
              </span>
              <span className="mt-0.5 block font-mono text-[11.5px] font-medium text-forest/75">
                MOQ {product.moq}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-forest transition-colors group-hover:text-moss">
              <span>View details</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-forest/12 text-forest/70 transition-all duration-200 group-hover:border-forest group-hover:bg-forest group-hover:text-white">
                <IconArrowUpRight className="h-4 w-4" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
