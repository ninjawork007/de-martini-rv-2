"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import useCategories from "../hooks/useCategories";

const vehicleData = [
  {
    heading: "Class A - Diesel",
    items: [
      { make: "Newmar", model: "King Aire" },
      { make: "Newmar", model: "London Aire" },
      { make: "Newmar", model: "Mountain Aire" },
      { make: "Newmar", model: "New Aire" },
      { make: "Newmar", model: "Dutch Star" },
      { make: "Newmar", model: "Ventana" },
      { make: "Newmar", model: "Super Star" },
      { make: "Forest River", model: "Berkshire" },
      { make: "Thor", model: "Tuscany" },
      { make: "Thor", model: "Venetian" },
      { make: "Thor", model: "Aria" },
      { make: "Monaco", model: "Diplomat" },
      { make: "Newmar", model: "Kountry Star" },
      { make: "Coachmen", model: "Sportscoach" },
      { make: "Thor", model: "Palazzo" },
      { make: "Dynamax", model: "Dynaquest" },
      { make: "Dynamax", model: "DX3 Super C" },
      { make: "Dynamax", model: "Europa" },
      { make: "Dynamax", model: "Force" },
      { make: "Dynamax", model: "Isata 5" },
      { make: "Dynamax", model: "Isata 3" },
      { make: "Jayco", model: "Seneca" },
      { make: "FR", model: "Forester MBS" },
      { make: "Roadtrek" },
      { make: "Thor", model: "Omni Super C" },
    ],
  },
  {
    heading: "Class A - Gas",
    items: [
      { make: "Forest River", model: "Georgetown" },
      { make: "Forest River", model: "FR3" },
      { make: "Newmar", model: "Canyon Star" },
      { make: "Newmar", model: "Bay Star" },
      { make: "Newmar", model: "Bay Star Sport" },
      { make: "Thor", model: "Outlaw" },
      { make: "Thor", model: "Windsport" },
      { make: "Thor", model: "Vegas" },
    ],
  },
  {
    heading: "Class B & C",
    items: [
      { make: "Newmar", model: "Super Star" },
      { make: "Dynamax", model: "Dynaquest" },
      { make: "Dynamax", model: "DX3 Super C" },
      { make: "Dynamax", model: "Europa" },
      { make: "Dynamax", model: "Force" },
      { make: "Dynamax", model: "Isata" },
      { make: "FR", model: "Forester MBS" },
      { make: "Jayco", model: "Greyhawk" },
      { make: "Jayco", model: "Melbourne" },
      { make: "Jayco", model: "Redhawk" },
      { make: "Jayco", model: "Seneca Super C" },
      { make: "Roadtrek" },
      { make: "Coachmen", model: "Concord" },
      { make: "Forest River", model: "Forester" },
      { make: "Thor", model: "Chateau" },
      { make: "Thor", model: "Omni Super C" },
    ],
  },
  {
    heading: "Towables",
    items: [
      { make: "Forest River", model: "Salem Hemisphere" },
      { make: "Forest River", model: "Surveyor" },
      { make: "Forest River", model: "R-Pod" },
    ],
  },
  {
    heading: "Park Homes",
    items: [{ make: "Palm Harbor" }, { make: "Skyline" }],
  },
];

const Footer = () => {
  const { categories } = useCategories();

  return (
    <div className="bg-E7E7DC container-padding-x py-20">
      {vehicleData?.length > 0 && (
        <div className="gap-10">
          <div className="gap-20 text-455A64 border-t-[0.5px] pt-5 border-b-[0.5px] pb-5 border-CFD8DC">
            <div className="flex flex-wrap justify-between gap-10 border-l-[0.5px] border-CFD8DC pl-3 border-r-[0.5px] pr-3">
              {vehicleData.slice(0, 5).map((category) => (
                <ul key={category?.heading}>
                  <li
                    key={category?.heading}
                    className="font-bold mb-2 text-263238 text-xl"
                  >
                    {category?.heading}
                  </li>
                  {category.items?.map((item) => (
                    <li
                      className="text-455A64 py-[2px]"
                      key={`${item?.make}-${item?.model}`}
                    >
                      <Link
                        href={`/categories?page=model&make=${item?.make}&model=${item?.model}`}
                      >
                        {item?.make} {item?.model} {/* {item?.series} */}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between my-8">
        <span>© Copyright 2022 DeMartini RV Sales</span>
        <div className="flex">
          <Link href="https://www.instagram.com/demartinirv/">
            <Image src="/icons/Instagram.svg" height={30} width={30} alt="" />
          </Link>
          <Link href="https://www.linkedin.com/company/demartini-rv-sales">
            <Image src="/icons/Linkedin.svg" height={30} width={30} alt="" />
          </Link>
          <Link href="https://twitter.com/demartinirv">
            <Image src="/icons/Twitter.svg" height={30} width={30} alt="" />
          </Link>
          <Link href="https://www.youtube.com/user/demartinirv">
            <Image src="/icons/Youtube.svg" height={30} width={30} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
