import prizeMain from "../assets/prizeMain.png";
import FirstPrizeBadge from "./FirstPrizeBadge";
import SecondPrizeBadge from "./SecondPrizeBadge";
import ThirdPrizeBadge from "./ThirdPrizeBadge";
import medals from "../assets/medals.png";

function PrizesSection() {
  return (
    <div className="flex justify-center gap-x-[37px] pb-[149px] pl-[106px] pr-[129px] pt-[141px]">
      <img src={prizeMain} alt="" className="mt-[179px] h-[482px] w-[548px]" />
      <div>
        <div className="pl-[149px]">
          <h1 className=" text-[32px] font-bold text-white">
            Prizes and
            <br /> <span className="text-primaryColor">Rewards</span>
          </h1>
          <p className="font-mons mb-[83px] mt-4 text-sm font-normal leading-7 text-white">
            Highlight of the prizes or rewards for winners and for participants
          </p>
        </div>
        <div className="relative w-fit">
          <img src={medals} className="absolute ml-4 h-[296px] w-[660px]" />
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
