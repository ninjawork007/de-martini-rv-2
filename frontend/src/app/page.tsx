import FeaturedSpecial from "@/components/homepage/FeaturedSpecial";
import FeaturedVideos from "@/components/homepage/FeaturedVideos";
import Partners from "@/components/Partners";
import RvSaleSlider from "@/components/RvSaleSlider";
import ShopByCategory from "../components/homepage/ShopByCategory";
import WhyChooseUs from "../components/homepage/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <ShopByCategory />
      <FeaturedVideos />
      <FeaturedSpecial />
      <WhyChooseUs />
      {/* Submit Credit Card */}
      <div
        className="w-full py-5 flex justify-center"
        style={{
          background: "linear-gradient(180deg, #447DAD 0%, #0F3760 100%)",
        }}
      >
        <button
          className="uppercase py-3 px-6 2xl:px-14 2xl:py-5 primary-button"
          style={{
            background:
              "linear-gradient(101deg, #FFF5D1 -158.65%, #FFD323 134.31%)",
          }}
        >
          Submit Credit Card
        </button>
      </div>
      <RvSaleSlider />
      <Partners />
    </div>
  );
}
