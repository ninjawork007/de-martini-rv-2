"use client";

import classNames from "classnames";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
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

const Select: React.FC<SelectProps> = ({ options, placeholder, name }) => {
  const [selected, setSelected] = useState(options[0]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page") || "";

    if (page !== "search") {
      setSelected(options[0]);
    }
  }, [options, searchParams]);

  return (
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
          minWidth: 200,
          fontSize: 14,
        }),
      }}
      placeholder={placeholder}
      name={name}
      value={selected}
      onChange={(newValue) => setSelected(newValue)}
    />
  );
};

const Header: React.FC<HeaderProps> = ({ showSearchForm = true }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const ref = useRef<HTMLFormElement>(null);

  const isHomepage = pathname === "/";

  const { categories } = useCategories();
  const { vehicles } = useVehicles(`/all`);

  const categoryOptions = categories.map((category) => ({
    label: category?.attributes?.name,
    value: category?.attributes?.name,
  }));

  const brandOptions = getUniqueBrandVehicles(vehicles).map((vehicle) => ({
    label: `${vehicle?.attributes?.make} ${vehicle?.attributes?.model}`,
    value: `${vehicle?.attributes?.make}$${vehicle?.attributes?.model}`,
  }));

  useEffect(() => {
    const page = searchParams.get("page") || "";

    if (page !== "search") {
      ref.current?.reset();
    }
  }, [searchParams]);

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

    router.push(`/categories?page=search&${str.join("&")}`, { scroll: false });
  }

  return (
    <div className="relative md:mb-20">
      <div
        className={classNames("relative w-full", {
          "h-[467px]": isHomepage,
          "h-[360px]": !isHomepage,
        })}
      >
        <Image
          src="/images/banner.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition="bottom"
          alt=""
        />

        {isHomepage && (
          <h1
            className={classNames(
              "absolute text-center top-16 left-0 right-0 text-white text-6xl md:text-9xl 2xl:text-[150px] font-extrabold font-balboa flex justify-center uppercase drop-shadow-md",
              styles.title
            )}
          >
            DeMartini RV Sales
          </h1>
        )}
      </div>

      {showSearchForm && (
        <div className="md:absolute md:-bottom-3 2xl:-bottom-6 left-0 right-0 flex justify-center">
          <form
            ref={ref}
            onSubmit={onSubmit}
            className={classNames(
              styles.formGradient,
              "p-6 2xl:p-[36px] grid grid-cols-1 md:flex flex-wrap gap-[17px] items-center justify-center sm:rounded-xl w-full md:w-fit"
            )}
          >
            <div className="w-full md:w-48 2xl:w-60">
              <Select options={vehicleConditionOptions} name="condition" />
            </div>
            <div className="w-full md:w-48 2xl:w-60">
              <Select
                placeholder="All Brands"
                options={[
                  {
                    label: "All Brands",
                    value: "",
                  },
                  ...brandOptions,
                ]}
                name="make"
              />
            </div>
            <div className="w-full md:w-48 2xl:w-60">
              <Select
                placeholder="All Types"
                options={[
                  {
                    label: "All Types",
                    value: "",
                  },
                  ...categoryOptions,
                ]}
                name="category"
              />
            </div>
            <input
              className="h-10 rounded-md px-2 w-full md:w-48 2xl:w-60"
              placeholder="Stock #"
              name="stock"
            />
            <button className="primary-button p-[11px] flex justify-center text-center">
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
