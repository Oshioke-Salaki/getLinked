import tick from "../assets/tick.png";
import policy from "../assets/policy.png";
import PrimaryBtn from "./PrimaryBtn";
function PolicySection() {
  return (
    <div className="flex justify-center gap-x-[50px] pb-[167px] pl-[170px] pr-[123px] pt-[93px]">
      <div>
        <h1 className="mb-[17px] mt-[76px] text-[32px] font-bold text-white">
          Privacy Policy and
          <br /> <span className="text-primaryColor">Terms</span>
        </h1>
        <h6 className="font-mons mb-[30px] text-sm font-normal leading-7 text-white opacity-75">
          Last updated on September 12, 2023
        </h6>
        <p className="font-mons text-sm font-normal leading-[26px] text-white">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className="mt-[69px] rounded-[5px] border-[1px] border-solid border-[#D434FE] py-[59px]">
          <p className="font-mons mb-6 px-[65px] text-sm font-normal leading-[30px] text-white">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div className="flex flex-col items-center pl-[65px] pr-[39px]">
            <h2 className="font-mons w-full text-left text-base font-bold leading-[35px] text-[#d434fe]">
              Licensing Policy
            </h2>
            <h3 className="font-mons mb-[18px] w-full text-left text-sm font-bold leading-[30px] text-white">
              Here are the terms of our Standard License:
            </h3>
            <ul className="mb-4">
              <li className="font-mons flex gap-x-[14px] text-sm font-normal leading-[30px] text-white">
                <img src={tick} alt="" className="mt-2 h-[17px] w-[17px]" />
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li className="font-mons flex gap-x-[14px] text-sm font-normal leading-[30px] text-white">
                <img src={tick} alt="" className="mt-2 h-[17px] w-[17px]" />
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>
            <PrimaryBtn>Read More</PrimaryBtn>
          </div>
        </div>
      </div>
      <img src={policy} alt="" className="h-[952px] w-[583px]" />
    </div>
  );
}

export default PolicySection;
