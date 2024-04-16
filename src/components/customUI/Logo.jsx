import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className=" flex items-center space-x-2" to={"/"}>
      <h1 className="lg:text-2xl sm:text-xl text-lg font-bruno text-emerald-400">
        Code Quest Arena
      </h1>
    </Link>
  );
}
