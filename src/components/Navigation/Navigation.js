import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import useTheme from "../../hook/useTheme";

export default function Navigation() {
  const { color } = useTheme();
  return (
    <div
      className={`flex justify-between p-5 ${color} h-20 w-full items-center  `}
    >
      <Logo></Logo>
      <Navbar></Navbar>
    </div>
  );
}
