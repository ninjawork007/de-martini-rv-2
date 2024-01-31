"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import RenderHTML from "../RenderHTML";
import { Category } from "../../types/vehicle";
import useCategories from "../../hooks/useCategories";
import { ADMIN_URL } from "../../services/urls";

const ShopByCategory = () => {
  const { categories } = useCategories();

  if (!categories?.length) return null;

  return (
    <div className="container-padding-x 2xl:px-72 my-20 mt-28 font-roboto">
      <h3 className="font-bold text-center text-2xl 2xl:text-3xl pb-9">
        Shop By Category
      </h3>

      <div className="flex flex-wrap justify-center gap-8 sm:text-lg">
        {categories
          ?.sort((a, b) => a?.attributes?.order - b?.attributes?.order)
          .map((category: Category) => (
            <Link
              className="flex flex-col items-center"
              href={`/categories?page=all&category_id=${category?.id}&category_name=${category?.attributes?.name}`}
              key={category?.id}
            >
              <Image
                className="mx-auto h-[60px]"
                src={
                  category?.attributes?.image?.data?.attributes?.url
                    ? `${ADMIN_URL}${category?.attributes?.image?.data?.attributes?.url}`
                    : "/images/rv.png"
                }
                alt=""
                width={100}
                height={150}
                unoptimized={true}
              />
              <div className="max-w-32 sm:max-w-full text-center">
                <RenderHTML html={category?.attributes?.name} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
