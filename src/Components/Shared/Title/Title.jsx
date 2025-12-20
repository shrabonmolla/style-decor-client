import React from "react";

export default function Title({ text, subText }) {
  return (
    <div className="text-center py-4 ">
      <h1 className="text-5xl text-[#03045e] font-bold">{text}</h1>
      <p className="text-[#023e8a]">{subText}</p>
    </div>
  );
}
