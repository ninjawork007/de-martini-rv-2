"use client";

import Tabs from "@/components/vehicle/Tabs";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 as uuid } from "uuid";

import styles from "./styles.module.css";
import useVehicle from "../../../hooks/useVehicle";
import useImages from "../../../hooks/useImages";
import { ADMIN_URL } from "../../../services/urls";

const Vehicle = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { vehicle } = useVehicle(id);

  const { images } = useImages();

  const imageData = images?.find(
    (mediaImage) =>
      mediaImage?.attributes?.name ===
      vehicle?.attributes?.image?.data?.attributes?.image
  );

  return (
    <div className="px-10 lg:px-30 2xl:px-48">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10">
        <div className="w-full lg:w-[60%] 2xl:w-[70%]">
          <Image
            src={
              imageData
                ? `${ADMIN_URL}/${imageData?.attributes?.url}`
                : "/images/vehicle.png"
            }
            height={450}
            width={800}
            alt=""
            className="rounded-lg w-full"
          />
        </div>

        <div className="w-full lg:w-[40%] 2xl:w-[30%]">
          <h2>{vehicle?.attributes.title}</h2>
          <div className="text-3xl font-bold">RETAIL MSRP: $1,698,507</div>
          <div>
            <span className="text-039754 font-bold text-lg">
              Make an Offer!
            </span>{" "}
            For this week&apos;s lowest price,{" "}
            <a
              href="mailto:sales@demartini.com"
              className="text-0053A6 underline font-bold text-lg"
            >
              Click Here
            </a>
          </div>

          <table
            className={classNames(
              "table-fixed border border-ECEFF1 rounded-md overflow-hidden w-full",
              styles.table
            )}
          >
            <thead className="bg-CFD8DC">
              <tr className="rounded-2xl">
                <th className="p-3">Vehicle Summary</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chassis</td>
                <td>{vehicle?.attributes?.chassis}</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td>Generator</td>
                <td>{vehicle?.attributes?.generator_type}</td>
              </tr>
              <tr>
                <td>Engine</td>
                <td>{vehicle?.attributes?.engine?.data?.attributes?.name}</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td>Category</td>
                <td>{vehicle?.attributes?.category?.data?.attributes?.name}</td>
              </tr>
              <tr>
                <td>Mileage</td>
                <td>{vehicle?.attributes.mileage}</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td>Slide Out</td>
                <td>{vehicle?.attributes?.slide?.data?.attributes?.name}</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>{vehicle?.attributes?.fuel_type}</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td>Condition</td>
                <td>{vehicle?.attributes?.vehicle_condition}</td>
              </tr>
              <tr>
                <td>Interior Color</td>
                <td>{vehicle?.attributes?.interior_color}</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td>Exterior Color</td>
                <td>{vehicle?.attributes?.exterior_color}</td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col gap-3 my-7">
            <div className="flex gap-3">
              <Link href={`/make-offer/${vehicle?.id}`}>
                <button
                  className={classNames(
                    "bg-B23DEB text-white rounded-lg shadow-md p-2 font-bold w-full",
                    styles.makeOfferButton
                  )}
                >
                  Make An Offer!
                </button>
              </Link>

              <button className="bg-12B669 rounded-lg shadow-md p-2 font-bold w-full">
                Make An Offer!
              </button>
            </div>

            <div className="flex gap-3">
              <button className="primary-button w-full">Email Us</button>
              <button className="primary-button w-full">
                Request More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <Tabs />

      <div className="flex flex-col items-center gap-4 mb-10">
        {["/images/vehicle.png", "/images/vehicle.png"].map((image) => (
          <Image key={uuid()} src={image} height={450} width={800} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Vehicle;
