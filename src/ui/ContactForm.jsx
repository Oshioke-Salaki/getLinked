import PrimaryBtn from "./PrimaryBtn";

function ContactForm() {
  return (
    <form
      action=""
      className="bg-bgLight shadow-contactFormShadow max-w-[617px] rounded-xl px-[90px] pb-[67px] pt-[75px]"
    >
      <h1 className="mb-[34px] text-xl font-semibold text-primaryColor">
        Questions or need assistance?
        <br />
        Let us know about it!
      </h1>
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
        className="mb-[31px] h-[119px] w-full rounded border-[1px] border-solid border-white bg-transparent px-[15px] py-[6px] font-mons text-base font-normal text-white placeholder:text-white"
      ></textarea>
      <PrimaryBtn>Submit</PrimaryBtn>
    </form>
  );
}

export default ContactForm;
