import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import useTheme from "../../hook/useTheme";
export default function Menu() {
  const { openNavbar, openMenu } = useTheme();
  return (
    <div>
      <button
        onClick={() => {
          openNavbar(!openMenu);
        }}
        className="lg:text-4xl md:text-4xl text-3xl lg:mt-0 md:mt-0 mt-2  transition-all duration-200 text-white md:hidden"
      >
        {openMenu ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </button>
    </div>
  );
}
