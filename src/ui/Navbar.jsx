import Logo from "./Logo";
import NavLinks from "./NavLinks";
import PrimaryBtn from "./PrimaryBtn";

function Navbar() {
  return (
    <nav className="border-b-borderColor flex items-center justify-between border-b-[1px] px-[128px] pb-[25px] pt-[63px]">
      <Logo />
      <div className="flex gap-[121px]">
        <NavLinks />
        <PrimaryBtn>
          <span>Register</span>
        </PrimaryBtn>
      </div>
    </nav>
  );
}

export default Navbar;
