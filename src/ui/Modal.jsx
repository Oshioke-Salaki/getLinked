/* eslint-disable react/prop-types */
import congrats from "../assets/congratulation.png";
import wink from "../assets/wink.png";

function Modal({ setShowModal }) {
  return (
    <div className="bg-overlayColor absolute inset-0 z-30 flex justify-center px-[50px] pb-24 pt-[150px] font-mons text-white sm:px-0 sm:pt-[40px]">
      <div className="flex h-fit w-[699px] flex-col items-center border-[1px] border-solid border-primaryColor pb-[24px] pl-[29px] pr-[29px] pt-[17px] text-center sm:pb-[68px]  sm:pl-[54px] sm:pr-[71px] sm:pt-[30px]">
        <img
          src={congrats}
          alt=""
          className="h-[195px] w-[259px] sm:h-[321px] sm:w-[427px]"
        />
        <h1 className="mb-[29px] text-[16px] font-semibold sm:mb-[15px] sm:text-[32px]">
          Congratulations
          <br />
          you have successfully Registered!
        </h1>
        <p className="mb-[29px] text-[12px] font-medium sm:mb-[38px] sm:text-sm sm:font-semibold">
          Yes, it was easy and you did it!
          <br />
          check your mail box for next step{" "}
          <span className="inline-block">
            <img
              src={wink}
              className="inline-block h-[14px] w-[14px] sm:h-[20px] sm:w-[20px]"
              alt=""
            />
          </span>
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowModal(false);
          }}
          className=" inline-block w-full rounded px-[46px] py-[15px] font-mons text-[13px] font-normal text-white sm:px-[52px] sm:py-[17px] sm:text-base"
          style={{
            background:
              "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Modal;
