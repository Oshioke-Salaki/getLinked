import Navbar from "../ui/Navbar";
import imgMain from "../assets/regPageImg.png";
import RegisterForm from "../ui/RegisterForm";
import { useState } from "react";
import Modal from "../ui/Modal";

function RegisterPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-full overflow-x-hidden bg-[#150E28] pb-[57px]">
      {showModal && <Modal />}
      <Navbar />
      <main className="relative flex h-full justify-end pr-[104px] pt-[43px]">
        <img src={imgMain} className="absolute left-0 top-0" alt="" />
        <RegisterForm showModal={setShowModal} />
      </main>
    </div>
  );
}

export default RegisterPage;
