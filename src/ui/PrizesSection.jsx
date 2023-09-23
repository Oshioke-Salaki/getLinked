import prizeMain from "../assets/prizeMain.png";
import FirstPrizeBadge from "./FirstPrizeBadge";
import SecondPrizeBadge from "./SecondPrizeBadge";
import ThirdPrizeBadge from "./ThirdPrizeBadge";
import medals from "../assets/medals.png";
import purpleStar from "../assets/lightPurpleStar.svg";
import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";
import TwinkleStar from "./TwinkleStar";
import flare1 from "../assets/flare1.png";
import flareRight from "../assets/flareRight.png";

function PrizesSection() {
  return (
    <div className="relative z-20 flex flex-col justify-normal border-b-2 border-b-white pb-[89px] pl-0 pr-0 pt-[72px] sm:flex-row sm:justify-center sm:gap-x-[37px] sm:pb-[149px] sm:pl-[106px] sm:pr-[129px] sm:pt-[74px]">
      <img
        src={flare1}
        alt=""
        className="absolute left-[18px] top-[-67px] z-0"
      />
      <img
        src={flareRight}
        alt=""
        className="botom-[-238px] absolute right-[-21px] z-0"
      />
      <img
        src={prizeMain}
        alt=""
        className="z-10 mt-[179px] hidden h-[482px] w-[548px] sm:flex"
      />
      <div className="flex flex-col items-center">
        <div className="mb-10 pl-0 text-center sm:mb-[83px] sm:pl-[149px] sm:text-left">
          <h1 className=" text-xl font-bold text-white sm:text-[32px]">
            Prizes and
            <br /> <span className="text-primaryColor">Rewards</span>
          </h1>
          <p className="mt-[3px] font-mons text-xs font-normal leading-5 text-white sm:mt-4 sm:text-sm sm:leading-7">
            Highlight of the prizes or rewards for winners and
            <br /> for participants
          </p>
        </div>
        <img
          src={prizeMain}
          alt=""
          className="mb-[51px] flex h-[282px] w-[321px] sm:hidden"
        />
        <div className="relative flex w-fit flex-col items-center">
          <img
            src={medals}
            className="absolute left-[7px] h-[126px] w-[280px] sm:left-4 sm:h-[296px] sm:w-[660px]"
          />
          <div className="flex gap-x-[13px] pt-[70px] sm:gap-x-[30px] sm:pt-[130px]">
            <SecondPrizeBadge />
            <FirstPrizeBadge />
            <ThirdPrizeBadge />
          </div>
        </div>
      </div>

      {/* STAR */}
      <TwinkleStar
        className="left-[57px] top-[46px] h-[9px] w-[7px] sm:left-[316px] sm:top-[79px] sm:h-[25px] sm:w-[21px] "
        star={purpleStar}
      />
      <TwinkleStar
        className="left-[273px] top-[91px] h-[9px] w-[7px] sm:left-[1189px] sm:top-[163px] sm:h-[25px] sm:w-[21px]"
        star={purpleStar}
      />
      <TwinkleStar
        className="left-[68px] top-[492px] h-[12px] w-[10px] sm:left-[748px] sm:top-[275px] sm:h-[32px] sm:w-[26px]"
        star={whiteStar}
      />
      <TwinkleStar
        className="left-[319px] top-[562px] h-[12px] w-[10px] sm:left-[1374px] sm:top-[407px] sm:h-[32px] sm:w-[26px]"
        star={whiteStar}
      />
      <TwinkleStar
        className="top-[562px] hidden sm:left-[574px] sm:top-[629px] sm:flex sm:h-[32px] sm:w-[26px]"
        star={whiteStar}
      />
      <TwinkleStar
        className="left-[243px] top-[805px] h-[12px] w-[10px] sm:left-[1143px] sm:top-[806px] sm:h-[32px] sm:w-[26px]"
        star={greyStar}
      />
    </div>
  );
}

export default PrizesSection;
