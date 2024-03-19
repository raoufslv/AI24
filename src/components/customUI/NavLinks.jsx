import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavLinks() {
  const location = useLocation();
  return (
    <>
      <li>
        <Link to="/" tabIndex="0" aria-label="Go to the homepage">
          Home
        </Link>
      </li>
      <li>
        <Link to="/Products" tabIndex="1" aria-label="Go to the productspage">
          Products
        </Link>
      </li>
      <li>
        <Link to="/News" tabIndex="2" aria-label="Go to the newspage">
          News
        </Link>
      </li>
      {/*only if the user is in the home page*/}
      {location.pathname === "/" ? (
        <li>
          <Link to="#about" tabIndex="3" aria-label="Learn more about us">
            About
          </Link>
        </li>
      ) : null}
      <li>
        <Link to="/contact" tabIndex="4" aria-label="Get in touch with us">
          Contact
        </Link>
      </li>
    </>
  );
}
