import Navigation from "@/app/ui/home/navigation";
import HeroSection from "@/app/ui/home/heroSection";
import SpiderSquareWeb from "./components/spiderSquareWeb";

function Home() {
  return (
    <div className="dark-green-bg h-screen w-screen">
      <Navigation />
      <SpiderSquareWeb />
      <HeroSection />
    </div>
  );
}

export default Home;
