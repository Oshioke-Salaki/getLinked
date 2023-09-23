import Navbar from "../ui/Navbar";
import imgMain from "../assets/regPageImg.png";
import RegisterForm from "../ui/RegisterForm";
import { useState } from "react";
import Modal from "../ui/Modal";
import { createPortal } from "react-dom";
import emoji from "../assets/walk.png";
import dash from "../assets/dashUndelIne.svg";

// STAR IMPORTS
import lightPurleStar from "../assets/lightPurpleStar.svg";
import greyStar from "../assets/greyStar.svg";
import darkPurpleStar from "../assets/starDarkPurple.svg";
import TwinkleStar from "../ui/TwinkleStar";
import whiteStar from "../assets/whiteStar.svg";

// FLARES
import flare1 from "../assets/contactFlare.png";
import flare2 from "../assets/contactFlare2.png";

function RegisterPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`relative h-full min-h-screen overflow-x-hidden bg-[#150E28] pb-[57px] ${
        showModal && "max-h-[100dvh] w-full overflow-y-hidden pl-[8px]"
      }`}
    >
      {showModal &&
        createPortal(<Modal setShowModal={setShowModal} />, document.body)}
      <div className="hidden sm:block">
        <Navbar hasBorder={false} />
      </div>
      <main className="relative flex h-full flex-col items-center justify-end pt-[43px] sm:flex-row sm:items-start sm:pr-[104px]">
        <h1 className="mb-[31px] block w-full pl-[64px] text-left text-[15px] font-bold text-primaryColor sm:hidden">
          Register
        </h1>
        <img
          src={imgMain}
          className="z-30 h-[155px] w-[195px] sm:absolute sm:left-0 sm:top-0 sm:h-[717px] sm:w-[717px]"
          alt=""
        />
        <div className="block sm:hidden">
          <h2 className="mb-[7px] flex items-baseline font-mons text-xs font-normal text-white">
            Be part of this movment{" "}
            <span className=" ml-[6px] flex flex-col items-center">
              <img src={emoji} className="h-[30px] w-[51px]" alt="" />
              <img src={dash} alt="" className="w-[89px]" />
            </span>
          </h2>
        </div>
        <RegisterForm
          showModal={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setShowModal(true);
          }}
        />
      </main>

      {/* STARS */}
      <TwinkleStar
        className="left-[318px] top-[161px] h-[13px] w-[14px] sm:left-[128px] sm:top-[235px] sm:h-[25px] sm:w-[21px]"
        star={lightPurleStar}
      />
      <TwinkleStar
        className="left-[36px] top-[334px] h-[18px] w-[14px] sm:left-[139px] sm:top-[844px] sm:h-[32px] sm:w-[26px]"
        star={greyStar}
      />
      <TwinkleStar
        className=" hidden sm:left-[1174px] sm:top-[203px] sm:flex sm:h-[32px] sm:w-[26px]"
        star={greyStar}
      />
      <TwinkleStar
        className="left-[334px] top-[630px] h-[10px] w-[9px] sm:left-[596px] sm:top-[734px] sm:h-[28px] sm:w-[23px]"
        star={darkPurpleStar}
      />
      <TwinkleStar
        className="left-[1298px] top-[924px] hidden h-[12px] w-[10px] sm:flex"
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

export default RegisterPage;
