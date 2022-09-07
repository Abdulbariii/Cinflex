import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import useTheme from "../../hook/useTheme";
export default function Menu() {
  const { openNavbar, openMenu } = useTheme();
  return (
    <div>
      <button
        onClick={() => {
          openNavbar(openMenu ? false : true);
        }}
        className="text-4xl transition-all duration-200 text-white md:hidden"
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
