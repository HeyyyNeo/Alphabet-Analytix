import SpiderSquareWeb from "@/src/general/spiderSquareWeb";
import Navigation from "@/app/ui/home/navigation";
import HeroSection from "@/app/ui/home/heroSection";
import DetailedOfferings from "@/app/ui/home/offerings";
import Reviews from "./ui/home/reviews";

function Home() {
  return (
    <div className="dark-green-bg h-screen w-screen">
      <Navigation />
      <SpiderSquareWeb />
      <HeroSection />
      <DetailedOfferings />
      <Reviews />
    </div>
  );
}

export default Home;
