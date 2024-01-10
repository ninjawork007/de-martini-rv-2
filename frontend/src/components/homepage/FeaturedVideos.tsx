import React from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from '../styles.module.css';

interface CardProps {
  showFeatured?: boolean;
  showSubscribe?: boolean;
}

const Card: React.FC<CardProps> = ({ showFeatured, showSubscribe }) => {
  return (
    <div
      className={classNames(styles.cardShadow, "p-4 rounded-md bg-white max-w-[550px] 2xl:max-w-[650px]")}
    >
      <Image
        className="w-full max-h-[450px]"
        src="/images/van.png"
        alt=""
        height={468}
        width={800}
      />
      {showFeatured && (
        <p className="text-lg text-12B669 font-bold mt-4 text-center">
          Featured Video
        </p>
      )}
      <h3
        className={classNames("text-2xl font-bold text-center mb-2", {
          "mt-4": !showFeatured,
        })}
      >
        NEW! 2023 Newmar Dutch Star 4369
      </h3>
      <p className="text-lg text-center">
        See what&apos;s new in the best selling luxury diesel RV! Full Walk
        through Video!
      </p>
      {showSubscribe && (
        <p className="text-xl text-center">
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
  <div className="flex justify-center">
    <div className="grid lg:grid-cols-2 gap-4 my-20">
      {/* card 1 */}
      <Card />
      {/* card 2 */}
      <Card showFeatured showSubscribe />
    </div>
  </div>
);

export default FeaturedVideos;
