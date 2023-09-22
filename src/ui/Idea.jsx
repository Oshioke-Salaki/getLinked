import idea from "../assets/idea.png";
import darkPurplestar from "../assets/starDarkPurple.svg";
import curlArr from "../assets/curlArrow.svg";
import lightPurpleStar from "../assets/lightPurpleStar.svg";
import TwinkleStar from "./TwinkleStar";

function Idea() {
  return (
    <div className="border-b-borderColor relative flex flex-col items-center justify-normal gap-y-[58px] border-b-[1px] pb-[78px]  pl-0 pr-0 pt-[29px] sm:flex-row sm:items-start sm:justify-between sm:gap-x-[60px] sm:pl-[230px] sm:pr-[148px] sm:pt-[62px]">
      <img
        src={curlArr}
        alt=""
        className="absolute left-[181px] top-[296px] h-[23px] w-[19px] sm:left-[689px] sm:top-[490px] sm:h-[58px] sm:w-[49px]"
      />
      <img
        src={idea}
        alt=""
        className="h-[257px] w-[264px] sm:h-[477px] sm:w-[490px]"
      />
      <div className="mt-0 max-w-[320px] sm:mt-[131px] sm:max-w-[535px]">
        <h1 className="relative text-center text-xl font-bold leading-[26px] text-white sm:text-left sm:text-[32px] sm:leading-9">
          Introduction to getlinked
          <br /> <span className="text-primaryColor">tech Hackathon 1.0</span>
        </h1>
        <p className="font-mons mt-4 text-center text-[13px] font-normal leading-7 text-white sm:text-left sm:text-sm">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>

      {/* STARS */}
      <TwinkleStar
        className="left-[117px] top-[223px]"
        star={lightPurpleStar}
      />
      <TwinkleStar
        className="right-[161px] top-[216px]"
        star={darkPurplestar}
      />
    </div>
  );
}

export default Idea;
