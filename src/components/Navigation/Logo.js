import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <h1 className="font-medium text-transparent  text-4xl bg-clip-text bg-gradient-to-r from-slate-700 to-white ">
          CINFLIX
        </h1>
      </Link>
    </div>
  );
}
