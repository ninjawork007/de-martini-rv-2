import FeaturedSpecial from "@/components/homepage/FeaturedSpecial";
import FeaturedVideos from "@/components/homepage/FeaturedVideos";
import ShopByCategory from "../components/homepage/ShopByCategory";
import WhyChooseUs from "../components/homepage/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <ShopByCategory />
      <WhyChooseUs />
      <FeaturedVideos />
      <FeaturedSpecial />
    </div>
  );
}
