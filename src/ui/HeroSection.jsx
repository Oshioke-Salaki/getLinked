import chain from "../assets/chain.png";
import bulb from "../assets/bulb.png";
import PrimaryBtn from "./PrimaryBtn";
import Timer from "./Timer";
import heroImg from "../assets/heroImg.png";
import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";

import spark from "../assets/spark.png";
function HeroSection() {
  return (
    <div className="border-b-borderColor relative h-fit overflow-x-hidden overflow-y-hidden border-b-[1px] pl-[130px] pr-[55px] pt-8">
      <img
        src={whiteStar}
        alt=""
        className="absolute left-[185px] top-[68px]"
      />
      <img
        src={greyStar}
        alt=""
        className="absolute left-[571px] top-[605px]"
      />
      <img
        src={greyStar}
        alt=""
        className="absolute left-[600px] top-[146px]"
      />
      <h4 className="font-mons relative w-full text-right text-[36px] font-bold text-white">
        Igniting a Revolution in HR Innovation{" "}
        <svg
          className="absolute right-[10px] top-[84%] m-0"
          xmlns="http://www.w3.org/2000/svg"
          width="255"
          height="17"
          viewBox="0 0 255 17"
          fill="none"
        >
          <path
            d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
            stroke="#FF26B9"
            strokeWidth="5"
          />
        </svg>
      </h4>
      <div className="relative  flex flex-col">
        <img
          src={heroImg}
          alt=""
          className="absolute bottom-[-40px] right-[-60px] z-0 h-full w-[680] max-w-[715px]"
        />
        <img
          src={bulb}
          alt=""
          className="absolute left-[516px] top-[45px] h-[73px] w-[53px] items-end"
        />
        <h1 className="mt-[100px] text-[80px] font-bold leading-[90px] text-white">
          getlinked Tech
        </h1>
        <div className=" flex items-center justify-start">
          <h1 className="flex text-[80px] font-bold leading-[90px] text-white">
            Hackathon{" "}
            <span className="text-primaryColor ml-3 flex items-center">
              1.0
            </span>
          </h1>
          <img src={chain} alt="" className="h-[86px] w-[86px]" />
          <img src={spark} alt="" className="h-[86px] w-[86px]" />
        </div>
        <p className="font-mons mb-[41px] text-xl font-normal leading-8 text-white">
          Participate in getlinked tech Hackathon 2023 stand
          <br /> a chance to win a Big prize
        </p>
        <PrimaryBtn>Register</PrimaryBtn>
        <Timer />
      </div>
    </div>
  );
}

export default HeroSection;
