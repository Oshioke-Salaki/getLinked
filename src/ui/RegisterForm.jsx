/* eslint-disable react/prop-types */
import emoji from "../assets/walk.png";
import dash from "../assets/dashUndelIne.svg";
import SecondaryButton from "./SecondaryButton";

function RegisterForm({ showModal }) {
  return (
    <form
      action=""
      className="sm:shadow-contactFormShadow sm:bg-bgLight z-30 h-fit w-full rounded-xl px-[92px] py-[23px] sm:w-[740px] sm:py-[65px]"
    >
      <h1 className="mb-[46px] hidden text-[32px] font-semibold text-primaryColor sm:block">
        Register
      </h1>
      <h2 className="mb-[22px] hidden items-baseline font-mons text-sm font-normal text-white sm:flex">
        Be part of this movment{" "}
        <span className=" ml-[7px] flex flex-col items-center text-primaryColor">
          <img src={emoji} className="h-[30px] w-[51px]" alt="" />
          <img src={dash} alt="" className="w-[101px]" />
        </span>
      </h2>
      <h3 className="mb-[23px] font-mons text-xl font-normal text-white sm:mb-[33px] sm:text-2xl">
        CREATE YOUR ACCOUNT
      </h3>
      <div className="flex flex-col gap-y-[18px] text-white sm:gap-y-[29px]">
        <div className="grid grid-cols-[1fr] gap-y-[18px] font-mons sm:grid-cols-[1fr_1fr] sm:gap-x-8">
          <div>
            <label
              htmlFor="teamName"
              className="mb-[5px] text-[13px] font-normal sm:mb-[11px] sm:text-sm"
            >
              Team&apos;s Name
            </label>
            <input
              type="text"
              placeholder="Enter the name of your group"
              className="shadow-contactFormShadow text-greyText w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal sm:py-[15px] sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="teamName"
              className="mb-[5px] text-[13px] font-normal sm:mb-[11px] sm:text-sm"
            >
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="shadow-contactFormShadow text-greyText w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal sm:py-[15px] sm:text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-[1fr] gap-y-[18px] font-mons sm:grid-cols-[1fr_1fr] sm:gap-x-8">
          <div>
            <label
              htmlFor="email"
              className="mb-[5px] text-[13px] font-normal sm:mb-[11px] sm:text-sm"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="shadow-contactFormShadow text-greyText w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal sm:py-[15px] sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="project"
              className="mb-[5px] text-[13px] font-normal sm:mb-[11px] sm:text-sm"
            >
              Project Topic
            </label>
            <input
              type="text"
              placeholder="What is your group project topic"
              className="shadow-contactFormShadow text-greyText w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal sm:py-[15px] sm:text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-x-[19px]  font-mons sm:grid-cols-[1fr_1fr] sm:gap-x-8">
          <div>
            <label
              htmlFor="category"
              className="mb-[5px] text-[13px] font-normal sm:mb-[11px] sm:text-sm"
            >
              Category
            </label>
            <select
              name=""
              id="category"
              className="shadow-contactFormShadow text-greyText w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal sm:py-[15px] sm:text-sm"
              placeholder="Select your category"
            ></select>
          </div>
          <div>
            <label
              htmlFor="grpSize"
              className="mb-[5px] text-[13px] font-normal sm:mb-[11px] sm:text-sm"
            >
              Group size
            </label>
            <select
              name=""
              id="grpSize"
              className="shadow-contactFormShadow text-greyText w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal sm:py-[15px] sm:text-sm"
              placeholder="Select"
            ></select>
          </div>
        </div>
      </div>
      <h5 className="mb-[12px] mt-[15px] font-mons text-[9px] font-normal italic text-[#FF26B9] sm:mb-4 sm:mt-[23px] sm:text-xs">
        Please review your registration details before submitting
      </h5>
      <div className="mb-[14px] flex gap-x-[10px] sm:mb-[22px]">
        <input
          type="checkbox"
          name=""
          id=""
          className="h-[14px] w-[14px] bg-inherit"
        />
        <h6 className="font-mons text-[10px] font-normal text-white sm:text-xs">
          I agreed with the event terms and conditions and privacy policy
        </h6>
      </div>
      <SecondaryButton showModal={showModal}>Register Now</SecondaryButton>
    </form>
  );
}

export default RegisterForm;
