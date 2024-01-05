import Image from "next/image";
import React from "react";

interface HeaderProps {
  showCompanyName?: boolean;
  showSearchForm?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  showCompanyName = true,
  showSearchForm = true,
}) => {
  return (
    <div className="relative mb-10">
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
            <select className="min-w-32">
              <option value="option1">Dummy Option 1</option>
              <option value="option2">Dummy Option 2</option>
            </select>
            <select className="min-w-32">
              <option value="option1">Dummy Option 1</option>
              <option value="option2">Dummy Option 2</option>
            </select>
            <select className="min-w-32">
              <option value="option1">Dummy Option 1</option>
              <option value="option2">Dummy Option 2</option>
            </select>
            <input placeholder="Stock #" />
            <button className="primary-button">
              <Image
                src="/icons/MagnifyingGlass.svg"
                alt="Search"
                height={30}
                width={30}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
