import React from "react";
import useTheme from "../../hook/useTheme";
import logo from "../img/brightness.png";
export default function ThemeSelector() {
  const colors = ["bg-sky-500", "bg-red-500", "bg-yellow-500", "bg-purple-500"];

  const { color, colorChange, colorMode, mode } = useTheme();
  const modeToggle = () => {
    colorMode(mode === "bg-gray-50" ? "bg-gray-900" : "bg-gray-50");
  };
  return (
    <div className="flex  items-center justify-between pt-5">
      <div className="ml-20">
        <img
          onClick={() => {
            modeToggle();
          }}
          className={` filter ${
            mode === "bg-gray-900" ? "invert-[100%]" : "invert-0"
          } rounded-full w-8 h-8 m-2  `}
          src={logo}
        />
      </div>
      <div className="flex mr-10">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => colorChange(color)}
            className={`${color} rounded-full w-5 h-5 m-2  `}
          ></div>
        ))}
      </div>
    </div>
  );
}
