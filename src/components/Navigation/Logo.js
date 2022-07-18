import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <h1 className="lg:ml-16 text-4xl font-semibold ">CINFLIX</h1>
      </Link>
    </div>
  );
}
