import FooterLogo from "./FooterLogo";
import instagram from "../assets/instagram.svg";
import x from "../assets/x.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import phone from "../assets/phoneIcon.svg";
import address from "../assets/locationIcon.svg";
function FooterSection() {
  return (
    <div className=" bg-[rgb(16,11,32)] pb-[50px] pl-[68px] pr-[51px] pt-[51px] sm:pl-[220px] sm:pr-[206px] sm:pt-[70px]">
      <div className="flex flex-col sm:flex-row">
        <div className="mr-0 text-white sm:mr-[120px] sm:max-w-[412px]">
          <FooterLogo />
          <p className="font-mons mb-[39px] mt-[6px] text-xs font-normal leading-[21px] sm:mb-[74px]">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <h1 className="font-mons text-xs font-normal leading-[21px]">
            Terms of use <span className="text-primaryColor mx-2">|</span>{" "}
            Privacy Policy
          </h1>
        </div>
        <div className="mb-[61px] mr-0 mt-8 sm:mr-[120px] sm:mt-0">
          <h1 className="mb-2 text-sm font-semibold leading-6 text-[#D434FE]">
            Useful Links
          </h1>
          <ul className="flex flex-col gap-y-[11px] text-white">
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
          </ul>
          <div className="mt-[18px] flex items-center">
            <h5 className="font-mons text-primaryColor mr-4 text-xs font-normal">
              Follow us
            </h5>
            <div className="items center flex gap-x-[19px]">
              <img src={instagram} alt="" />

              <img src={x} alt="" />

              <img src={facebook} alt="" />

              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-[19px] text-sm font-semibold leading-6 text-[#D434FE]">
            Contact Us
          </h1>
          <ul className="font-mons flex flex-col gap-y-[22px] text-white">
            <li className="flex text-xs font-normal leading-[19px]">
              <img src={phone} alt="" className="mr-4" />
              +234 6707653444
            </li>
            <li className="flex items-start text-xs font-normal leading-[19px]">
              <img src={address} alt="" className="mr-4" />
              27,Alara Street
              <br /> Yaba 100012 Lagos
              <br /> State
            </li>
          </ul>
        </div>
      </div>
      <h6 className="font-mons mt-[53px] text-center text-xs font-normal text-white">
        All rights reserved. &copy; getlinked Ltd.
      </h6>
    </div>
  );
}

export default FooterSection;
