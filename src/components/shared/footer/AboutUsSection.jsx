import React from "react";

export default function AboutUsSection() {
  const classes = {
    footerH2: "text-xl",
    footerDiv: "flex flex-col items-start justify-start gap-4 my-8",
    textGray: "text-gray-400",
  };
  return (
    <div className={classes.footerDiv}>
      <h2 className={classes.footerH2}>Get to know us</h2>
      <p
        className={`text-sm w-72 ${classes.textGray}`}
      >{`We are a market place where you find everything related to 3D, 2D,
        modeling, animations and much more. \nWe also write articles about related topics, checkout our latest
        articles.`}</p>
    </div>
  );
}
