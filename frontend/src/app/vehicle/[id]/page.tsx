import Image from "next/image";
import React from "react";
import { v4 as uuid } from "uuid";

import styles from "./styles.module.css";
import classNames from "classnames";
import Tabs from "@/components/vehicle/Tabs";
import Link from "next/link";

const Vehicle = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return (
    <div className="px-48">
      <div className="flex justify-center gap-10">
        <div>
          <Image
            src="/images/vehicle.png"
            height={450}
            width={800}
            alt=""
            className="rounded-lg"
          />
        </div>

        <div>
          <h2>Title</h2>
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
              "table-fixed border border-ECEFF1 rounded-md overflow-hidden",
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
                <td>Spartan K3</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td>Generator</td>
                <td>Onan 12.5 KW Diesel</td>
              </tr>
              <tr>
                <td>Engine</td>
                <td>Cummins X15 605HP Diesel</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td>Category</td>
                <td>Class A - Diesel</td>
              </tr>
              <tr>
                <td>Mileage</td>
                <td>New</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td>Slide Out</td>
                <td>Full Wall/3</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>Diesel</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td>Condition</td>
                <td>New</td>
              </tr>
              <tr>
                <td>Interior Color</td>
                <td>Wickham</td>
              </tr>
              <tr className="bg-ECEFF1">
                <td>Exterior Color</td>
                <td>Bates</td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col gap-3 my-7">
            <div className="flex gap-3">
              <button
                className={classNames(
                  "bg-B23DEB text-white rounded-lg shadow-md p-2 font-bold w-full",
                  styles.makeOfferButton
                )}
              >
                Make An Offer!
              </button>
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
