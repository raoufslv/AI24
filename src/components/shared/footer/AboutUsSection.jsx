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
      >{`We code and we quest. We are the best in the west. We are the Code Quest Arena team. We are here to help you with all your coding needs. We are the best in the west.`}</p>
    </div>
  );
}
