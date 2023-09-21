import idea from "../assets/idea.png";
import darkPurplestar from "../assets/starDarkPurple.svg";
import curlArr from "../assets/curlArrow.svg";
import lightPurpleStar from "../assets/lightPurpleStar.svg";

function Idea() {
  return (
    <div className="border-b-borderColor relative flex items-center justify-between gap-x-[60px] border-b-[1px] pb-[78px] pl-[230px] pr-[148px] pt-[62px]">
      <img
        src={lightPurpleStar}
        alt=""
        className="absolute left-[80px] top-[223px]"
      />
      <img
        src={curlArr}
        alt=""
        className="absolute bottom-[62px] left-[689px]"
      />
      <img src={idea} alt="" className="h-[477px] w-[490px]" />
      <div className="max-w-[535px]">
        <h1 className="relative text-[32px] font-bold text-white">
          Introduction to getlinked
          <br /> <span className="text-primaryColor">tech Hackathon 1.0</span>
          <img
            src={darkPurplestar}
            alt=""
            className="absolute right-6 top-[42%] h-9 w-[30px]"
          />
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
    </div>
  );
}

export default Idea;
