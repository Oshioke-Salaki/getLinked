import sponsor1 from "../assets/sponsor1.png";
import sponsor2 from "../assets/sponsor2.png";
import sponsor3 from "../assets/sponsor3.png";
import sponsor4 from "../assets/sponsor4.png";
import sponsor5 from "../assets/sponsor5.png";
import sponsor6 from "../assets/sponsor6.png";
import flareLeft from "../assets/flare1.png";
import flareRight from "../assets/flare4.png";

function SponsorsSection() {
  return (
    <div className="border-b-borderColor relative flex flex-col items-center border-b-[1px] bg-[#ffffff2] px-[128px] pb-[128px] pt-[114px] text-center">
      <img
        src={flareLeft}
        alt=""
        className="absolute left-[-231px] top-[-149px] bg-blend-hard-light"
      />
      <img
        src={flareRight}
        alt=""
        className="absolute right-[-90px] top-[360px] bg-blend-hard-light"
      />
      <h1 className="mb-[22px] text-[32px] font-bold leading-[86px] text-white">
        Partners and Sponsors
      </h1>
      <p className="font-mons mb-[65px] text-sm font-normal leading-[28px] text-white">
        Getlinked Hackathon 1.0 is honored to have the following major
        <br />
        companies as its partners and sponsors
      </p>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-[28px] rounded-[5px] border-[1px] border-[#D434FE] bg-[#ffffff2] px-[178px] py-[144px]">
        <div className="border-b-solid border-r-solid after:bg-bgMain relative flex items-center justify-center border-b-[4px] border-r-[4px] border-b-[#D434FE] border-r-[#D434FE] pb-[26px] after:absolute after:bottom-[-4px] after:right-[-4px] after:block after:h-[27px] after:w-[27px]">
          <img src={sponsor1}></img>
        </div>
        <div className="border-b-solid border-r-solid after:bg-bgMain relative flex items-center justify-center border-b-[4px] border-b-[#D434FE] px-[22px]">
          <img src={sponsor2}></img>
        </div>
        <div className="border-b-solid border-l-solid after:bg-bgMain relative flex items-center justify-center border-b-[4px] border-l-[4px] border-b-[#D434FE] border-l-[#D434FE] pb-[26px] after:absolute after:bottom-[-4px] after:left-[-4px] after:block after:h-[27px] after:w-[27px]">
          <img src={sponsor3}></img>
        </div>
        <div className="border-r-solid after:bg-bgMain relative flex items-center justify-center border-r-[4px] border-r-[#D434FE] pb-[26px] pt-[23px] after:absolute after:right-[-4px] after:top-[-4px] after:block after:h-[27px] after:w-[27px]">
          <img src={sponsor4}></img>
        </div>
        <div className="flex items-center justify-center pt-[23px]">
          <img src={sponsor5}></img>
        </div>
        <div className="pt-[23px]border-r-solid after:bg-bgMain relative flex items-center justify-center border-l-[4px] border-l-[#D434FE] pb-[26px] pl-[49px] pt-[23px] after:absolute after:left-[-4px] after:top-[-4px] after:block after:h-[27px] after:w-[27px]">
          <img src={sponsor6}></img>
        </div>
      </div>
      ;
    </div>
  );
}

export default SponsorsSection;
