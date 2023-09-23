/* eslint-disable react/prop-types */

function SecondaryButton({ children, showModal, data }) {
  function handleSubmit(data) {
    async function postData() {
      try {
        const res = await fetch(
          `https://backend.getlinked.ai/hackathon/registration`,
          {
            method: "POST",
            headers: "Content-Type: application/json",
            body: JSON.stringify(data),
            // {email, phone_number, team_name, group_size, project_topic, category, privacy_poclicy_accepted}
          },
        );
        const resq = await res.JSON();
        console.log(data);

        return resq;
      } catch (err) {
        console.log(err);
      }
    }

    postData();
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSubmit(data);
        showModal();
      }}
      className=" inline-block w-full rounded px-[46px] py-[15px] font-mons text-[13px] font-normal text-white sm:px-[52px] sm:py-[17px] sm:text-base"
      style={{
        background:
          "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
      }}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
