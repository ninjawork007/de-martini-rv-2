import Image from "next/image";
import RenderHTML from "@/components/RenderHTML";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import CategoryVehicles from "./CategoryVehicles";
import useCategories from "../../hooks/useCategories";
import { Category } from "../../types/vehicle";

const Sidebar = () => {
  const { categories } = useCategories();

  return (
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
            On the form, just enter a price that’ll work for you and we’ll get
            back to you as soon as possible and let you know if we are willing
            to sell you that coach at your price or we may give you a
            counter-offer.
          </li>
          <li className="list-disc">
            Offers are not binding until we mutually agree upon price, terms and
            conditions between customer and dealership and a contract is signed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
