import tick from "../assets/tick.png";
import policy from "../assets/policy.png";
import PrimaryBtn from "./PrimaryBtn";
import TwinkleStar from "./TwinkleStar";
import greyStar from "../assets/greyStar.svg";
import darkPurple from "../assets/starDarkPurple.svg";
import purpleStar from "../assets/lightPurpleStar.svg";
import whiteMini from "../assets/whiteStarMini.png";
import lightPurpleMini from "../assets/lightPurpleStarMini.png";
function PolicySection() {
  return (
    <div className="relative flex  flex-col items-center justify-normal gap-y-[48px] pb-[167px] pl-[50px] pr-[50px] pt-[71px] text-center sm:flex-row sm:items-start  sm:justify-center sm:gap-x-[50px] sm:pl-[170px] sm:pr-[123px] sm:pt-[93px] sm:text-left">
      <TwinkleStar className="left-[514px] top-[159px]" star={greyStar} />
      <TwinkleStar className="left-[733px] top-[274px]" star={darkPurple} />
      <TwinkleStar className="left-[100px] top-[838px]" star={purpleStar} />
      <TwinkleStar className="left-[1393px] top-[842px]" star={greyStar} />
      <TwinkleStar className="left-[1265px] top-[260px]" star={whiteMini} />
      <TwinkleStar className="left-[921px] top-[803px]" star={whiteMini} />
      <TwinkleStar
        className="left-[991px] top-[697px]"
        star={lightPurpleMini}
      />
      {/* <TwinkleStar className="left-[1374px] top-[407px]" star={whiteStar} /> */}
      {/* <TwinkleStar className="left-[1143px] top-[835px]" star={greyStar} /> */}
      {/* <TwinkleStar className="left-[1024px] top-[291px]" star={greyStar} />  */}
      <div>
        <h1 className="mb-[5px] mt-0 font-bold text-[20] text-white sm:mb-[17px] sm:mt-[76px] sm:text-[32px]">
          Privacy Policy and
          <br /> <span className="text-primaryColor">Terms</span>
        </h1>
        <h6 className="font-mons mb-7 text-xs font-normal leading-7 text-white opacity-75 sm:mb-[30px] sm:text-sm">
          Last updated on September 12, 2023
        </h6>
        <p className="font-mons text-xs font-normal leading-[23px] text-white sm:text-sm sm:leading-[26px]">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className="mt-[30px] rounded-[5px] border-[1px] border-solid border-[#D434FE] py-[45px]  sm:mt-[69px] sm:py-[59px]">
          <p className="font-mons mb-[21px] px-[12px] text-xs font-normal leading-[26px] text-white sm:mb-6 sm:px-[65px] sm:text-sm sm:leading-[30px]">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div className="flex flex-col items-center pl-[22px] pr-[24px] sm:pl-[65px] sm:pr-[39px]">
            <h2 className="font-mons w-full text-left text-[13px] font-bold leading-7 text-[#d434fe] sm:text-base sm:leading-[35px]">
              Licensing Policy
            </h2>
            <h3 className="font-mons mb-[21px] w-full text-left text-xs font-bold leading-[26px] text-white sm:mb-[18px] sm:text-sm sm:leading-[30px]">
              Here are the terms of our Standard License:
            </h3>
            <ul className="mb-4">
              <li className="font-mons flex gap-x-[14px] text-xs font-normal leading-[21px] text-white sm:text-sm sm:leading-[30px]">
                <img src={tick} alt="" className="mt-2 h-[17px] w-[17px]" />
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li className="font-mons flex gap-x-[14px] text-xs font-normal leading-[21px] text-white sm:text-sm sm:leading-[30px]">
                <img src={tick} alt="" className="mt-2 h-[17px] w-[17px]" />
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>
            <PrimaryBtn>Read More</PrimaryBtn>
          </div>
        </div>
      </div>
      <img src={policy} alt="" className="sm:h-[952px] sm:w-[583px] w-full h-full" />
    </div>
  );
}

export default PolicySection;
