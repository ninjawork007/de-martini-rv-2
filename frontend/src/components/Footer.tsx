import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-E7E7DC px-10 py-20">
      <div className="gap-10 px-32">
        <div className=" gap-20 text-455A64 border-t-[0.5px] pt-5 border-b-[0.5px] pb-5 border-CFD8DC">
          <div className="flex justify-between gap-10 border-l-[0.5px] border-CFD8DC pl-3 border-r-[0.5px] pr-3">
            <ul>
              <li className="font-bold mb-2 text-263238">Class A Diesels</li>
              <li>Newmar King Aire</li>
              <li>Newmar London Aire</li>
              <li>Newmar Mountain Aire</li>
              <li>Newmar New Aire</li>
              <li>Newmar Dutch Star</li>
              <li>Newmar Ventana</li>
              <li>Newmar Super Star</li>
              <li>Forest River Berkshire</li>
              <li>Thor Tuscany</li>
              <li>Thor Venetian</li>
              <li>Thor Aria</li>
              <li>Monaco Diplomat</li>
              <li>Newmar Kountry Star</li>
              <li>Coachmen Sportscoach</li>
              <li>Thor Palazzo</li>
              <li>Dynamax Dynaquest</li>
              <li>Dynamax DX3 Super C</li>
              <li>Dynamax Europa</li>
              <li>Dynamax Force</li>
              <li>Dynamax Isata 5</li>
              <li>Dynamax Isata 3</li>
              <li>Jayco Seneca</li>
              <li>FR Forester MBS</li>
              <li>Roadtrek</li>
              <li>Thor Omni Super C</li>
            </ul>
            <ul>
              <li className="font-bold mb-2 text-263238">Class A Gas</li>
              <li>Forest River Georgetown</li>
              <li>Forest River FR3</li>
              <li>Newmar Canyon Star</li>
              <li>Newmar Bay Star</li>
              <li>Newmar Bay Star Sport</li>
              <li>Thor Outlaw</li>
              <li>Thor Windsport</li>
              <li>Thor Vegas</li>
            </ul>
            <ul>
              <li className="font-bold mb-2 text-263238">Class B & C</li>
              <li>Newmar Super Star</li>
              <li>Dynamax Dynaquest</li>
              <li>Dynamax DX3 Super C</li>
              <li>Dynamax Europa</li>
              <li>Dynamax Force</li>
              <li>Dynamax Isata</li>
              <li>FR Forester MBS</li>
              <li>Jayco Greyhawk</li>
              <li>Jayco Melbourne</li>
              <li>Jayco Redhawk</li>
              <li>Jayco Seneca Super C</li>
              <li>Roadtrek</li>
              <li>Coachmen Concord</li>
              <li>Forest River Forester</li>
              <li>Thor Chateau</li>
              <li>Thor Omni Super C</li>
            </ul>
            <ul>
              <li className="font-bold mb-2 text-263238">
                Fifth Wheels/Trailers
              </li>
              <li>Salem Hemisphere</li>
              <li>Forest River Surveyor</li>
              <li>Forest River R-Pod</li>
            </ul>
            <ul>
              <li className="font-bold mb-2 text-263238">Park Homes</li>
              <li>Palm Harbor</li>
              <li>Skyline</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-5 px-28">
        <span>© Copyright 2022 DeMartini RV Sales</span>
        <div className="flex">
          <Image src="/icons/Instagram.svg" height={30} width={30} alt="" />
          <Image src="/icons/Linkedin.svg" height={30} width={30} alt="" />
          <Image src="/icons/Twitter.svg" height={30} width={30} alt="" />
          <Image src="/icons/Youtube.svg" height={30} width={30} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
