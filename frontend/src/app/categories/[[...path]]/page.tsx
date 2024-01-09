"use client";

import CategoryVehicles from "@/components/categories/CategoryVehicles";
import RenderHTML from "@/components/RenderHTML";
import VehicleCard from "@/components/categories/VehicleCard";
import Image from "next/image";
// import Link from "next/link";
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

import { options } from "../../../constants";
import service from "../../../services";
import { urls } from "../../../services/urls";
import { Category, Vehicle } from "../../../types/vehicle";

const Page = ({ params }: { params: { path: string[] } }) => {
  const paths = params.path;

  const [title, setTitle] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  // get categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await service.get(`${urls.categories}/?populate=*`);
        setCategories(res?.data?.data);
      } catch (error) {}
    };

    getCategories();
  }, []);

  // get vehicles
  useEffect(() => {
    const getVehicles = async (query: string) => {
      try {
        setLoading(true);
        const res = await service.get(`${query}&publicationState=live`);
        setVehicles(res?.data?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    switch (paths?.[0]) {
      case "type":
        if (paths?.[1] === "new") {
          // show New RV's
          getVehicles(
            `${urls.vehicles}?filters[vehicle_condition]=new&populate=*`
          );

          setTitle("New RVs");
        }
        if (paths?.[1] === "used") {
          // show Used RV's
          getVehicles(
            `${urls.vehicles}?filters[vehicle_condition]=used&populate=*`
          );

          setTitle("Used RVs");
        }
        break;

      case "clearance":
        // show Clearance
        getVehicles(`${urls.vehicles}?filters[clearance]=1&populate=*`);

        setTitle("Clearance RVs");

        break;

      case "web_specials":
        // show Web Specials
        getVehicles(`${urls.vehicles}?filters[web_special]=1&populate=*`);

        setTitle("Web Specials");

        break;

      case "used_rvs":
        // show Used Diesel using /categories/used_rvs/90/class-a-diesel
        getVehicles(
          `${urls.vehicles}?filters[category][id]=${paths?.[1]}&populate=*`
        );

        setTitle("Class A - Diesel");

        break;

      case "all":
        // show Shop by Category using /categories/all/103/toyhaulers
        getVehicles(
          `${urls.vehicles}?filters[category][id]=${paths?.[1]}&populate=*`
        );

        setTitle("Category Name");

        break;

      case "model_new":
        // show Shop by Brand using /categories/model_new/Forest-River-r_pod

        const makeModel = paths?.[1]?.replaceAll("%20", " ")?.split("-");
        getVehicles(
          `${urls.vehicles}?filters[make][$eq]=${makeModel?.[0]}&filters[model][$eq]=${makeModel?.[1]}&populate=*`
        );

        setTitle("Model New");

        break;

      case "search":
        // show Search using /categories/search?query=&condition=used&category=101&from_year=2023&to_year=2024&make=Audi&price=0-50000&length=31-33&advanced-search=SEARCH
        getVehicles(
          `${urls.vehicles}?filters[make][$eq]=${paths?.[0]}&filters[model][$eq]=${paths?.[1]}&populate=*`
        );
        setTitle("Search Results");

        break;

      default:
        // show all vehicles
        getVehicles(`${urls.vehicles}?populate=*`);

        setTitle("All Categories");

        break;
    }
  }, [paths]);

  return (
    <div>
      <div className="bg-F2F4F5 flex flex-wrap justify-center items-center px-12 md:px-28 lg:px-48 py-5 my-10">
        <h2 className="mr-auto font-medium text-2xl">All Vehicles</h2>
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          <div>Sort By</div>
          <ReactSelect
            options={options}
            defaultValue={options[0]}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
          <div className="flex items-center gap-3">
            Favorites
            <div className="flex justify-center items-center px-3 py-1 rounded-3xl border-[1px] border-B0BEC5">
              <Image src="/icons/Heart.svg" height={20} width={20} alt="" />
              <div>(01)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-8">
        {/* categories with accordion */}
        <div className="lg:min-w-[300px]">
          <div className="font-bold py-4 px-6 mb-4 bg-CFD8DC text-263238 text-lg">
            Shop By Brand
          </div>
          <Accordion
            allowZeroExpanded
            preExpanded={categories.map((category: Category) => category?.id)}
          >
            {categories.map((category: Category) => (
              <AccordionItem uuid={category?.id} key={category?.id}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flex justify-between py-4 text-37474F text-lg font-bold px-2">
                    {/* <Link href={`/categories/all/${category?.id}`}> */}
                    <RenderHTML html={category?.attributes?.name} />
                    {/* </Link> */}
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
                    <CategoryVehicles
                      id={category?.id}
                      className="p-2 text-base text-455A64 cursor-pointer hover:text-263238"
                    />
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
        {/* vehicle list */}
        <div className="grid md:grid-cols-2 gap-4">
          {loading && <div>Loading..</div>}
          {vehicles?.map((vehicle: Vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
