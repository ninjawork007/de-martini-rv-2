"use client";

import Tabs from "@/components/vehicle/Tabs";
import classNames from "classnames";
import compact from "lodash/compact";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { v4 as uuid } from "uuid";

import useVehicle from "../../../hooks/useVehicle";
import useImages from "../../../hooks/useImages";
import { ADMIN_URL } from "../../../services/urls";
import useVehicleImages from "../../../hooks/useVehicleImages";
import ImageGallery from "./ImageGallery";
import styles from "./styles.module.css";

const Vehicle = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { vehicle } = useVehicle(id);

  const { images: allImages } = useImages(`?populate=*`);

  const { images: vehicleImages } = useVehicleImages(
    `?filters[title]=${vehicle?.attributes?.tagline}&pagination[limit]=100&populate=*`
  );

  const isUsedVehicle = vehicle?.attributes?.vehicle_condition === "used";

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

  const defaultImages = [
    {
      original: "/images/vehicle.png",
      thumbnail: "/images/vehicle.png",
    },
  ];

  return (
    <div className="container-padding-x max-w-screen-[1900px] mx-auto mt-10 sm:mt-20">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10">
        <div className="w-full max-w-[600px] lg:w-[60%] 2xl:w-[70%] sm:mb-10">
          <ImageGallery images={images.length > 0 ? images : defaultImages} />
        </div>

        <div className="w-full lg:w-[40%] 2xl:w-[30%]">
          <h2>{vehicle?.attributes.title}</h2>
          <div className="text-3xl font-bold">
            {vehicle?.attributes?.tagline}
          </div>
          <div className="text-0053A6 font-bold text-lg">
            Stock #: {vehicle?.attributes?.item_number}
          </div>

          {isUsedVehicle ? (
            <div className="text-xl text-607D8B font-bold">
              RETAIL MSRP: <span className="line-through">$1,698,507</span>{" "}
              {vehicle?.attributes?.sale_price && (
                <span className="text-FF4000">
                  Special Sale Only - ${vehicle?.attributes?.sale_price}
                </span>
              )}
            </div>
          ) : (
            <div className="text-FF4000 text-lg uppercase font-bold">
              Sale Price - ${vehicle?.attributes?.sale_price}
            </div>
          )}
          <div>
            For this week&apos;s lowest price,{" "}
            <a
              href={`mailto:sales@demartini.com?subject=${vehicle?.attributes?.item_number}&body=${vehicle?.attributes?.tagline} Just%20press%20%27Send%27%20and%20we%27ll%20reply%20with%20this%20week%27s%20lowest%20price%20on%20this%20coach!`}
              className="text-0053A6 underline font-bold text-lg"
            >
              Click Here
            </a>
          </div>

          <table
            className={classNames(
              "table-fixed border border-ECEFF1 rounded-md overflow-hidden w-full my-4",
              styles.table
            )}
          >
            <thead className="bg-CFD8DC">
              <tr className="rounded-2xl">
                <th className="p-3 uppercase text-left">Vehicle Summary</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="uppercase">Chassis</td>
                <td className="font-bold">{vehicle?.attributes?.chassis}</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td className="uppercase">Generator</td>
                <td className="font-bold">
                  {vehicle?.attributes?.generator_type}
                </td>
              </tr>
              <tr>
                <td className="uppercase">Engine</td>
                <td className="font-bold">
                  {vehicle?.attributes?.engine?.data?.attributes?.name}
                </td>
              </tr>
              <tr className="bg-ECEFF1">
                <td className="uppercase">Category</td>
                <td className="font-bold">
                  {vehicle?.attributes?.category?.data?.attributes?.name}
                </td>
              </tr>
              <tr>
                <td className="uppercase">Mileage</td>
                <td className="font-bold">{vehicle?.attributes.mileage}</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td className="uppercase">Slide Out</td>
                <td className="font-bold">
                  {vehicle?.attributes?.slide?.data?.attributes?.name}
                </td>
              </tr>
              <tr>
                <td className="uppercase">Fuel</td>
                <td className="font-bold">{vehicle?.attributes?.fuel_type}</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td className="uppercase">Condition</td>
                <td className="font-bold">
                  {vehicle?.attributes?.vehicle_condition}
                </td>
              </tr>
              {!isUsedVehicle && (
                <tr>
                  <td className="uppercase">Interior Color</td>
                  <td className="font-bold">
                    {vehicle?.attributes?.interior_color}
                  </td>
                </tr>
              )}
              {!isUsedVehicle && (
                <tr className="bg-ECEFF1">
                  <td className="uppercase">Exterior Color</td>
                  <td className="font-bold">
                    {vehicle?.attributes?.exterior_color}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="flex flex-col gap-3 my-7">
            <div className="">
              <Link href={`/make-offer/${vehicle?.id}`}>
                <button
                  className={classNames(
                    "primary-button bg-B23DEB text-white w-full",
                    styles.makeOfferButton
                  )}
                >
                  Make An Offer!
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                href={`mailto:sales@demartini.com?subject=Request%20More%20Info:%20${vehicle?.attributes?.item_number}&body=${vehicle?.attributes?.tagline}`}
              >
                <button className="primary-button w-full">
                  Request More Info
                </button>
              </Link>
              <Link
                href={`mailto:?subject=Check%20out%20this%20RV:${vehicle?.attributes?.item_number}&body=${vehicle?.attributes?.tagline}%0D%0AURL:${ADMIN_URL}/vehicles/detail/${vehicle?.id}`}
              >
                <button className="primary-button w-full">
                  Send To Friend
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Tabs vehicle={vehicle} />

      <div className="flex flex-col items-center gap-4 mb-10">
        {images?.map((image) => (
          <Image
            key={uuid()}
            src={image.original}
            height={450}
            width={800}
            className="w-full"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Vehicle;
