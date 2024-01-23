import FeaturedSpecial from "@/components/homepage/FeaturedSpecial";
import FeaturedVideos from "@/components/homepage/FeaturedVideos";
import ShopByCategory from "@/components/homepage/ShopByCategory";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
// import Video from "@/components/homepage/Video";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ShopByCategory />
      <FeaturedSpecial />
      <FeaturedVideos />
      {/* <Video
        url="/videos/intro.mp4"
        width="100%"
        height="100%"
        autoplay
        loop
        playing
      /> */}
      <WhyChooseUs />
      {/* Submit Credit Card */}
      <div
        className="w-full py-[22px] flex justify-center"
        style={{
          background: "linear-gradient(180deg, #447DAD 0%, #0F3760 100%)",
        }}
      >
        <Link
          href="https://gateway.appone.net/onlineapp/demartinirv"
          target="_blank"
        >
          <button className="uppercase primary-button text-lg xl:text-2xl px-[30px] py-[11px] xl:px-[60px] xl:py-[22px]">
            Submit Credit App
          </button>
        </Link>
      </div>
    </div>
  );
}
