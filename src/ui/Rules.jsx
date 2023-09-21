import ruleImg from "../assets/rules.png";
import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";

function Rules() {
  return (
    <div className="border-b-borderColor relative flex items-center justify-between gap-x-[60px] overflow-hidden border-b-[1px] pl-[184px] pr-[50px]">
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
      <div className="max-w-[535px]">
        <h1 className="text-[32px] font-bold text-white">
          Rules and
          <br /> <span className="text-primaryColor">Guidelines</span>
        </h1>
        <p className="font-mons mt-4 text-sm font-normal leading-7 text-white">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
      <img src={ruleImg} alt="" className="mt-[-20px] h-[664px] w-[664px]" />
    </div>
  );
}

export default Rules;
