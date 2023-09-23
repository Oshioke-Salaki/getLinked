import ruleImg from "../assets/rules.png";
import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";
import TwinkleStar from "./TwinkleStar";

function Rules() {
  return (
    <div className=" pb-46px relative flex flex-col-reverse items-center justify-start gap-x-[60px] gap-y-[10px] overflow-hidden pb-[46px] pl-0 pr-0 sm:flex-row sm:items-start sm:justify-between sm:pb-0 sm:pl-[184px] sm:pr-[50px]">
      <div className="mt-0 sm:mt-[138px] sm:max-w-[535px]">
        <h1 className="text-center text-xl font-bold leading-[27px] text-white sm:text-left sm:text-[32px] sm:leading-9">
          Rules and
          <br /> <span className="text-primaryColor">Guidelines</span>
        </h1>
        <p className="mt-[10px] px-[45px] text-center font-mons text-sm font-normal leading-7 text-white sm:mt-4 sm:px-0 sm:text-left">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
      <img
        src={ruleImg}
        alt=""
        className="mt-[-20px] h-[340px] w-[294px] sm:h-[664px] sm:w-[664px]"
      />

      {/* Stars */}
      <TwinkleStar
        className="left-[336px] top-[442px] h-[14px] w-3 sm:left-[439px] sm:top-[116px] sm:h-auto sm:w-auto"
        star={greyStar}
      />
      <TwinkleStar
        className="left-[43px] top-[170px] h-[12px] w-[10px] sm:left-[741px] sm:top-[405px] sm:h-auto sm:w-auto"
        star={whiteStar}
      />
      <TwinkleStar
        className="left-[108px] top-[718px] flex h-[12px] w-[10px] sm:hidden "
        star={whiteStar}
      />
    </div>
  );
}

export default Rules;
