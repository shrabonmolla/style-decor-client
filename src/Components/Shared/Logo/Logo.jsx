import React from "react";
import { Link } from "react-router";

export default function Logo() {
  return (
    <div>
      <Link className="font-bold font-logo text-2xl" to="/">
        StyleDecor
      </Link>
    </div>
  );
}
