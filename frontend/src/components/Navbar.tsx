"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import styles from "./styles.module.css";

const links = [
  { id: 0, title: "Home", url: "/" },
  { id: 1, title: "New RV’s", url: "/categories?page=new" },
  { id: 2, title: "Used RV’s", url: "/categories?page=used" },
  {
    id: 3,
    title: "Used Diesels",
    url: "/categories?page=diesels&category_id=90",
  },
  { id: 4, title: "Web Special", url: "/categories?page=web_specials" },
  { id: 5, title: "Clearance", url: "/categories?page=clearance" },
  { id: 6, title: "Parts & Service", url: "/parts-service" },
  { id: 7, title: "Contact Us", url: "/contact" },
];

const Navbar = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "";

  const router = useRouter();

  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedSearch = searchTerm?.trim();
    router.push(
      `/categories?page=search&make=${trimmedSearch}&term=${trimmedSearch}`,
      {
        scroll: false,
      }
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center p-2 md:p-3 bg-C8E4FF">
        <div className="flex gap-1 md:gap-3 font-mona-sans">
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
        <div className="flex flex-wrap gap-3 sm:text-lg">
          <div className="flex items-center gap-2">
            <Image
              className="h-9 w-9 sm:h-11 sm:w-11"
              src="/icons/Phone.svg"
              height={44}
              width={44}
              alt=""
            />
            (800)576-1921
          </div>
          <div className="my-auto text-B0BEC5 text-2xl">|</div>
          <div className="flex items-center gap-2">
            <Image
              className="h-9 w-9 sm:h-11 sm:w-11"
              src="/icons/Email.svg"
              height={44}
              width={44}
              alt=""
            />
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
                  "text-FFD323": page
                    ? link.url?.includes(page)
                    : pathname === link.url,
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
