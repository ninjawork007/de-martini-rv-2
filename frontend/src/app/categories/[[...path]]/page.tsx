"use client";

import VehicleCard from "@/components/categories/VehicleCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import ReactSelect from "react-select";

import { accordionData, options } from "../../../constants";
import service from "../../../services";
import { urls } from "../../../services/urls";
import { Vehicle } from "../../../types/vehicle";

const Page = ({ params }: { params: { path: string[] } }) => {
  const paths = params.path;

  const [title, setTitle] = useState("");
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getVehicles = async () => {
      const res = await service.get(`${urls.vehicles}?populate=*`);
      setVehicles(res?.data?.data);
    };

    getVehicles();
  }, []);

  useEffect(() => {
    switch (paths?.[0]) {
      case "type":
        if (paths?.[1] === "new") {
          // show New RV's
          setTitle("New RVs");
        }
        if (paths?.[1] === "used") {
          // show Used RV's
          setTitle("Used RVs");
        }
        break;

      case "clearance":
        // show Clearance
        setTitle("Clearance RVs");

        break;

      case "web_specials":
        // show Web Specials
        setTitle("Web Specials");

        break;

      case "used_rvs":
        // show Used Diesel using /categories/used_rvs/90/class-a-diesel
        setTitle("Class A - Diesel");

        break;

      case "all":
        // show Shop by Category using /categories/all/103/toyhaulers
        setTitle("All Categories");

        break;

      case "model_new":
        // show Shop by Brand using /categories/model_new/Forest-River-r_pod
        setTitle("Model New");

        break;

      case "search":
        // show Search using /vehicles/search?query=...
        setTitle("Search Results");

        break;

      default:
        // show all vehicles
        setTitle("All Categories");

        break;
    }
  }, [paths]);

  return (
    <div>
      <div className="bg-F2F4F5 flex justify-center items-center px-48 py-5 my-10">
        <h2 className="mr-auto font-medium text-2xl">All Vehicles</h2>
        <div className="flex items-center gap-5">
          <div>Sort By</div>
          <ReactSelect
            options={options}
            defaultValue={options[0]}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
          Favorites
          <div className="flex justify-center items-center px-2 py-1 rounded-3xl border-[1px] border-B0BEC5">
            <Image src="/icons/Heart.svg" height={20} width={20} alt="" />
            <div>(01)</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8 mx-auto">
        <div className="min-w-[300px]">
          <div className="font-bold py-4 px-6 mb-4 bg-CFD8DC text-263238 text-lg">
            Shop By Brand
          </div>
          <Accordion
            allowZeroExpanded
            preExpanded={accordionData.map((item) => item.uuid)}
          >
            {accordionData.map((item) => (
              <AccordionItem uuid={item.uuid} key={item.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flex justify-between py-4 text-37474F text-lg font-bold px-2">
                    {item.title}
                    <AccordionItemState>
                      {({ expanded }) => (
                        <Image
                          src="/icons/CaretUp.svg"
                          height={20}
                          width={20}
                          alt=""
                          className={expanded ? "" : "rotate-180"}
                        />
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul>
                    {item.data.map((item) => (
                      <li
                        className="p-2 text-base text-455A64 cursor-pointer hover:text-263238"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-0053A6 rounded-lg p-4 max-w-[300px] my-4">
            <button className="primary-button text-left text-lg w-full text-263238 font-semibold py-3.5 px-6 rounded-[4px] mb-3">
              Make An Offer!
            </button>
            <ul className="text-ECEFF1 py-2.5 px-3 pl-5">
              <li className="list-disc">Click the Make An Offer button</li>
              <li className="list-disc">
                On the form, just enter a price that’ll work for you and we’ll
                get back to you as soon as possible and let you know if we are
                willing to sell you that coach at your price or we may give you
                a counter-offer.
              </li>
              <li className="list-disc">
                Offers are not binding until we mutually agree upon price, terms
                and conditions between customer and dealership and a contract is
                signed.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {vehicles?.map((vehicle: Vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
