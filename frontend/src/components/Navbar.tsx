"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const links = [
  { id: 0, title: "Home", url: "/" },
  { id: 1, title: "New RV’s", url: "/categories/type/new" },
  { id: 2, title: "Used RV’s", url: "/categories/type/used" },
  {
    id: 3,
    title: "Used Diesels",
    url: "/categories/used_rvs/90/class-a-diesel",
  },
  { id: 4, title: "Web Special", url: "/categories/web_specials" },
  { id: 5, title: "Clearance", url: "/categories/clearance" },
  { id: 6, title: "Parts & Service", url: "/parts_service" },
  { id: 7, title: "Contact Us", url: "/contact" },
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const pathname = usePathname();

  const onSearch = () => {
    router.push(`/categories/search?brand=${searchTerm}`, { scroll: false });
  };

  return (
    <div className="flex flex-col">
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

      <div className="flex justify-center flex-wrap gap-5 px-2 py-5">
        <div className="flex flex-wrap gap-2">
          <input
            placeholder="What RV are you looking for?"
            className="input-box rounded-md p-4 md:min-w-[400px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={onSearch} className="primary-button w-32">
            Search
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
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
        <ul className="flex flex-wrap justify-center bg-00669E text-white text-lg gap-8 py-5">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={classNames({
                "border-b-2 text-FFD323": pathname === link.url,
              })}
            >
              <li>{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
