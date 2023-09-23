import FooterLogo from "./FooterLogo";
import ContactInfo from "./ContactInfo";
import UserLinks from "./UserLinks";
import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";
import purpleStar from "../assets/lightPurpleStar.svg";
import TwinkleStar from "./TwinkleStar";

function FooterSection() {
  return (
    <div className=" relative bg-[rgb(16,11,32)] pb-[50px] pl-[68px] pr-[51px] pt-[51px] sm:pl-[220px] sm:pr-[206px] sm:pt-[70px]">
      <div className="flex flex-col sm:flex-row">
        <div className="mr-0 text-white sm:mr-[120px] sm:max-w-[412px]">
          <FooterLogo />
          <p className="mb-[39px] mt-[6px] font-mons text-xs font-normal leading-[21px] sm:mb-[74px]">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <h1 className="font-mons text-xs font-normal leading-[21px]">
            Terms of use <span className="mx-2 text-primaryColor">|</span>{" "}
            Privacy Policy
          </h1>
        </div>
        <UserLinks />
        <ContactInfo />
      </div>
      <h6 className="mt-[53px] text-center font-mons text-xs font-normal text-white">
        All rights reserved. &copy; getlinked Ltd.
      </h6>

      {/* stars */}
      <TwinkleStar
        className="left-[36px] top-[128px] h-[10px] w-[9px] sm:left-[105px] sm:top-[107px] sm:h-[18px] sm:w-[15px]"
        star={whiteStar}
      />
      <TwinkleStar
        className="left-[137px] top-[683px] h-[8px] w-[7px] sm:left-[741px] sm:top-[282px] sm:h-[18px] sm:w-[15px]"
        star={purpleStar}
      />
      <TwinkleStar
        className="left-[201px] top-[368px] h-[18px] w-[15px] sm:left-[1067px] sm:top-[99px]"
        star={greyStar}
      />
      <TwinkleStar
        className="left-[306px] top-[587px] h-[8px] w-[7px] sm:left-[1378px] sm:top-[235px] sm:h-[18px] sm:w-[15px]"
        star={whiteStar}
      />
    </div>
  );
}

export default FooterSection;
