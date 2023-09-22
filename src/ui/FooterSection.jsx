import FooterLogo from "./FooterLogo";
import ContactInfo from "./ContactInfo";
import UserLinks from "./UserLinks";

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
        <UserLinks />
        <ContactInfo />
      </div>
      <h6 className="font-mons mt-[53px] text-center text-xs font-normal text-white">
        All rights reserved. &copy; getlinked Ltd.
      </h6>
    </div>
  );
}

export default FooterSection;
