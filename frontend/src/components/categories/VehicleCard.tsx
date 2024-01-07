import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";
import { MAX_DESCRIPTION_LENGTH } from "../../constants";
import { Vehicle } from "../../types/vehicle";
import { htmlDecode } from "../../utils";

const VehicleCard: React.FC<Vehicle> = ({
  id,
  attributes: {
    year,
    make,
    model,
    series,
    item_number,
    short_description,
    description,
    sale_price,
  },
}) => {
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
          <div className="text-12B669 font-bold text-base">
            Stock #{item_number}
          </div>
        </div>
        {/* title and desc */}
        <div>
          <h4 className="font-bold my-3 text-lg text-37474F">
            {year} {make} {model} {series}
          </h4>
          <div className="text-607D8B text-sm mb-3">
            <div
              dangerouslySetInnerHTML={{
                __html: htmlDecode(short_description || description)?.slice(
                  0,
                  MAX_DESCRIPTION_LENGTH
                ),
              }}
            />
          </div>
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
          <span className="text-xl font-bold text-263238 pl-2">
            ${sale_price}
          </span>
        </div>

        <button className="primary-button w-full text-0053A6 font-semibold mt-6 py-4">
          <Link href={`/vehicle/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
