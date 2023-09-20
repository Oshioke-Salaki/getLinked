import faq from "../assets/faq.png";
import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";
import FaqItem from "./FaqItem";

function FaqSection() {
  return (
    <div className="border-b-borderColor relative flex justify-between gap-x-[60px] overflow-hidden border-b-[1px] pl-[160px] pr-[90px] pt-8">
      <img
        src={whiteStar}
        alt=""
        className="absolute left-[600px] top-[430px]"
      />
      <img
        src={greyStar}
        alt=""
        className="absolute left-[439px] top-[120px]"
      />
      <div>
        <h1 className="mt-[85px] text-[32px] font-bold text-white">
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
      <img src={faq} alt="" className="h-[789px] w-[741px]" />
    </div>
  );
}

export default FaqSection;
