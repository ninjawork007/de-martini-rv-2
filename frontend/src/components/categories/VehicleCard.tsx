import classNames from "classnames";
import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";

const VehicleCard = () => {
  return (
    <div className={classNames(styles.card, "p-4", "max-w-[500px] rounded-md")}>
      <Image
        src="/images/van.png"
        width={450}
        height={350}
        quality={100}
        className="w-full"
        alt=""
      />
      <div className="mt-4">
        {/* make an offer */}
        <div className="flex justify-between items-center">
          <button className="secondary-button text-sm px-4">
            Make An Offer
          </button>
          <div className="text-12B669 font-bold text-base">Stock #D2730</div>
        </div>
        {/* title and desc */}
        <div>
          <h4 className="font-bold my-3 text-lg text-37474F">
            2024 Newmar King Aire 4596
          </h4>
          <p className="text-607D8B text-sm mb-3">
            2024 Newmar King Aire 4596 Full Wall/3 Slide-Out Luxury Diesel
            Motorhome. <br />
            FOR THE MOST DISCERNING OF TRAVELERS. The 2024 King Aire, as our
            most luxurious coach, doesn’t hold anything back. There’s not a
            single detail overlooked. Every feature,…
          </p>
        </div>
        {/* retail */}
        <div className="text-607D8B pt-2 text-sm flex items-center">
          Retail MSRP :
          <span className="line-through text-455A64 pl-2 text-base">
            $12569.00
          </span>
        </div>
        {/* sale price */}
        <div className="text-607D8B pt-2 text-sm flex items-center">
          Sale Price :
          <span className="text-xl font-bold text-263238 pl-2">$11569.00</span>
        </div>

        <button className="primary-button w-full text-0053A6 font-semibold mt-6 py-4">
          View Details
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
