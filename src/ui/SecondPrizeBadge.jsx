import medal from "../assets/silver_medal 1.png";

function SecondPrizeBadge() {
  return (
    <div className="font-mons relative mt-[80px] rounded-lg border-[1px] border-solid border-[#D434FE] bg-[#d434fe1e] px-[26px] pb-[33px] pt-[111px] text-center">
      <img
        src={medal}
        alt=""
        className="absolute left-[0px] top-[-100px] !w-[660px]"
      />
      <h2 className="text-[36px] font-bold leading-[78px] text-white ">2nd</h2>
      <h6 className="text-2xl font-semibold leading-[52px] text-white">
        Runner
      </h6>
      <h1 className="text-[32px] font-bold leading-[69px] text-[#903AFF]">
        N300,000
      </h1>
    </div>
  );
}

export default SecondPrizeBadge;
