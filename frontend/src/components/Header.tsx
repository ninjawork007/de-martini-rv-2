"use client";

import classNames from "classnames";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import ReactSelect, { GroupBase, OptionsOrGroups } from "react-select";

import styles from "./styles.module.css";
import useCategories from "../hooks/useCategories";
import useVehicles from "../hooks/useVehicles";
import { getUniqueBrandVehicles } from "../utils";

interface HeaderProps {
  showSearchForm?: boolean;
}

interface SelectProps {
  name: string;
  options: OptionsOrGroups<any, GroupBase<any>>;
  placeholder?: string;
}

const vehicleConditionOptions = [
  { label: "Used and New", value: "all" },
  { label: "Used", value: "used" },
  { label: "New", value: "new" },
];

const Select: React.FC<SelectProps> = ({ options, placeholder, name }) => (
  <ReactSelect
    className="h-10"
    components={{
      IndicatorSeparator: () => null,
    }}
    options={options}
    defaultValue={options[0]}
    styles={{
      control: (baseStyles) => ({
        ...baseStyles,
        height: 40,
        minWidth: 250,
      }),
    }}
    placeholder={placeholder}
    name={name}
  />
);

const Header: React.FC<HeaderProps> = ({ showSearchForm = true }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isHomepage = pathname === "/";

  const { categories } = useCategories();
  const { vehicles } = useVehicles(`/all`);

  const categoryOptions = categories.map((category) => ({
    label: category?.attributes?.name,
    value: category?.attributes?.name,
  }));

  const brandOptions = getUniqueBrandVehicles(vehicles).map((vehicle) => ({
    label: `${vehicle?.attributes?.make} ${vehicle?.attributes?.model}`,
    value: vehicle?.attributes?.make,
  }));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const body: Record<string, any> = {};
    for (const [key, value] of form.entries()) {
      body[key] = value;
    }

    let str = [];
    for (let p in body)
      if (body.hasOwnProperty(p)) {
        str.push(
          encodeURIComponent(p) + "=" + encodeURIComponent((body as any)?.[p])
        );
      }

    router.push(`/categories/search?${str.join("&")}`, { scroll: false });
  }

  return (
    <div className="relative mb-20">
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/banner.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt=""
        />

        {isHomepage && (
          <h1
            className={classNames(
              "absolute text-center top-16 left-0 right-0 text-white text-4xl md:text-7xl font-extrabold flex justify-center uppercase drop-shadow-md",
              styles.title
            )}
          >
            DeMartini RV Sales
          </h1>
        )}
      </div>

      {showSearchForm && (
        <div className="absolute -bottom-14 left-0 right-0 flex justify-center">
          <form
            onSubmit={onSubmit}
            className="bg-00669E p-8 flex flex-wrap gap-3 items-center justify-center rounded-xl"
          >
            <Select options={vehicleConditionOptions} name="condition" />
            <Select
              placeholder="All Brands"
              options={brandOptions}
              name="brand"
            />
            <Select
              placeholder="All Types"
              options={categoryOptions}
              name="category"
            />
            <input
              className="h-10 rounded-md px-2"
              placeholder="Stock #"
              name="stock"
            />
            <button className="primary-button">
              <Image
                src="/icons/MagnifyingGlass.svg"
                alt="Search"
                height={20}
                width={20}
              />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
