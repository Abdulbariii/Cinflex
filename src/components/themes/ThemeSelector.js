import React from "react";
import useTheme from "../../hook/useTheme";
export default function ThemeSelector() {
  const colors = ["bg-sky-500", "bg-red-500", "bg-yellow-500", "bg-purple-500"];

  const { color, colorChange } = useTheme();
  return (
    <div>
      <div className="flex p-2">
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
