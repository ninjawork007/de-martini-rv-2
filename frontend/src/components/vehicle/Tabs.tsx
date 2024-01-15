"use client";

import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";

import { vehiclePageTabsArray } from "../../constants";
import { Vehicle } from "../../types/vehicle";
import RenderHTML from "../RenderHTML";

interface TabsProps {
  vehicle?: Vehicle;
}

interface ContentProps extends TabsProps {
  activeTab: string;
}

const features = [
  "Seamless, one-piece fiberglass front and rear caps",
  "5.5 kW Onan generator",
  "Exterior entertainment center w/LED TV",
  "Electric patio awning with LED lights",
  "Backup and side-view cameras with monitor",
  "Exterior entertainment center w/LED TV mounted on swivel bracket & DVD/AM/FM radio & speakers",
  "Bunk beds (36A)",
  "Automatic hydraulic leveling jacks",
  "Power sun shade on front windshield",
  "Panoramic windshield",
  "Residential refrigerator",
  "Residential size convection microwave",
  "King-sized bed",
  "Optional overhead bunk",
  "Optional washer/dryer",
];

const Content: React.FC<ContentProps> = ({ activeTab, vehicle }) => {
  return (
    <div className="pb-10">
      <h3 className="text-2xl font-[900] my-6">{activeTab}</h3>

      {activeTab === "Description" && (
        <Content activeTab={activeTab} vehicle={vehicle} />
      )}
      {activeTab === "Features" && (
        <Content activeTab={activeTab} vehicle={vehicle} />
      )}
      {activeTab === "MSRP Sheet" && (
        <Content activeTab={activeTab} vehicle={vehicle} />
      )}
      {activeTab === "Financing" && (
        <Content activeTab={activeTab} vehicle={vehicle} />
      )}
      {activeTab === "Insurance & Warranty" && (
        <Content activeTab={activeTab} vehicle={vehicle} />
      )}
    </div>
  );
};

const Tabs: React.FC<TabsProps> = ({ vehicle }) => {
  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {vehiclePageTabsArray.map((tab) => (
          <button
            key={tab}
            className={classNames(
              {
                "secondary-button": activeTab === tab,
                "tertiary-button": activeTab !== tab,
              },
              "rounded-t-[4px] rounded-b-none px-6"
            )}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <hr className="h-[1px] text-CFD8DC" />

      <div className="pb-10">
        <h3 className="text-2xl font-[900] my-6">{activeTab}</h3>
        {activeTab === "Description" && (
          <RenderHTML html={vehicle?.attributes?.description || ""} />
        )}
        {activeTab === "Features" && (
          <>
            <h3 className="text-2xl font-bold text-455A64 my-6">
              Features May Include :{" "}
            </h3>
            <ul className="pl-5">
              {features.map((feature, index) => (
                <li className="list-disc" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </>
        )}
        {/* {activeTab === "MSRP Sheet" && (
          <Content activeTab={activeTab} vehicle={vehicle} />
        )} */}
        {activeTab === "Financing" && (
          <>
            DeMartini RV Sales works with the top banks and lenders in order to
            get you the best rates and most flexible RV financing available. We
            are professionals at negotiating RV finance terms with the banks and
            take the hassle out of the process for you. Give us a try and you
            can discover how affordable and easy financing an RV can be. We can
            work to get you the following finance benefits:
            <ul className="py-2.5 px-3 pl-5">
              <li className="list-disc">Same-day RV financing </li>
              <li className="list-disc">Finance terms up to 20 years</li>
              <li className="list-disc">
                Affordable payments that fit your budget
              </li>
            </ul>{" "}
            Talk to one of our Finance Managers today, financing an RV may
            actually be a better option than paying cash with today&apos;s low
            rates. Your loan interest can possibly be tax deductible as a
            second-home mortgage interest. We would be happy to take a look at
            your situation and explain your finance options. Give us a call at
            1.800.576.1921 or fill out our secure online credit application to
            get started today!
          </>
        )}
        {activeTab === "Insurance & Warranty" && (
          <div className="flex flex-col gap-3">
            <div className="font-bold">RV Insurance Quote</div>
            Fill out our online insurance quote form and we will get back to you
            with a competitive quote from the best RV Insurance providers.
            <Link href="/forms/insurance-quote">
              <button className="primary-button">
                Get an RV Insurance Quote
              </button>
            </Link>
            <div className="font-bold">Extended Service Contract Quote</div>
            <p>
              Are you PROTECTED? DON&apos;T let unexpected repair costs RUIN
              YOUR FUN! Click below for a free quote on an Extended Service
              Contract and Tire & Wheel Protection for your RV.
            </p>
            <Link href="/forms/extended-service">
              <button className="primary-button">
                Get an Extended Service Quote
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
