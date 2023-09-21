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
import flare from "../assets/flare-top.png";
// import flare from "../assets/flare1.png";
import flare2 from "../assets/flare-t2.png";
import heroVoid from "../assets/heroVoid.png";
import ruleFlare from "../assets/ruleFlareLeft.png";
import ruleFlareRight from "../assets/ruleFlareRight.png";

function WebPage() {
  return (
    <div className="bg-bgMain relative h-fit overflow-x-hidden">
      <img src={flare} className="absolute left-0 top-0 bg-blend-hard-light" />
      <img
        src={flare2}
        className="absolute right-0 top-0 z-20 bg-blend-hard-light"
      />
      <img
        src={heroVoid}
        alt=""
        className="absolute right-[64px]  top-[257px] z-50 animate-pulse duration-300"
      />
      <img
        src={ruleFlare}
        alt=""
        className="absolute top-[1319px] bg-blend-hard-light"
      />
      <img
        src={ruleFlareRight}
        alt=""
        className="absolute right-[-21px] top-[1610px] bg-blend-hard-light"
      />
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
