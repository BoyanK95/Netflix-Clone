import React from "react";
import SignInButton from "../buttons/SignInButton";
import SingUpButton from "../buttons/SignUpButton";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Logo />
      <div>
        <SignInButton />
        <SingUpButton />
      </div>
    </nav>
  );
};

export default Navbar;
