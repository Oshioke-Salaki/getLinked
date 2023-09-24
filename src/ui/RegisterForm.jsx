/* eslint-disable react/prop-types */
import emoji from "../assets/walk.png";
import dash from "../assets/dashUndelIne.svg";
import { useEffect, useState } from "react";

function RegisterForm({ showModal }) {
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [team_name, setTeam_name] = useState("");
  const [group_size, setGroup_size] = useState(1);
  const [project_topic, setProject_topic] = useState("");
  const [category, setCategory] = useState(1);
  const [privacy_poclicy_accepted, setPrivacy_poclicy_accepted] =
    useState(false);
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await fetch(
          `https://backend.getlinked.ai/hackathon/categories-list`,
        );
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCategories();
  });

  function handleSubmit(data) {
    async function postData() {
      try {
        setIsSubmitting(true);
        const res = await fetch(
          `https://backend.getlinked.ai/hackathon/registration`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          },
        );
        const resq = await res.json();
        console.log(resq);
      } catch (err) {
        console.log(err);
      } finally {
        setIsSubmitting(false);
      }
    }
    postData();
  }

  return (
    <form
      action=""
      className="z-30 h-fit w-full rounded-xl px-[63px] py-[23px] sm:w-[740px] sm:bg-bgLight sm:px-[92px] sm:py-[65px] sm:shadow-contactFormShadow"
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
              value={team_name}
              onChange={(e) => setTeam_name(e.target.value)}
              className="w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal text-greyText shadow-contactFormShadow sm:py-[15px] sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-[5px] text-[13px] font-normal sm:mb-[11px] sm:text-sm"
            >
              Phone
            </label>
            <input
              type="text"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal text-greyText shadow-contactFormShadow sm:py-[15px] sm:text-sm"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal text-greyText shadow-contactFormShadow sm:py-[15px] sm:text-sm"
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
              value={project_topic}
              onChange={(e) => setProject_topic(e.target.value)}
              className="w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal text-greyText shadow-contactFormShadow sm:py-[15px] sm:text-sm"
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal text-greyText shadow-contactFormShadow sm:py-[15px] sm:text-sm"
              placeholder="Select your category"
            >
              {categories.map((i, index) => (
                <option
                  key={i.id}
                  className="bg-bgMain text-white"
                  value={index + 1}
                >
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="grpSize"
              className="mb-[5px] text-[11px] font-normal sm:mb-[11px] sm:text-sm"
            >
              Group size
            </label>
            <select
              name=""
              id="grpSize"
              value={group_size}
              onChange={(e) => setGroup_size(e.target.value)}
              className="w-full rounded border-[1px] border-solid border-white bg-transparent px-[26px] py-[12px] text-[13px] font-normal text-greyText shadow-contactFormShadow sm:py-[15px] sm:text-sm"
              placeholder="Select"
            >
              <option value={1} className="bg-bgMain text-white">
                1
              </option>
              <option value={2} className="bg-bgMain text-white">
                2
              </option>
              <option value={3} className="bg-bgMain text-white">
                3
              </option>
              <option value={4} className="bg-bgMain text-white">
                4
              </option>
            </select>
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
          value={privacy_poclicy_accepted}
          onChange={(e) => setPrivacy_poclicy_accepted(e.target.value)}
          className="h-[14px] w-[14px] bg-inherit"
        />
        <h6 className="font-mons text-[10px] font-normal text-white sm:text-xs">
          I agreed with the event terms and conditions and privacy policy
        </h6>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit({
            email,
            phone_number,
            team_name,
            group_size,
            project_topic,
            category,
            privacy_poclicy_accepted,
          });
          showModal();
        }}
        className=" inline-block w-full rounded px-[46px] py-[15px] font-mons text-[13px] font-normal text-white sm:px-[52px] sm:py-[17px] sm:text-base"
        style={{
          background:
            "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
        }}
      >
        {isSubmitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
}

export default RegisterForm;
