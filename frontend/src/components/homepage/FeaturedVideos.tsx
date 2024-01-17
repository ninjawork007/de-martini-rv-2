"use client";

import React, { useRef, useState } from "react";
import classNames from "classnames";

import styles from "../styles.module.css";
import Video from "./Video";
import Image from "next/image";

interface CardProps {
  showFeatured?: boolean;
  showSubscribe?: boolean;
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({
  showFeatured,
  showSubscribe,
  title,
  description,
}) => {
  const ref = useRef();

  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={classNames(
        styles.featuredCardShadow,
        "p-4 rounded-md bg-white max-w-[550px] 2xl:max-w-[650px]"
      )}
    >
      <div className="relative" onClick={() => setPlaying((prev) => !prev)}>
        {!playing && (
          <Image
            className={styles.play}
            src="/icons/Play.svg"
            height={70}
            width={70}
            alt=""
            onClick={() => setPlaying((prev) => !prev)}
          />
        )}
        <Video
          url="/videos/intro.mp4"
          width="100%"
          height="100%"
          controls={false}
          playing={playing}
          ref={ref}
        />
      </div>

      {showFeatured && (
        <p className="text-lg text-12B669 font-bold mt-4 text-center font-roboto">
          Featured Video
        </p>
      )}
      <h3
        className={classNames("text-2xl font-bold text-center mb-2", {
          "mt-4": !showFeatured,
        })}
      >
        {title}
      </h3>
      <p className="text-lg text-center text-455A64 leading-6">{description}</p>
      {showSubscribe && (
        <p className="text-lg text-center leading-[30px] mt-[18px]">
          Subscribe to our{" "}
          <a
            href="https://www.youtube.com/demartinirv"
            className="text-0053A6 font-bold"
          >
            YouTube Channel
          </a>{" "}
          to see more videos!
        </p>
      )}
    </div>
  );
};

const FeaturedVideos = () => (
  <div className="flex justify-center container-margin-x my-20">
    <div className="grid lg:grid-cols-2 gap-6">
      {/* card 1 */}
      <Card
        title="NEW! 2024 Dynamax Europa 31SS"
        description="Check out all the new features and selling points on the SHORTEST Super C!"
      />
      {/* card 2 */}
      <Card
        title="NEW! 2023 Newmar Dutch Star 4369"
        description="See what's new in the best selling luxury diesel RV! Full Walk through Video!"
        showFeatured
        showSubscribe
      />
    </div>
  </div>
);

export default FeaturedVideos;
