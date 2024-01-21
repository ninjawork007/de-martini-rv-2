import Image from "next/image";
import React from "react";

const Partners = () => (
  <div className="flex flex-wrap items-center justify-center gap-20 my-8 container-margin-x">
    <Image
      src="/images/demartini-logo.png"
      alt=""
      height={100}
      width={100}
      className="2xl:w-28"
    />
    <Image
      src="/images/jayco-logo.png"
      alt=""
      height={100}
      width={100}
      className="2xl:w-40"
    />
    <Image
      src="/images/thor-logo.png"
      alt=""
      height={100}
      width={100}
      className="2xl:w-40"
    />
    <Image
      src="/images/forestriver-logo.png"
      alt=""
      height={100}
      width={100}
      className="2xl:w-40"
    />
    <Image
      src="/images/dynamax-logo.png"
      alt=""
      height={100}
      width={100}
      className="2xl:w-40"
    />
    <Image
      src="/images/newmar-logo.png"
      alt=""
      height={100}
      width={100}
      className="2xl:w-40"
    />
  </div>
);

export default Partners;
