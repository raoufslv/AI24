import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavLinks() {
  const location = useLocation();
  // slice the pathname to get the first word after the slash
  const path = location.pathname.slice(1).split("/")[0];
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Animation variants
  const itemVariants = {
    animate: { opacity: 0.5 },
    hover: { scale: 1.1, opacity: 1 },
  };

  const activeVariants = {
    animate: { scale: 1.1, opacity: 1 },
  };

  return (
    <>
      <li>
        <motion.div
          variants={path === "" ? activeVariants : itemVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <Link to="/" tabIndex="0" aria-label="Go to the homepage">
            Home
          </Link>
        </motion.div>
      </li>
      <li>
        <motion.div
          variants={path === "products" ? activeVariants : itemVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <Link
            to="/products"
            tabIndex="1"
            aria-label="Go to the products page"
          >
            Products
          </Link>
        </motion.div>
      </li>
      <li>
        <motion.div
          variants={path === "news" ? activeVariants : itemVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <Link to="/news" tabIndex="2" aria-label="Go to the news page">
            News
          </Link>
        </motion.div>
      </li>
      {/*only if the user is in the home page*/}
      {location.pathname === "/" && (
        <li>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            initial="initial"
            animate="animate"
          >
            <button
              onClick={scrollToAbout}
              tabIndex="3"
              aria-label="Learn more about us"
            >
              About
            </button>
          </motion.div>
        </li>
      )}
      <li>
        <motion.div
          variants={path === "contact" ? activeVariants : itemVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/contact" tabIndex="4" aria-label="Get in touch with us">
            Contact
          </Link>
        </motion.div>
      </li>
    </>
  );
}
