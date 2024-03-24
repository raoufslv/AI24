import { Link } from "react-router-dom";

export default function Info({ icon, text, email }) {
  return (
    <li className="flex items-center justify-center gap-4">
      {icon}
      {email ? <Link to={`mailto:${email}`}>{email}</Link> : <p>{text}</p>}
    </li>
  );
}
