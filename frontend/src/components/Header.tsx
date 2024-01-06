"use client";

import Image from "next/image";
import React from "react";
import ReactSelect from "react-select";
import { options } from "../constants";

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
          <h1 className="absolute text-center top-5 left-0 right-0 text-white text-4xl flex justify-center uppercase drop-shadow-md">
            DeMartini RV Sales
          </h1>
        )}
      </div>

      {showSearchForm && (
        <div className="absolute -bottom-10 left-0 right-0 flex justify-center">
          <div className="bg-00669E p-8 flex gap-3 justify-center rounded-xl">
            <Select />
            <Select />
            <Select />
            <input className="h-10 rounded-md px-2 " placeholder="Stock #" />
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
