import { Facebook, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function FollowUsSection() {
  const classes = {
    footerH2: "text-xl",
    footerDiv: "flex flex-col items-start justify-start gap-4 my-8",
    flexGap: "flex gap-4",
    linkHover: "hover:text-greeny",
  };
  return (
    <div className={classes.footerDiv}>
      <h2 className={classes.footerH2}>Follow us</h2>
      <div className={classes.flexGap}>
        <Link
          to="https://www.facebook.com/"
          target="_blank"
          className={classes.linkHover}
        >
          <Facebook size={32} />
        </Link>
        <Link
          to="https://www.twitter.com/"
          target="_blank"
          className={classes.linkHover}
        >
          <Twitter size={32} />
        </Link>
        <Link
          to="https://www.youtube.com/"
          target="_blank"
          className={classes.linkHover}
        >
          <Youtube size={32} />
        </Link>
      </div>
    </div>
  );
}
