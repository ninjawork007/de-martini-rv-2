"use client";

import compact from "lodash/compact";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

import useVehicles from "../../hooks/useVehicles";
import useImages from "../../hooks/useImages";
import useVehicleImages from "../../hooks/useVehicleImages";
import { ADMIN_URL } from "../../services/urls";

const FeaturedSpecial = () => {
  const { vehicles } = useVehicles(
    `?filters[featured_special]=1&pagination[limit]=1`
  );

  const vehicle = vehicles[0];

  const { images: allImages } = useImages(`?populate=*`);

  const { images: vehicleImages } = useVehicleImages(
    `?filters[title]=${vehicle?.attributes?.tagline}&populate=*`
  );

  const images = useMemo(() => {
    return compact(
      vehicleImages?.map((image) => {
        const original = allImages?.find(
          (mediaImage) =>
            mediaImage?.attributes?.name === image?.attributes?.image
        );

        if (!original) return null;

        const url = `${ADMIN_URL}${original?.attributes?.url}`;

        return {
          original: url,
          thumbnail: url,
        };
      })
    );
  }, [allImages, vehicleImages]);

  return (
    <div className="w-full flex flex-wrap xl:flex-nowrap justify-center min-h-[450px] bg-[url('/images/feature-bg.png')] bg-no-repeat bg-cover">
      <div className="w-full xl:w-1/2">
        <Image
          src={images[0]?.original || "/images/featured_special.png"}
          alt=""
          width={500}
          height={300}
          className="w-full h-full"
        />
      </div>
      <div className="w-full xl:w-1/2 px-16 py-28 flex flex-col justify-center">
        <div
          className="text-white bg-12B669 rounded-md px-6 py-3 font-bold text-2xl w-fit mb-5"
          style={{
            boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.25) inset",
          }}
        >
          Featured Special
        </div>
        <h3 className="text-white text-2xl 2xl:text-[48px] font-semibold 2xl:leading-[100%]">
          <div className="flex flex-col gap-2 font-medium 2xl:gap-5">
            <p>{vehicle?.attributes?.tagline}</p>
            <p>Xplorer Edition</p>
          </div>
        </h3>
        <p className="text-xl xl:text-xl 2xl:text-[28px] font-bold text-CFD8DC 2xl:leading-[42px] my-4 2xl:my-8">
          Xplorer Package, New Floorplan Only 32&#39;!
        </p>
        <h4 className="text-white text-2xl 2xl:text-[48px] font-semibold 2xl:leading-[100%] mt-3">
          MSRP: $1,698,507
        </h4>
        <Link
          href={`mailto:sales@demartini.com?subject=Request%20More%20Info:%20${vehicle?.attributes?.item_number}&body=${vehicle?.attributes?.tagline}`}
        >
          <button
            className="primary-button text-[1.7rem] px-9 py-4 mt-10 w-fit"
            style={{
              boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.25) inset",
            }}
          >
            GET SALE PRICE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSpecial;
