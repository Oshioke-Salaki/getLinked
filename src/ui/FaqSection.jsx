import faq from "../assets/faq.png";
import lightPurpleStar from "../assets/lightPurpleStar.svg";
import FaqItem from "./FaqItem";
import TwinkleStar from "./TwinkleStar";
import darkPurpleStar from "../assets/starDarkPurple.svg";

function FaqSection() {
  return (
    <div className="border-b-borderColor relative flex gap-x-[25px] overflow-hidden border-b-[1px] pb-[63px]  pl-[215px] pr-[101px] pt-[70px]">
      <TwinkleStar className="left-[183px] top-[110px]" star={darkPurpleStar} />
      <TwinkleStar
        className="left-[1020px] top-[97px]"
        star={lightPurpleStar}
      />
      <TwinkleStar
        className="left-[819px] top-[253px]"
        star={lightPurpleStar}
      />
      <div className="max-w-[427px]">
        <h1 className="mt-[94px] text-[32px] font-bold text-white">
          Frequently ask
          <br /> <span className="text-primaryColor">Question</span>
        </h1>
        <p className="font-mons mb-[68px] mt-4 text-sm font-normal leading-7 text-white">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div className="flex flex-col gap-y-[25px]">
          <FaqItem>
            Can I work on a project I started before the hackathon?
          </FaqItem>
          <FaqItem>
            Can I work on a project I started before the hackathon?
          </FaqItem>
          <FaqItem>
            Can I work on a project I started before the hackathon?
          </FaqItem>
          <FaqItem>
            Can I work on a project I started before the hackathon?
          </FaqItem>
        </div>
      </div>
      <img src={faq} alt="" className="h-[741px] w-[741px]" />
    </div>
  );
}

export default FaqSection;
