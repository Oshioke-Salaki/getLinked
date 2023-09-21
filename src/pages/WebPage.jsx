import FaqSection from "../ui/FaqSection";
import FooterSection from "../ui/FooterSection";
import HeroSection from "../ui/HeroSection";
import Idea from "../ui/Idea";
import Judging from "../ui/Judging";
import Navbar from "../ui/Navbar";
import PolicySection from "../ui/PolicySection";
import PrizesSection from "../ui/PrizesSection";
import Rules from "../ui/Rules";
import SponsorsSection from "../ui/SponsorsSection";
import TimelineSection from "../ui/TimelineSection";

function WebPage() {
  return (
    <div className="bg-bgMain h-fit overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Idea />
      <Rules />
      <Judging />
      <FaqSection />
      <TimelineSection />
      <PrizesSection />
      <SponsorsSection />
      <PolicySection />
      <FooterSection />
    </div>
  );
}

export default WebPage;
