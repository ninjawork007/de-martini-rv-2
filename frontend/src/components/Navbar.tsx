"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

import styles from "./styles.module.css";

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
  { id: 6, title: "Parts & Service", url: "/parts-service" },
  { id: 7, title: "Contact Us", url: "/contact" },
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const pathname = usePathname();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/categories/search?brand=${searchTerm}&term=${searchTerm}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center p-3 bg-C8E4FF">
        <div className="flex gap-3 font-mona-sans">
          <Link href="/testimonials">
            <div className="underline font-semibold text-01294A">
              Testimonials
            </div>
          </Link>
          |
          <Link href="/forms/sell-your-rv">
            <div className="underline font-semibold text-01294A">
              Sell Your RV
            </div>
          </Link>
          |
          <Link href="/forms/rv-wanted">
            <div className="underline font-semibold text-01294A">
              RV Wanted Form
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-5 px-2 py-5 font-oswald">
        <form className="flex flex-wrap gap-2" onSubmit={onSubmit}>
          <input
            placeholder="What RV are you looking for?"
            className="input-box rounded-md p-4 md:min-w-[400px] placeholder-37474F"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="primary-button py-2 2xl:py-4 px-4 2xl:px-9 w-32"
          >
            Search
          </button>
        </form>
        <div className="flex flex-wrap gap-3 text-lg">
          <div className="flex items-center gap-2">
            <Image src="/icons/Phone.svg" height={44} width={44} alt="" />
            (800)576-1921
          </div>
          <div className="my-auto text-B0BEC5 text-2xl">|</div>
          <div className="flex items-center gap-2">
            <Image src="/icons/Email.svg" height={44} width={44} alt="" />
            sales@demartini.com
          </div>
        </div>
      </div>

      <div>
        <ul
          className={classNames(
            styles.navbarGradient,
            "flex flex-wrap justify-center text-white text-lg gap-4 2xl:gap-8 py-5"
          )}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={classNames(
                {
                  "text-FFD323": pathname === link.url,
                },
                "font-oswald text-lg"
              )}
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
