import React from "react";

export default function Hometitle({ text, className }) {
  return (
    <h1
      className={`xl:text-xl md:text-lg text-base font-bruno text-left mt-10 ${className}`}
    >
      {text}
    </h1>
  );
}
