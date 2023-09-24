import bulb from "../assets/bulb.png";
// import PrimaryBtn from "./PrimaryBtn";
import Timer from "./Timer";
import heroImg from "../assets/heroImg.png";
import voidImg from "../assets/heroVoid.png";

import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";

import TwinkleStar from "./TwinkleStar";
import Emojis from "./Emojis";
import { NavLink } from "react-router-dom";
function HeroSection() {
  return (
    <div className="relative flex h-fit flex-col overflow-x-hidden overflow-y-hidden border-b-[1px] border-b-borderColor px-[0px] pt-8 sm:h-[813px] sm:pl-[130px] sm:pr-[55px]">
      <h4 className="relative w-fit self-center text-center font-mons text-base font-bold text-white sm:w-full sm:text-right sm:text-[36px]">
        Igniting a Revolution in HR Innovation{" "}
        <svg
          className="absolute right-[8px] top-[110%] m-0 h-[11px] w-[115px] sm:right-[10px] sm:top-[120%] sm:h-[17px] sm:w-[255px]"
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
        <h1 className="relative mt-10 pt-[26px] text-center text-[32px] font-bold text-white  sm:mt-[30px] sm:pt-[80px] sm:text-left sm:text-[80px]">
          <img
            src={bulb}
            alt=""
            className="absolute  left-[205px] top-[15px] h-[26px] w-[18px] items-end sm:left-[516px] sm:top-[45px] sm:h-[73px] sm:w-[53px]"
          />
          getlinked Tech
        </h1>
        <div className=" flex items-center justify-center sm:justify-start">
          <h1 className="flex text-center text-[32px] font-bold  text-white sm:text-left sm:text-[80px]">
            Hackathon{" "}
            <span className="ml-2 flex items-center text-primaryColor sm:ml-3">
              1.0
            </span>
          </h1>
          <Emojis />
        </div>
        <p className="mb-6 px-[63px] text-center font-mons text-[13px] font-normal leading-[22px] text-white sm:mb-[41px] sm:px-0 sm:text-left sm:text-xl sm:leading-8">
          Participate in getlinked tech Hackathon 2023 stand
          <br className="hidden sm:inline-block" /> a chance to win a Big prize
        </p>
        <button
          className=" inline-block rounded px-[46px] py-[15px] font-mons text-[13px] font-normal text-white sm:px-[52px] sm:py-[17px] sm:text-base"
          style={{
            background:
              "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
          }}
        >
          <NavLink to={"/register"}>Register</NavLink>
        </button>
        <Timer />
      </div>
      <div className="relative block w-screen sm:hidden">
        <img src={voidImg} alt="" className="absolute left-5 top-[-5px] z-40" />
        <img
          src={heroImg}
          alt=""
          className="h-[362px] max-w-[1865] grayscale "
        />
      </div>

      {/* STARS */}
      <TwinkleStar
        star={greyStar}
        className="absolute left-[321px] top-[81px] flex h-[8px] w-[6px] sm:hidden"
      />
      <TwinkleStar
        className="absolute left-[120px] top-[81px] h-[12px] w-[10px] sm:left-[185px] sm:top-[68px] sm:h-auto sm:w-auto"
        star={whiteStar}
      />
      <TwinkleStar
        className="absolute left-[293px] top-[275px] h-[8px] w-[6px] sm:left-[571px] sm:top-[605px] sm:h-auto sm:w-auto"
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
