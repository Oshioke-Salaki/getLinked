/* eslint-disable react/prop-types */
import emoji from "../assets/walk.png";
import dash from "../assets/dashUndelIne.svg";
import SecondaryButton from "./SecondaryButton";

function RegisterForm({ showModal }) {
  return (
    <form
      action=""
      className="shadow-contactFormShadow bg-bgLight h-fit w-[740px] rounded-xl px-[92px] py-[65px]"
    >
      <h1 className="mb-[46px] text-[32px] font-semibold text-primaryColor">
        Register
      </h1>
      <h2 className="mb-[22px] flex items-baseline font-mons text-sm font-normal text-white">
        Be part of this movment{" "}
        <span className=" ml-[7px] flex flex-col items-center text-primaryColor">
          <img src={emoji} className="h-[30px] w-[51px]" alt="" />
          <img src={dash} alt="" className="w-[101px]" />
        </span>
      </h2>
      <h3 className="mb-[33px] font-mons text-2xl font-normal text-white">
        CREATE YOUR ACCOUNT
      </h3>
      <div className="flex flex-col gap-y-[29px] text-white">
        <div className="grid grid-cols-[1fr_1fr] gap-x-8 font-mons">
          <div>
            <label htmlFor="teamName" className="mb-[11px] text-sm font-normal">
              Team&apos;s Name
            </label>
            <input
              type="text"
              placeholder="Enter the name of your group"
              className="shadow-contactFormShadow w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[15px]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-[11px] text-sm font-normal">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="shadow-contactFormShadow w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[15px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-x-8">
          <div>
            <label htmlFor="email" className="mb-[11px] text-sm font-normal">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="shadow-contactFormShadow w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[15px]"
            />
          </div>
          <div>
            <label htmlFor="project" className="mb-[11px] text-sm font-normal">
              Project Topic
            </label>
            <input
              type="text"
              placeholder="What is your group project topic"
              className="shadow-contactFormShadow w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[15px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-x-8">
          <div>
            <label htmlFor="category" className="mb-[11px] text-sm font-normal">
              Category
            </label>
            <select
              name=""
              id="category"
              className="shadow-contactFormShadow w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[15px]"
              placeholder="Select your category"
            ></select>
          </div>
          <div>
            <label htmlFor="grpSize" className="mb-[11px] text-sm font-normal">
              Group size
            </label>
            <select
              name=""
              id="grpSize"
              className="shadow-contactFormShadow w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[15px]"
              placeholder="Select"
            ></select>
          </div>
        </div>
      </div>
      <h5 className="mb-4 mt-[23px] font-mons text-xs font-normal italic text-[#FF26B9]">
        Please review your registration details before submitting
      </h5>
      <div className="mb-[22px] flex gap-x-[10px]">
        <input
          type="checkbox"
          name=""
          id=""
          className="h-[14px] w-[14px] bg-inherit"
        />
        <h6 className="font-mons text-xs font-normal text-white">
          I agreed with the event terms and conditions and privacy policy
        </h6>
      </div>
      <SecondaryButton showModal={showModal}>Register Now</SecondaryButton>
    </form>
  );
}

export default RegisterForm;
