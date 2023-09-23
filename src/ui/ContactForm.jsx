import { useState } from "react";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    const res = await fetch(
      `https://backend.getlinked.ai/hackathon/contact-form`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone_number: "09051896629",
          first_name,
          message,
        }),
        // {email, phone_number, team_name, group_size, project_topic, category, privacy_poclicy_accepted}
      },
    );
    const resq = await res.JSON();

    console.log(resq);
  }

  return (
    <form
      action=""
      className="sm:bg-bgLight sm:shadow-contactFormShadow z-20 w-full rounded-xl bg-transparent shadow-none sm:w-[617px] sm:max-w-[617px] sm:px-[90px] sm:pb-[67px] sm:pt-[75px]"
    >
      <h1 className="mb-[34px] text-xl font-semibold text-primaryColor">
        Questions or need assistance?
        <br />
        Let us know about it!
      </h1>
      <p className="mb-[30px] block font-mons text-xs font-normal text-white sm:hidden">
        Email us below to any question related to our event
      </p>
      <input
        type="text"
        value={first_name}
        onChange={(e) => setFirst_name(e.target.value)}
        placeholder="First Name"
        className="w-full rounded border-[1px] border-solid border-white bg-transparent px-[29px] py-[14px] font-mons text-base font-normal text-white placeholder:text-white"
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="my-[42px] w-full rounded border-[1px] border-solid border-white bg-transparent px-[29px] py-[14px] font-mons text-base font-normal text-white placeholder:text-white"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mb-[31px] h-[160px] w-full rounded border-[1px] border-solid border-white bg-transparent px-[15px] py-[6px] font-mons text-base font-normal text-white placeholder:text-white sm:h-[119px]"
      ></textarea>
      <div className="flex w-full justify-center">
        <button
          onClick={handleSubmit}
          className=" inline-block rounded px-[46px] py-[15px] font-mons text-[13px] font-normal text-white sm:px-[52px] sm:py-[17px] sm:text-base"
          style={{
            background:
              "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
