import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Navigation() {
  return (
    <div className=" flex justify-between p-5 bg-indigo-400 h-20 w-full items-center">
      <Logo></Logo>
      <Navbar></Navbar>
    </div>
  );
}
