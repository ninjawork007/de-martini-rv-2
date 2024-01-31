"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import classNames from "classnames";

import styles from "./styles.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useVehicles from "../hooks/useVehicles";
import { Vehicle } from "../types/vehicle";

interface SliderCardProps {
  vehicle: Vehicle;
}

const SliderCard: React.FC<SliderCardProps> = ({ vehicle }) => {
  return (
    <div
      className={classNames(
        styles.sliderCard,
        "bg-white rounded-md my-2 p-4 w-[95%] flex flex-col items-center mx-4 mb-6 sm:min-h-[560px]"
      )}
    >
      <Image
        src="/images/sample.png"
        alt=""
        width={200}
        height={500}
        className="w-full h-72 rounded-lg"
      />
      <div className="py-4 flex flex-col items-center flex-grow">
        <h3 className="text-263238 text-center text-lg lg:text-2xl font-semibold mb-3 leading-[33px]">
          {vehicle?.attributes?.tagline}
        </h3>
        <div className="text-black text-lg">Retail MSRP: $1,698,507</div>

        <Link
          href={`mailto:sales@demartini.com?subject=${vehicle?.attributes?.item_number}&body=${vehicle?.attributes?.tagline} Just%20press%20%27Send%27%20and%20we%27ll%20reply%20with%20this%20week%27s%20lowest%20price%20on%20this%20coach!`}
        >
          <div className="text-455A64 text-lg">
            For this week&apos;s lowest price
          </div>
        </Link>
      </div>
      <button className="primary-button px-9 py-3.5">Contact Dealer</button>
    </div>
  );
};

function Arrow(props: { onClick?: () => void; direction: "left" | "right" }) {
  const { onClick, direction } = props;

  const arrowImage =
    direction === "left" ? "/icons/CaretLeft.svg" : "/icons/CaretRight.svg";

  return (
    <button
      className={`bg-white rounded-md absolute top-64 ${
        direction === "right" ? "right-0" : ""
      } h-fit p-2`}
      style={{
        boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <Image src={arrowImage} alt="" height={25} width={25} />
    </button>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <Arrow direction="right" />,
  prevArrow: <Arrow direction="left" />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RvSaleSlider = () => {
  const { vehicles } = useVehicles(`?filters[featured_special]=1`);

  return (
    <div className="my-20 max-w-screen-2xl mx-auto container-margin-x">
      {/* title */}
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h3 className="text-2xl 2xl:text-[32px] font-bold">
          RVs For Sale{" "}
          <span className="text-xl text-455A64 font-normal">
            (Featured Specials -
            <span className="px-1">Check out these great deals!</span>)
          </span>
        </h3>
        <Link href="/categories">
          <h4 className="text-xl text-0538FF font-bold">
            Shop All RV’s For Sale
          </h4>
        </Link>
      </div>
      {/* slider */}
      <Slider {...settings}>
        {vehicles?.map((vehicle) => (
          <SliderCard key={vehicle?.id} vehicle={vehicle} />
        ))}
      </Slider>
    </div>
  );
};

export default RvSaleSlider;
