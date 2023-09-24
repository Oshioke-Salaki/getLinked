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
import miniRuleFlareLeft from "../assets/ruleFlareMinLeft.png";
import miniRuleFlareRight from "../assets/ruleMiniFlareRight.png";
import flareJudgeMiniLeft from "../assets/flareJudgeMiniLeft.png";
import flareJudgeMiniRight from "../assets/flareJudgeMiniRight.png";
import prizesFlareMini1 from "../assets/prizesFlareMini1.png";
import prizesFlareMini2 from "../assets/prizesFlareMini2.png";

import heroFlareMini from "../assets/heroFlareMini.png";

function WebPage() {
  return (
    <div className="relative h-fit overflow-x-hidden bg-bgMain">
      <img
        src={heroFlareMini}
        className="absolute left-0 top-0 flex sm:hidden"
        alt=""
      />
      <img
        src={flare}
        className="absolute left-[-50px] top-[100px] hidden h-[442px] w-[396px] bg-blend-hard-light sm:left-0 sm:top-0 sm:flex sm:h-auto sm:w-auto"
      />
      <img
        src={flare2}
        className="absolute right-0 top-0 z-10 hidden bg-blend-hard-light sm:flex"
      />

      <img
        src={heroVoid}
        alt=""
        className="absolute right-[64px] top-[257px] z-50  hidden animate-pulse duration-300 sm:flex"
      />

      {/* rules flares */}
      <img
        src={miniRuleFlareLeft}
        className="absolute left-0 top-[1449px] flex sm:hidden"
        alt=""
      />
      <img
        src={miniRuleFlareRight}
        className="absolute right-[-17px] top-[1747px] flex sm:hidden"
        alt=""
      />
      <img
        src={ruleFlare}
        alt=""
        className="absolute top-[5491px] hidden bg-blend-hard-light sm:top-[1319px] sm:flex"
      />
      <img
        src={ruleFlareRight}
        alt=""
        className="absolute right-[-21px] top-[1610px] hidden bg-blend-hard-light sm:flex"
      />
      {/* ////////////////////// */}

      {/* Judge */}
      <img
        src={flareJudgeMiniLeft}
        className="left-[-14px] top-[2378px] flex sm:hidden"
        alt=""
      />
      <img
        src={flareJudgeMiniRight}
        className="right-[-17px] top-[3041px] flex sm:hidden"
        alt=""
      />
      <img
        src={judgeFlare}
        alt=""
        className="absolute right-[-100px] top-[2642px] hidden bg-blend-hard-light sm:flex"
      />

      {/* PRIZES MINI FLAREs */}
      <img
        src={prizesFlareMini1}
        alt=""
        className="absolute left-[-5px] top-[5491px] flex sm:hidden"
      />
      <img
        src={prizesFlareMini2}
        className="absolute right-[-14px] top-[5935px] flex sm:hidden"
        alt=""
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
