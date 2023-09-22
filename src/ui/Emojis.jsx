import emojis from "../assets/emojis.png";

// EMOJIS COMPONENT IN THE HERO SECTION
export default function Emojis() {
  return (
    <img
      src={emojis}
      alt=""
      className="h-[33px] w-[55px] sm:h-[86px] sm:w-[144px]"
    />
  );
}
