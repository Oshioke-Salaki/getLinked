import prizeMain from "../assets/prizeMain.png";
import FirstPrizeBadge from "./FirstPrizeBadge";
import SecondPrizeBadge from "./SecondPrizeBadge";
import ThirdPrizeBadge from "./ThirdPrizeBadge";

function PrizesSection() {
  return (
    <div className="pr-140 pl-105 flex justify-center pb-[149px] pt-[74px]">
      <img src={prizeMain} alt="" className="mt-[253px] h-[482px] w-[548px]" />
      <div>
        <h1 className=" text-[32px] font-bold text-white">
          Prizes and
          <br /> <span className="text-primaryColor">Rewards</span>
        </h1>
        <p className="font-mons mb-[150px] mt-4 text-sm font-normal leading-7 text-white">
          Highlight of the prizes or rewards for winners and for participants
        </p>
        <div className="flex gap-x-[30px]">
          <SecondPrizeBadge />
          <FirstPrizeBadge />
          <ThirdPrizeBadge />
        </div>
      </div>
    </div>
  );
}

export default PrizesSection;
