import FaqSection from "../ui/FaqSection";
import HeroSection from "../ui/HeroSection";
import Idea from "../ui/Idea";
import Judging from "../ui/Judging";
import Navbar from "../ui/Navbar";
import PrizesSection from "../ui/PrizesSection";
import Rules from "../ui/Rules";

function WebPage() {
  return (
    <div className="bg-bgMain h-fit pb-9">
      <Navbar />
      <HeroSection />
      <Idea />
      <Rules />
      <Judging />
      <FaqSection />
      <PrizesSection />
    </div>
  );
}

export default WebPage;
