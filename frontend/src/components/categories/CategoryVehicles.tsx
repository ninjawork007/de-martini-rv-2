"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import service from "../../services";
import { urls } from "../../services/urls";
import { Vehicle } from "../../types/vehicle";
import { getUniqueBrandVehicles } from "../../utils";

interface CategoryVehiclesProps {
  id: number;
  className?: string;
}

const CategoryVehicles: React.FC<CategoryVehiclesProps> = ({
  id,
  className,
}) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  // get vehicles
  useEffect(() => {
    const getCategoryVehicles = async () => {
      try {
        const res = await service.get(
          `${urls.vehicles}?filters[category][id]=${id}&populate=category&fields[0]=make&fields[1]=model&fields[2]=series&pagination[pageSize]=10&pagination[page]=1&publicationState=live`
        );

        setVehicles(getUniqueBrandVehicles(res?.data?.data));
      } catch (error) {}
    };

    if (id) getCategoryVehicles();
  }, [id]);

  return (
    <>
      {vehicles?.map((item: Vehicle) => (
        <li className={className} key={item?.id}>
          <Link
            href={`/categories/model_new/${item?.attributes?.make}-${item?.attributes?.model}`}
          >
            {item?.attributes?.make} {item?.attributes?.model}{" "}
            {item?.attributes?.series}
          </Link>
        </li>
      ))}
    </>
  );
};

export default CategoryVehicles;
