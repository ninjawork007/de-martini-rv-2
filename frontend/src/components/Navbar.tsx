import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center p-3 bg-C8E4FF">
        <div className="flex gap-3 ">
          <div className="underline font-semibold text-01294A">
            Testimonials
          </div>
          |
          <div className="underline font-semibold text-01294A">
            Sell Your RV
          </div>
          |
          <div className="underline font-semibold text-01294A">
            RV Wanted Form
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-5 px-2 py-5">
        <div className="flex gap-2">
          <input
            placeholder="What RV are you looking for?"
            className="input-box rounded-md p-4 min-w-[400px]"
          />
          <button className="primary-button w-32">Search</button>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <Image src="/icons/Phone.svg" height={30} width={30} alt="" />
            (800)576-1921
          </div>
          <div className="my-auto text-B0BEC5 text-2xl">|</div>
          <div className="flex items-center gap-2">
            <Image src="/icons/Email.svg" height={30} width={30} alt="" />
            sales@demartini.com
          </div>
        </div>
      </div>

      <div>
        <ul className="flex justify-center bg-00669E text-white gap-8 py-5">
          <li>New RV’s</li>
          <li>Used RV’s</li>
          <li>Used Diesels</li>
          <li>Web Special</li>
          <li>Clearance</li>
          <li>Parts & Service</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
