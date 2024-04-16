import { Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactInfo() {
  const classes = {
    flexGap: "flex gap-4",
    textGray: "text-gray-400",
  };
  return (
    <div className="flex flex-col items-start justify-start gap-4 my-8">
      <h2 className="text-xl">Contact us</h2>
      <div className={classes.flexGap}>
        <PhoneCall size={44} />
        <div className="flex flex-col w-full">
          <p className={classes.textGray}>Sunday-Thursday: 08am-5pm</p>
          <p>05 42 82 29 65</p>
        </div>
      </div>
      <div className={classes.flexGap}>
        <Mail size={34} />
        <div className="flex flex-col w-full">
          <p className={classes.textGray}>24/7 Mail support</p>
          <Link to="mailto:contact@codequestarena.com">contact@codequestarena.com</Link>
        </div>
      </div>
    </div>
  );
}
