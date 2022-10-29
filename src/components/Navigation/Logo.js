import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <h1 className="font-Main text-transparent  text-4xl bg-clip-text bg-gradient-to-r from-green-500 to-green-500 ">
          CINFLIX
        </h1>
      </Link>
    </div>
  );
}
