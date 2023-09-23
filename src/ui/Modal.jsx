import congrats from "../assets/congratulation.png";
import SecondaryButton from "./SecondaryButton";

function Modal() {
  return (
    <div className="bg-overlayColor absolute inset-0 z-30 flex h-full justify-center pt-[159px] font-mons text-white">
      <div className="flex h-[664px] w-[699px] flex-col items-center pb-[73px] pl-[54px] pr-[71px] pt-[34px] text-center">
        <img src={congrats} alt="" />
        <h1 className="mb-[15px] text-[32px] font-semibold">
          Congratulations
          <br />
          you have successfully Registered!
        </h1>
        <p className="mb-[38px] text-sm font-semibold">
          Yes, it was easy and you did it!
          <br />
          check your mail box for next step
        </p>
        <SecondaryButton>Back</SecondaryButton>
      </div>
    </div>
  );
}

export default Modal;
