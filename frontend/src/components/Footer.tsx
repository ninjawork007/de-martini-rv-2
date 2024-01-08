"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import service from "../services";
import { urls } from "../services/urls";
import { Category } from "../types/vehicle";
import CategoryVehicles from "./categories/CategoryVehicles";
import RenderHTML from "./RenderHTML";

const Footer = () => {
  const [categories, setCategories] = useState([]);

  // get categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await service.get(`${urls.categories}/?populate=*`);
        setCategories(res?.data?.data);
      } catch (error) {}
    };

    getCategories();
  }, []);

  return (
    <div className="bg-E7E7DC px-10 py-20">
      <div className="gap-10 px-4 md:px-20 lg:px-32">
        <div className="gap-20 text-455A64 border-t-[0.5px] pt-5 border-b-[0.5px] pb-5 border-CFD8DC">
          <div className="flex flex-wrap justify-between gap-10 border-l-[0.5px] border-CFD8DC pl-3 border-r-[0.5px] pr-3">
            {categories.slice(0, 5).map((category: Category) => (
              <ul key={category?.id}>
                <li key={category?.id} className="font-bold mb-2 text-263238">
                  <RenderHTML html={category?.attributes?.name} />
                </li>
                <CategoryVehicles id={category?.id} />
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between my-5 px-4 md:px-20 lg:px-28">
        <span>© Copyright 2022 DeMartini RV Sales</span>
        <div className="flex">
          <Image src="/icons/Instagram.svg" height={30} width={30} alt="" />
          <Image src="/icons/Linkedin.svg" height={30} width={30} alt="" />
          <Image src="/icons/Twitter.svg" height={30} width={30} alt="" />
          <Image src="/icons/Youtube.svg" height={30} width={30} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
