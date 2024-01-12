"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import RenderHTML from "../RenderHTML";
import { Category } from "../../types/vehicle";
import useCategories from "../../hooks/useCategories";

const ShopByCategory = () => {
  const { categories } = useCategories();

  if (!categories?.length) return null;

  return (
    <div className="px-10 md:px-40 lg:px-60 mb-20">
      <h3 className="font-bold text-2xl py-8">Shop By Category</h3>

      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category: Category) => (
          <Link
            className="flex flex-col items-center"
            href={`/categories/all/${category?.id}/${category?.attributes?.name}`}
            key={category?.id}
          >
            <Image
              className="mx-auto"
              src="/images/rv.png"
              alt=""
              width={100}
              height={50}
            />

            <RenderHTML html={category?.attributes?.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
