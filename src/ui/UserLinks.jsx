import x from "../assets/x.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";

function UserLinks() {
  return (
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
  );
}

export default UserLinks;
