import phone from "../assets/phoneIcon.svg";
import address from "../assets/locationIcon.svg";
function ContactInfo() {
  return (
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
  );
}

export default ContactInfo;
