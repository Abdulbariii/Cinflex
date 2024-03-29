import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import useTheme from "../../hook/useTheme";
import Menu from "./Menu";
export default function Navigation() {
  const { color, openMenu } = useTheme();
  return (
    <div
      className={`flex flex-col  md:flex-row  bg-transparent justify-between   origin-bottom-right   transition-all duration-200   overflow-hidden ${
        openMenu ? "lg:h-16 md:h-16 h-72" : "lg:h-16 md:h-16 h-10 "
      } w-full items-start  md:items-center `}
    >
      <div className="md:flex hidden">
        <Logo></Logo>
      </div>
      <div className=" flex items-center justify-between md:hidden  w-full">
        <Logo></Logo>
        <Menu></Menu>
      </div>

      <Navbar></Navbar>
    </div>
  );
}
