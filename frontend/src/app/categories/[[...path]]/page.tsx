"use client";

import CategoryVehicles from "@/components/categories/CategoryVehicles";
import Pagination from "@/components/Pagination";
import Partners from "@/components/Partners";
import RvSaleSlider from "@/components/RvSaleSlider";
import RenderHTML from "@/components/RenderHTML";
import Title from "@/components/Title";
import VehicleCard from "@/components/categories/VehicleCard";
import Image from "next/image";
// import Link from "next/link";
import { useSearchParams } from "next/navigation";
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

import { ITEMS_PER_PAGE, options } from "../../../constants";
import service from "../../../services";
import { urls } from "../../../services/urls";
import { Category, Vehicle } from "../../../types/vehicle";
import useCategories from "../../../hooks/useCategories";
import useImages from "../../../hooks/useImages";

const Page = ({ params }: { params: { path: string[] } }) => {
  const paths = params.path;
  const searchParams = useSearchParams();

  const { categories } = useCategories();

  const { images } = useImages("?populate=*");

  const [title, setTitle] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const [totalVehicles, setTotalVehicles] = useState(0);

  // get vehicles
  useEffect(() => {
    const getVehicles = async (query: string) => {
      try {
        setLoading(true);
        const res = await service.get(
          `${query}&publicationState=live&pagination[start]=${itemOffset}&pagination[limit]=${ITEMS_PER_PAGE}`
        );
        setVehicles(res?.data?.data);
        setTotalVehicles(res?.data?.meta?.pagination?.total);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    // get title and vehicles based on page route
    switch (paths?.[0]) {
      case "type":
        if (paths?.[1] === "new") {
          // show New RV's
          setTitle("New RVs");

          getVehicles(
            `${urls.vehicles}?filters[vehicle_condition]=new&populate=*`
          );
        }
        if (paths?.[1] === "used") {
          // show Used RV's
          setTitle("Used RVs");

          getVehicles(
            `${urls.vehicles}?filters[vehicle_condition]=used&populate=*`
          );
        }
        break;

      case "clearance":
        // show Clearance
        setTitle("Clearance RVs");

        getVehicles(`${urls.vehicles}?filters[clearance]=1&populate=*`);

        break;

      case "web_specials":
        // show Web Specials
        setTitle("Web Specials");

        getVehicles(`${urls.vehicles}?filters[web_special]=1&populate=*`);

        break;

      case "used_rvs":
        // show Used Diesel using /categories/used_rvs/90/class-a-diesel
        setTitle("Class A - Diesel");

        getVehicles(
          `${urls.vehicles}?filters[category][id]=${paths?.[1]}&populate=*`
        );

        break;

      case "all":
        // show Shop by Category using /categories/all/103/toyhaulers
        setTitle(
          categories.find((category) => category?.id === Number(paths?.[1]))
            ?.attributes?.name || ""
        );

        getVehicles(
          `${urls.vehicles}?filters[category][id]=${paths?.[1]}&populate=*`
        );

        break;

      case "model_new":
        // show Shop by Brand using /categories/model_new/Forest-River-r_pod
        const makeModel = paths?.[1]?.replaceAll("%20", " ")?.split("-");
        setTitle(makeModel.join(" "));

        getVehicles(
          `${urls.vehicles}?filters[make][$eq]=${makeModel?.[0]}&filters[model][$eq]=${makeModel?.[1]}&populate=*`
        );

        break;

      case "search":
        setTitle("Search Results");

        const condition = searchParams.get("condition") || "";
        const brand = searchParams.get("brand") || "";
        const category = searchParams.get("category") || "";
        const stock = searchParams.get("stock") || "";

        const vehicleCondition =
          condition === "all"
            ? `filters[vehicle_condition][$eq]=used&filters[vehicle_condition][$eq]=new`
            : condition
            ? `filters[vehicle_condition][$eq]=${condition}`
            : "";

        const vehicleBrand = brand ? `&filters[make][$eq]=${brand}` : "";
        const vehicleCategory = category
          ? `&filters[category][name][$eq]=${category}`
          : "";
        const vehicleStock = stock ? `&filters[item_number][$eq]=${stock}` : "";

        getVehicles(
          `${urls.vehicles}?${vehicleCondition}${vehicleBrand}${vehicleCategory}${vehicleStock}&populate=*`
        );

        break;

      default:
        // show all vehicles
        setTitle("All Categories");

        getVehicles(`${urls.vehicles}?populate=*`);

        break;
    }
  }, [categories, itemOffset, paths, searchParams]);

  return (
    <div>
      <Title heading={title}>
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
      </Title>

      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-8 2xl:px-64">
        {/* categories with accordion */}
        <div className="w-full sm:w-auto lg:min-w-[300px]">
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

          <div className="bg-0053A6 rounded-lg p-4 w-full sm:max-w-[300px] my-4">
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
        <div className="w-full grid md:grid-cols-2 gap-4">
          {loading && <div>Loading..</div>}
          {!loading && !vehicles.length && (
            <div className="">No Vehicles Found</div>
          )}
          {vehicles?.map((vehicle: Vehicle) => (
            <VehicleCard key={vehicle.id} images={images} {...vehicle} />
          ))}
        </div>
      </div>

      <Pagination
        totalPages={totalVehicles}
        itemOffset={itemOffset}
        setItemOffset={setItemOffset}
      />

      <RvSaleSlider />
      <Partners />
    </div>
  );
};

export default Page;
