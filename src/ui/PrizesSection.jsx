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
    <div className="relative flex flex-col justify-normal pb-[89px] pl-0 pr-0 pt-[72px] sm:flex-row sm:justify-center sm:gap-x-[37px] sm:pb-[149px] sm:pl-[106px] sm:pr-[129px] sm:pt-[74px]">
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
      <TwinkleStar className="left-[316px] top-[146px]" star={purpleStar} />
      <TwinkleStar className="left-[307px] top-[846px]" star={whiteStar} />
      <TwinkleStar className="left-[748px] top-[275px]" star={whiteStar} />
      <TwinkleStar className="left-[1374px] top-[407px]" star={whiteStar} />
      <TwinkleStar className="left-[1143px] top-[835px]" star={greyStar} />
      <TwinkleStar className="left-[1024px] top-[291px]" star={greyStar} />
      <img
        src={prizeMain}
        alt=""
        className="z-10 mt-[179px] hidden h-[482px] w-[548px] sm:flex"
      />
      <div>
        <div className="mb-10 pl-0 text-center sm:mb-[83px] sm:pl-[149px] sm:text-left">
          <h1 className=" text-xl font-bold text-white sm:text-[32px]">
            Prizes and
            <br /> <span className="text-primaryColor">Rewards</span>
          </h1>
          <p className="font-mons mt-[3px] text-xs font-normal leading-5 text-white sm:mt-4 sm:text-sm sm:leading-7">
            Highlight of the prizes or rewards for winners and
            <br /> for participants
          </p>
        </div>
        <img
          src={prizeMain}
          alt=""
          className="mb-[51px] flex h-[282px] w-[321px] sm:hidden"
        />
        <div className="relative w-fit">
          <img
            src={medals}
            className="absolute left-[7px] h-[126px] w-[280px] sm:left-4 sm:h-[296px] sm:w-[660px]"
          />
          <div className="flex gap-x-[13px] pt-[62px] sm:gap-x-[30px] sm:pt-[130px]">
            <SecondPrizeBadge />
            <FirstPrizeBadge />
            <ThirdPrizeBadge />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizesSection;
