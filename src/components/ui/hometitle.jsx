import React from "react";

export default function Hometitle({ text, className }) {
  return (
    <h1
      className={`xl:text-2xl md:text-lg text-base font-bruno text-left xl:mt-6 mt-2 ${className}`}
    >
      {text}
    </h1>
  );
}
