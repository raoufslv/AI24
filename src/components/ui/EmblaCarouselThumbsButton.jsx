import React from "react";

export const Thumb = ({ selected, index, onClick, image }) => {
  return (
    <div
      className={"embla-thumbs__slide p-0".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <img
        onClick={onClick}
        src={image}
        className="rounded-lg object-cover object-center embla-thumbs__slide__number h-20"
        alt={index}
      />
    </div>
  );
};
