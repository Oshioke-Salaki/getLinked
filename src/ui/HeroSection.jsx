import bulb from "../assets/bulb.png";
import PrimaryBtn from "./PrimaryBtn";
import Timer from "./Timer";
import heroImg from "../assets/heroImg.png";
import voidImg from "../assets/heroVoid.png";

import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";

import TwinkleStar from "./TwinkleStar";
import Emojis from "./Emojis";
function HeroSection() {
  return (
    <div className="border-b-borderColor relative h-fit overflow-x-hidden overflow-y-hidden border-b-[1px] px-[0px] pt-8 sm:pl-[130px] sm:pr-[55px]">
      <h4 className="font-mons relative w-full text-center text-base font-bold text-white sm:text-right sm:text-[36px]">
        Igniting a Revolution in HR Innovation{" "}
        <svg
          className="absolute right-[10px] top-[84%] m-0 h-[11px] w-[115px] sm:h-[17px] sm:w-[255px]"
          xmlns="http://www.w3.org/2000/svg"
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
      <div className="relative  flex flex-col items-center sm:items-start">
        <div className="absolute bottom-0 right-0 top-[399px]  z-0 hidden h-[362px] w-full items-center justify-center sm:bottom-[-20px] sm:right-[-60px] sm:top-0 sm:flex sm:h-full sm:w-[680] sm:max-w-[715px]">
          <TwinkleStar
            star={greyStar}
            className="absolute left-[15%] top-[5%]"
          />
          <img src={heroImg} alt="" className="grayscale" />
        </div>
        <img
          src={bulb}
          alt=""
          className="absolute left-[273px] top-[26px] h-[26px] w-[18px] items-end sm:left-[516px] sm:top-[45px] sm:h-[73px] sm:w-[53px]"
        />
        <h1 className="mt-10 text-center text-[32px] font-bold  text-white sm:mt-[100px] sm:text-left sm:text-[80px] sm:leading-[90px]">
          getlinked Tech
        </h1>
        <div className=" flex items-center justify-center sm:justify-start">
          <h1 className="flex text-center text-[32px] font-bold  text-white sm:mt-[100px] sm:text-left sm:text-[80px] sm:leading-[90px]">
            Hackathon{" "}
            <span className="text-primaryColor ml-3 flex items-center">
              1.0
            </span>
          </h1>
          <Emojis />
        </div>
        <p className="font-mons mb-6 px-[63px] text-center text-[13px] font-normal leading-[22px] text-white sm:mb-[41px] sm:px-0 sm:text-left sm:text-xl sm:leading-8">
          Participate in getlinked tech Hackathon 2023 stand
          <br className="hidden sm:inline-block" /> a chance to win a Big prize
        </p>
        <PrimaryBtn>Register</PrimaryBtn>
        <Timer />
      </div>
      <div className="block w-screen sm:hidden">
        <img src={voidImg} alt="" className="ml-5 mt-[-5px]" />
        <img src={heroImg} alt="" className="h-[362px] w-full grayscale " />
      </div>

      {/* STARS */}
      <TwinkleStar
        className="absolute left-[185px] top-[68px]"
        star={whiteStar}
      />
      <TwinkleStar
        className="absolute left-[571px] top-[605px]"
        star={greyStar}
      />
    </div>
  );
}

export default HeroSection;

{
  /* <img
          src={heroImg}
          alt=""
          className="absolute bottom-[-40px] right-[-60px] z-0 h-full w-[680] max-w-[715px]"
        /> */
}
