import congrats from "../assets/congratulation.png";
import SecondaryButton from "./SecondaryButton";

function Modal() {
  return (
    <div className="bg-overlayColor absolute inset-0 z-30 flex justify-center pb-24 pt-[40px] font-mons text-white">
      <div className="flex h-fit w-[699px] flex-col items-center border-[1px] border-solid border-primaryColor pb-[68px] pl-[54px] pr-[71px] pt-[30px] text-center">
        <img src={congrats} alt="" className="h-[321px] w-[427px]" />
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
