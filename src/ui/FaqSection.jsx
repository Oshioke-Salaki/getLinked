import TwinkleStar from "./TwinkleStar";
import faq from "../assets/faq.png";
import FaqItem from "./FaqItem";

import darkPurpleStar from "../assets/starDarkPurple.svg";
import lightPurpleStar from "../assets/lightPurpleStar.svg";

function FaqSection() {
  return (
    <div className="relative flex flex-col items-center gap-y-[66px] overflow-hidden border-b-[1px] border-b-borderColor pb-[49px] pl-0 pr-0 pt-[60px] text-center sm:flex-row sm:items-start  sm:gap-x-[25px] sm:pb-[63px] sm:pl-[215px] sm:pr-[101px] sm:pt-[70px] sm:text-left">
      <div className="px-[48px] sm:max-w-[427px] sm:px-0">
        <h1 className="text-5 mt-0 font-bold text-white sm:mt-[94px] sm:text-[32px]">
          Frequently ask
          <br /> <span className="text-primaryColor">Question</span>
        </h1>
        <p className="mb-[68px] mt-4 font-mons text-sm font-normal leading-7 text-white">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div className="flex flex-col gap-y-[13px] sm:gap-y-[25px]">
          <FaqItem>
            Can I work on a project I started before the hackathon?
          </FaqItem>
          <FaqItem>What happens if I need help during the hackathon?</FaqItem>
          <FaqItem>
            What happens if I don&apos;t have an idea for a project?
          </FaqItem>
          <FaqItem>Can I join a team or do I have to come with one?</FaqItem>
          <FaqItem>What happens after the hackathon ends?</FaqItem>
          <FaqItem>
            Can I work on a project I started before the hackathon?
          </FaqItem>
        </div>
      </div>
      <img
        src={faq}
        alt=""
        className="h-[327px] w-[327px] sm:h-[741px] sm:w-[741px]"
      />

      {/* STARS */}
      <TwinkleStar
        className="left-[59px] top-[47px] h-[22px] w-[18px] sm:left-[183px] sm:top-[110px] sm:h-auto sm:w-auto"
        star={darkPurpleStar}
      />
      <TwinkleStar
        className="left-[1020px] top-[97px]"
        star={lightPurpleStar}
      />
      <TwinkleStar
        className="left-[819px] top-[253px]"
        star={lightPurpleStar}
      />
    </div>
  );
}

export default FaqSection;
