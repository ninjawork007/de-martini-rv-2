import React from "react";
import Image from "next/image";

const FeaturedSpecial = () => (
  <div className="w-full flex flex-wrap xl:flex-nowrap justify-center">
    <div className="w-full xl:w-1/2">
      <Image
        src="/images/featured_special.png"
        alt=""
        width={500}
        height={300}
        className="w-full h-full"
      />
    </div>
    <div className="bg-0053A6 w-full xl:w-1/2 px-16 py-8 xl:py-0 flex flex-col justify-center">
      <div
        className="text-white bg-12B669 rounded-md p-2 xl:p-4 font-bold text-base xl:text-xl w-fit mb-3"
        style={{
          boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.25) inset",
        }}
      >
        Featured Special
      </div>
      <h3 className="text-white text-xl xl:text-2xl 2xl:text-[32px] font-semibold">
        2024 Dynamax DX3 32KD Xplorer Edition
      </h3>
      <p className="text-md xl:text-lg 2xl:text-xl font-bold text-CFD8DC my-3">
        Xplorer Package, New Floorplan Only 32&#39;!
      </p>
      <h4 className="text-white text-xl xl:text-2xl 2xl:text-[32px] font-semibold">
        MSRP: $1,698,507
      </h4>
      <button
        className="primary-button px-9 py-4 mt-8 w-fit"
        style={{
          boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.25) inset",
        }}
      >
        GET SALE PRICE
      </button>
    </div>
  </div>
);

export default FeaturedSpecial;
