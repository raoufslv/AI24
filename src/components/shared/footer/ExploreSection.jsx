import { Link } from "react-router-dom";

export default function ExploreSection() {
  const classes = {
    footerH2: "text-xl",
    footerDiv: "flex flex-col items-start justify-start gap-4 my-8",
    textGray: "text-gray-400",
    linkHover: "hover:text-greeny",
  };
  return (
    <div className={classes.footerDiv}>
      <h2 className={classes.footerH2}>Explore</h2>
      <ul className={`flex flex-col gap-2 text-sm ${classes.textGray}`}>
        <li className={classes.linkHover}>
          <Link to="/#">Home</Link>
        </li>
        <li className={classes.linkHover}>
          <Link to="/Products">Products</Link>
        </li>
        <li className={classes.linkHover}>
          <Link to="/News">News</Link>
        </li>
        <li className={classes.linkHover}>
          <Link to="/Contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}
