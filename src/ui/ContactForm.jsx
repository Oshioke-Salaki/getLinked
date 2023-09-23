import PrimaryBtn from "./PrimaryBtn";

function ContactForm() {
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
        placeholder="First Name"
        className="w-full rounded border-[1px] border-solid border-white bg-transparent px-[29px] py-[14px] font-mons text-base font-normal text-white placeholder:text-white"
      />
      <input
        type="text"
        placeholder="Email"
        className="my-[42px] w-full rounded border-[1px] border-solid border-white bg-transparent px-[29px] py-[14px] font-mons text-base font-normal text-white placeholder:text-white"
      />
      <textarea
        placeholder="Message"
        className="mb-[31px] h-[160px] w-full rounded border-[1px] border-solid border-white bg-transparent px-[15px] py-[6px] font-mons text-base font-normal text-white placeholder:text-white sm:h-[119px]"
      ></textarea>
      <div className="flex w-full justify-center">
        <PrimaryBtn>Submit</PrimaryBtn>
      </div>
    </form>
  );
}

export default ContactForm;
