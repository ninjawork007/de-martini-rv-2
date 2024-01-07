"use client";

import classNames from "classnames";
import React, { useState } from "react";

import { vehiclePageTabsArray } from "../../constants";

interface ContentProps {
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

const Content: React.FC<ContentProps> = ({ activeTab }) => {
  return (
    <div className="pb-10">
      <h3 className="text-2xl font-[900] my-6">{activeTab}</h3>
      <p>
        The Vision XL is a Class A gas motorhome from Entegra Coach. Built on
        the Ford F53 chassis, Vision XL was created for those seeking new
        landscapes and is everything you would expect, and more, from a Class A
        RV!
      </p>
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
    </div>
  );
};

const Tabs = () => {
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

      <div>
        {activeTab === "Description" && <Content activeTab={activeTab} />}
        {activeTab === "Features" && <Content activeTab={activeTab} />}
        {activeTab === "MSRP Sheet" && <Content activeTab={activeTab} />}
        {activeTab === "Financing" && <Content activeTab={activeTab} />}
        {activeTab === "Insurance & Warranty" && (
          <Content activeTab={activeTab} />
        )}
      </div>
    </div>
  );
};

export default Tabs;
