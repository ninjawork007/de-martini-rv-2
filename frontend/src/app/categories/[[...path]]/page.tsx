"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";

import { accordionData, options } from "../../../constants";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const Page = ({ params }: { params: { path: string[] } }) => {
  const paths = params.path;
  const [title, setTitle] = useState("");

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
      {title}

      <div className="bg-F2F4F5 flex justify-center items-center px-48 py-5 my-10">
        <h2 className="mr-auto font-medium text-2xl">Newmar King Aire</h2>
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

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <div className="font-bold p-3 bg-CFD8DC">Shop By Brand</div>
          <Accordion
            allowZeroExpanded
            preExpanded={accordionData.map((item) => item.uuid)}
          >
            {accordionData.map((item) => (
              <AccordionItem key={item.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flex">
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
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="col-span-9">Vehicles</div>
      </div>
    </div>
  );
};

export default Page;
