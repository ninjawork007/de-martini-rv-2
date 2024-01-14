import uniqBy from "lodash/uniqBy";

import { Vehicle } from "../types/vehicle";

export const showMoreDots = (input: string, length: number) => {
  if (!input) return "";

  if (input.length > length) return "...";
};

export const htmlDecode = (input: string) => {
  if (document === undefined) return "";

  let e = document.createElement("div");
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue || "";
};

export const getUniqueBrandVehicles = (vehicles: Vehicle[]) => {
  const mergedData = vehicles?.map((item: Vehicle) => ({
    ...item,
    make_model: `${item?.attributes?.make}-${item?.attributes?.model}`,
  }));

  const data = uniqBy(mergedData, "make_model");

  return data?.map((item: any) => {
    delete item?.make_model;
    return item;
  });
};
