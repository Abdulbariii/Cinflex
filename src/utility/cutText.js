import React from "react";

export const CutText = (text, limit) => {
  if (text.length <= limit) return text;

  return `${text.substr(0, limit)}...`;
};
