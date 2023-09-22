import ruleImg from "../assets/rules.png";
import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";
import TwinkleStar from "./TwinkleStar";

function Rules() {
  return (
    <div className="border-b-borderColor pb-46px relative flex flex-col-reverse items-center justify-start gap-x-[60px] gap-y-[10px] overflow-hidden border-b-[1px] pl-0 pr-0 sm:flex-row sm:items-start sm:justify-between sm:pb-0 sm:pl-[184px] sm:pr-[50px]">
      <TwinkleStar className="left-[439px] top-[116px]" star={greyStar} />
      <TwinkleStar className="left-[741px] top-[405px]" star={whiteStar} />
      <div className="mt-0 sm:mt-[138px] sm:max-w-[535px]">
        <h1 className="text-center text-xl font-bold leading-[27px] text-white sm:text-left sm:text-[32px] sm:leading-9">
          Rules and
          <br /> <span className="text-primaryColor">Guidelines</span>
        </h1>
        <p className="font-mons mt-[10px] px-[45px] text-center text-sm font-normal leading-7 text-white sm:mt-4 sm:px-0 sm:text-left">
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
        className="mt-[-20px] h-[382px] w-[294px] sm:h-[664px] sm:w-[664px]"
      />
    </div>
  );
}

export default Rules;
