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
    <div className="relative flex justify-center gap-x-[37px] pb-[149px] pl-[106px] pr-[129px] pt-[74px]">
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
        className="z-10 mt-[179px] h-[482px] w-[548px]"
      />
      <div>
        <div className="mb-[83px] pl-[149px]">
          <h1 className=" text-[32px] font-bold text-white">
            Prizes and
            <br /> <span className="text-primaryColor">Rewards</span>
          </h1>
          <p className="font-mons mt-4 text-sm font-normal leading-7 text-white">
            Highlight of the prizes or rewards for winners and
            <br /> for participants
          </p>
        </div>
        <div className="relative w-fit">
          <img src={medals} className="absolute left-4 h-[296px] w-[660px]" />
          <div className="flex gap-x-[30px] pt-[130px]">
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
