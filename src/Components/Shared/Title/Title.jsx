import React from "react";

export default function Title({
  text,
  subText,
  align = "center", // center | left | right
  size = "text-4xl", // Tailwind text size
}) {
  return (
    <div className={`py-6 text-${align}`}>
      <h1 className={`font-heading font-title font-bold text-primary ${size}`}>
        {text}
      </h1>

      {subText && (
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subText}</p>
      )}
    </div>
  );
}
