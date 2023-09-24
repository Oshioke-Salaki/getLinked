import ContactForm from "../ui/ContactForm";
import Navbar from "../ui/Navbar";

import lightPurleStar from "../assets/lightPurpleStar.svg";
import greyStar from "../assets/greyStar.svg";
import darkPurpleStar from "../assets/starDarkPurple.svg";
import TwinkleStar from "../ui/TwinkleStar";
import whiteStar from "../assets/whiteStar.svg";

import flare1 from "../assets/contactFlare.png";
import flare2 from "../assets/contactFlare2.png";
import Socials from "../ui/Socials";

function ContactPage() {
  return (
    <div className="relative overflow-x-hidden bg-[#150E28]">
      <div className="hidden sm:block">
        <Navbar hasBorder={false} />
      </div>
      <main className="flex h-full flex-col justify-center gap-x-[225px] px-[46px] pb-[38px] pt-[111px] sm:flex-row sm:pb-[115px] sm:pl-[188px] sm:pr-[208px] sm:pt-[115px]">
        <div className="z-30 mt-[56px] hidden text-white sm:inline-block">
          <h1 className="text-[17px] font-semibold text-[#d434fe] sm:text-[32px]">
            Get in touch
          </h1>
          <h3 className="my-[17px] font-mons text-base font-normal">
            Contact <br />
            Information
          </h3>
          <h3 className="font-mons text-base font-normal">
            27, Alara Street
            <br /> Yaba 100012 <br /> Lagos State
          </h3>
          <h3 className="my-[22px] font-mons text-base font-normal">
            Call Us : 07067981819
          </h3>
          <h3 className="font-mons text-base font-normal">
            we are open from Monday-Friday
            <br />
            08:00am - 05:00pm
          </h3>
          <h6 className="mb-[14px] mt-[35px] font-mons text-base font-normal text-[#d434fe]">
            Share on
          </h6>
          <Socials />
        </div>
        <ContactForm />
        <div className=" flex flex-col items-center sm:hidden">
          <h6 className="mb-[14px] mt-[35px] w-full text-center font-mons text-base font-normal text-[#d434fe]">
            Share on
          </h6>
          <Socials />
        </div>
      </main>

      {/* STARS */}
      <TwinkleStar
        className="left-[180px] top-[67px] h-[13px] w-[11px] sm:left-[205px] sm:top-[199px] sm:h-[25px] sm:w-[21px]"
        star={lightPurleStar}
      />
      <TwinkleStar
        className="left-[320px] top-[138px] h-[20px] w-[16px] sm:left-[1251px] sm:top-[167px] sm:h-[32px] sm:w-[26px]"
        star={greyStar}
      />
      <TwinkleStar
        className="left-[34px] top-[697px] h-[14px] w-[12px] sm:left-[637px] sm:top-[698px] sm:h-[36px] sm:w-[30px]"
        star={darkPurpleStar}
      />
      <TwinkleStar
        className="left-[351px] top-[620px] h-[14px] w-[12px] sm:left-[1358px] sm:top-[835px] sm:h-[32px] sm:w-[26px]"
        star={whiteStar}
      />

      {/* Flare */}
      <img src={flare1} alt="" className="absolute left-0 top-0" />
      <img
        src={flare2}
        alt=""
        className="absolute right-0 top-[288px] hidden sm:block"
      />
    </div>
  );
}

export default ContactPage;
