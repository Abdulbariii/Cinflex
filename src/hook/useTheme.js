import  { useContext } from "react";
import { themeContext } from "../components/themes/ContextTheme";

export default function useTheme() {
  const color = useContext(themeContext);
  if (color === undefined) {
    throw new Error("You don't have context");
  }
  return color;
}
