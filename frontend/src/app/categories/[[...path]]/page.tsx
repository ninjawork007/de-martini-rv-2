"use client";

import Pagination from "@/components/Pagination";
import Title from "@/components/Title";
import VehicleCard from "@/components/categories/VehicleCard";
import Sidebar from "@/components/categories/Sidebar";
// import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactSelect, { SingleValue } from "react-select";

import { ITEMS_PER_PAGE, options } from "../../../constants";
import service from "../../../services";
import { urls } from "../../../services/urls";
import { Vehicle } from "../../../types/vehicle";
import useCategories from "../../../hooks/useCategories";
import useImages from "../../../hooks/useImages";

type Sort =
  | "Recent"
  | "Price Low to High"
  | "Price High to Low"
  | "Length Long to Short"
  | "Length Short to Long"
  | "Make A-Z"
  | "Make Z-A";

const sortingOptions: {
  label: Sort;
  value: Sort;
}[] = [
  { label: "Recent", value: "Recent" },
  { label: "Price Low to High", value: "Price Low to High" },
  { label: "Price High to Low", value: "Price High to Low" },
  { label: "Length Long to Short", value: "Length Long to Short" },
  { label: "Length Short to Long", value: "Length Short to Long" },
  { label: "Make A-Z", value: "Make A-Z" },
  { label: "Make Z-A", value: "Make Z-A" },
];

const Page = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "";

  const { categories } = useCategories();

  const { images } = useImages("?populate=*");

  const [title, setTitle] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [sortBy, setSortBy] = useState<Sort>("Recent");

  const handleSort = (newValue: SingleValue<{ label: Sort; value: Sort }>) => {
    if (newValue?.value) setSortBy(newValue?.value);
  };

  useEffect(() => {
    setItemOffset(0);
  }, [page]);

  // get vehicles
  useEffect(() => {
    const getSortCondition = () => {
      if (sortBy === "Recent") return "sort[0]=id:desc";
      if (sortBy === "Price High to Low") return "sort[0]=sale_price:desc";
      if (sortBy === "Price Low to High") return "sort[0]=sale_price:asc";
      if (sortBy === "Make A-Z") return "sort[0]=make:asc";
      if (sortBy === "Make Z-A") return "sort[0]=make:desc";
      if (sortBy === "Length Long to Short") return "sort[0]=length:desc";
      if (sortBy === "Length Short to Long") return "sort[0]=length:asc";
    };

    const getVehicles = async (query: string) => {
      try {
        setLoading(true);
        const res = await service.get(
          `${query}&publicationState=live&pagination[start]=${itemOffset}&pagination[limit]=${ITEMS_PER_PAGE}&${getSortCondition()}`
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
    switch (page) {
      case "new":
        // show New RV's
        setTitle("New RVs");

        getVehicles(
          `${urls.vehicles}?filters[vehicle_condition]=new&populate=*`
        );

        break;

      case "used":
        // show Used RV's
        setTitle("Used RVs");

        getVehicles(
          `${urls.vehicles}?filters[vehicle_condition]=used&populate=*`
        );

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

      case "diesels":
        // show Used Diesel
        setTitle("Used Diesel");

        getVehicles(
          `${urls.vehicles}?filters[category][id]=${
            searchParams.get("category_id") || ""
          }&populate=*`
        );

        break;

      case "all":
        const categoryId = searchParams.get("category_id") || "";
        // show Shop by Category
        setTitle(
          categories.find((category) => category?.id === Number(categoryId))
            ?.attributes?.name || ""
        );

        getVehicles(
          `${urls.vehicles}?filters[category][id]=${categoryId}&populate=*`
        );

        break;

      case "model": {
        const make = searchParams.get("make") || "";
        const model = searchParams.get("model") || "";

        // show Shop by Brand
        setTitle(`${make} ${model}`);

        getVehicles(
          `${urls.vehicles}?filters[make][$eq]=${make}&filters[model][$eq]=${model}&populate=*`
        );

        break;
      }

      case "search":
        setTitle("Search Results");

        const condition = searchParams.get("condition") || "";
        const make = searchParams.get("make")?.split("$")?.[0] || "";
        const model = searchParams.get("make")?.split("$")?.[1] || "";
        const category = searchParams.get("category") || "";
        const stock = searchParams.get("stock") || "";

        const vehicleCondition =
          condition === "all"
            ? `filters[vehicle_condition][$eq]=used&filters[vehicle_condition][$eq]=new`
            : condition
            ? `filters[vehicle_condition][$eq]=${condition}`
            : "";

        const vehicleMake = make ? `&filters[make][$eq]=${make}` : "";
        const vehicleModel = model ? `&filters[model][$eq]=${model}` : "";
        const vehicleCategory = category
          ? `&filters[category][name][$eq]=${category}`
          : "";
        const vehicleStock = stock ? `&filters[item_number][$eq]=${stock}` : "";

        getVehicles(
          `${urls.vehicles}?${vehicleCondition}${vehicleMake}${vehicleModel}${vehicleCategory}${vehicleStock}&populate=*`
        );

        break;

      default:
        // show all vehicles
        setTitle("All Categories");

        getVehicles(`${urls.vehicles}?populate=*`);

        break;
    }
  }, [categories, itemOffset, page, searchParams, sortBy]);

  return (
    <div>
      <Title heading={title}>
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          <div className="text-md sm:text-lg">Sort By</div>
          <div className="min-w-[150px] sm:min-w-[400px]">
            <ReactSelect
              options={sortingOptions}
              defaultValue={sortingOptions[0]}
              components={{
                IndicatorSeparator: () => null,
              }}
              onChange={handleSort}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  height: 40,
                  fontSize: 14,
                  color: "#37474F",
                }),
              }}
            />
          </div>

          {/* <div className="flex items-center gap-3">
            Favorites
            <div className="flex justify-center items-center px-3 py-1 rounded-3xl border-[1px] border-B0BEC5">
              <Image src="/icons/Heart.svg" height={20} width={20} alt="" />
              <div>(01)</div>
            </div>
          </div> */}
        </div>
      </Title>

      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-8 container-padding-x">
        {/* categories with accordion */}
        <Sidebar />
        {/* vehicle list */}
        <div className="w-full grid md:grid-cols-2 gap-4">
          {/* {loading && <div>Loading..</div>} */}
          {!loading && !vehicles.length && (
            <div className="">No Vehicles Found</div>
          )}
          {vehicles?.map((vehicle: Vehicle) => (
            <VehicleCard key={vehicle.id} images={images} {...vehicle} />
          ))}
        </div>
      </div>

      {vehicles.length > 0 && (
        <Pagination
          totalPages={totalVehicles}
          itemOffset={itemOffset}
          setItemOffset={setItemOffset}
        />
      )}
    </div>
  );
};

export default Page;
