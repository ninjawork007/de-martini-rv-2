"use client";

import classNames from "classnames";
import Image from "next/image";
import React from "react";
import ReactSelect from "react-select";

import { options } from "../constants";
import styles from "./styles.module.css";

interface HeaderProps {
  showCompanyName?: boolean;
  showSearchForm?: boolean;
}

const Select = () => (
  <ReactSelect
    className="h-10"
    components={{
      IndicatorSeparator: () => null,
    }}
    options={options}
    defaultValue={options[0]}
    styles={{
      control: (baseStyles, state) => ({
        ...baseStyles,
        height: 40,
      }),
    }}
  />
);

const Header: React.FC<HeaderProps> = ({
  showCompanyName = true,
  showSearchForm = true,
}) => {
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

        {showCompanyName && (
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
          <div className="bg-00669E p-8 flex flex-wrap gap-3 justify-center rounded-xl">
            {/* 1. vehicle_condition > NEW, USED, NEW AND USED */}
            {/* 2. category */}
            <div className="h-10">
              <Select />
            </div>
            <Select />
            <Select />
            <input className="h-10 rounded-md px-2" placeholder="Stock #" />
            <button className="primary-button">
              <Image
                src="/icons/MagnifyingGlass.svg"
                alt="Search"
                height={25}
                width={25}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
