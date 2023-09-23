import ContactForm from "../ui/ContactForm";
import Navbar from "../ui/Navbar";
import instagram from "../assets/instagram.svg";
import x from "../assets/x.svg";
import facebook from "../assets/facebook.svg";
import linkedIn from "../assets/linkedin.svg";

function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-[#150E28]">
      <Navbar />
      <main className="flex h-full justify-center gap-x-[225px] pb-[115px] pl-[188px] pr-[208px] pt-[115px]">
        <div className="mt-[56px] text-white">
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
          <div className="flex items-center gap-x-[17px]">
            <img src={instagram} alt="" />
            <img src={x} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedIn} alt="" />
          </div>
        </div>
        <ContactForm />
      </main>
    </div>
  );
}

export default ContactPage;
