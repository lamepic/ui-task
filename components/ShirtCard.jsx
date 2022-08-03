import Image from "next/image";
import Link from "next/link";
import React from "react";

function ShirtCard({ product }) {
  return (
    <div className="w-60 flex-shrink-0">
      <div>
        <img
          src={`${product.gallery[0].image}`}
          className="h-full contain w-full contain"
          // height={200}
          // width={200}
          alt={product.product_name}
        />
      </div>
      <Link href={`/shirt/${product.id}`}>
        <div className="p-4 border-2 cursor-pointer">
          <p className="font-light text-sm">{product.product_name}</p>
          {product.short_description ? (
            <p className="text-xs">{product.short_description}</p>
          ) : (
            <br />
          )}
          <div className="flex gap-3 mt-2">
            <p className="font-semibold">€{product.variants[0]?.price}</p>
            {/* {oldPrice && (
              <p className="line-through text-red-500 text-sm">{oldPrice}</p>
            )} */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShirtCard;
