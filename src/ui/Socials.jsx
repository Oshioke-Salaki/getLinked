import instagram from "../assets/instagram.svg";
import x from "../assets/x.svg";
import facebook from "../assets/facebook.svg";
import linkedIn from "../assets/linkedin.svg";

export default function Socials() {
  return (
    <div className="flex items-center gap-x-[17px]">
      <img src={instagram} alt="" />
      <img src={x} alt="" />
      <img src={facebook} alt="" />
      <img src={linkedIn} alt="" />
    </div>
  );
}
