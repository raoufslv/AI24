import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavLinks({ toggleMenu }) {
  const location = useLocation();
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
          <Link
            to="/"
            tabIndex="0"
            aria-label="Go to the homepage"
            {...(toggleMenu && { onClick: toggleMenu })}
          >
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
            {...(toggleMenu && { onClick: toggleMenu })}
          >
            Products
          </Link>
        </motion.div>
      </li>
      <li>
        <motion.div
          variants={path === "categories" ? activeVariants : itemVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <Link
            to="/categories"
            tabIndex="1"
            aria-label="Go to the categories page"
            {...(toggleMenu && { onClick: toggleMenu })}
          >
            categories
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
          <Link
            to="/news"
            tabIndex="2"
            aria-label="Go to the news page"
            {...(toggleMenu && { onClick: toggleMenu })}
          >
            News
          </Link>
        </motion.div>
      </li>

      <li>
        <motion.div
          variants={path === "contact" ? activeVariants : itemVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/contact"
            tabIndex="4"
            aria-label="Get in touch with us"
            {...(toggleMenu && { onClick: toggleMenu })}
          >
            Contact
          </Link>
        </motion.div>
      </li>
    </>
  );
}
