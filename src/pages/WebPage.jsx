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
import flare2 from "../assets/flare-t2.png";
import heroVoid from "../assets/heroVoid.png";
import ruleFlare from "../assets/ruleFlareLeft.png";
import ruleFlareRight from "../assets/ruleFlareRight.png";
import judgeFlare from "../assets/judgeFlare.png";

function WebPage() {
  return (
    <div className="relative h-fit overflow-x-hidden bg-bgMain">
      <img
        src={flare}
        className="absolute left-[-180px] top-0 hidden h-[442px] w-[396px] bg-blend-hard-light sm:left-0 sm:flex sm:h-auto sm:w-auto"
      />
      <img
        src={flare2}
        className="absolute right-0 top-0 z-10 flex bg-blend-hard-light"
      />
      <img
        src={heroVoid}
        alt=""
        className="absolute right-[64px] top-[257px] z-50  hidden animate-pulse duration-300 sm:flex"
      />
      <img
        src={ruleFlare}
        alt=""
        className="absolute top-[5491px] hidden bg-blend-hard-light sm:top-[1319px] sm:flex"
      />
      <img
        src={ruleFlareRight}
        alt=""
        className="absolute right-[-21px] top-[1610px] bg-blend-hard-light"
      />
      <img
        src={judgeFlare}
        alt=""
        className="absolute right-[-100px] top-[2642px] bg-blend-hard-light"
      />
      <Navbar hasBorder={true} />
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
