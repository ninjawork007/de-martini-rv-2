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
        <button className="uppercase primary-button">Submit Credit Card</button>
      </div>
      <RvSaleSlider />
      <Partners />
    </div>
  );
}
