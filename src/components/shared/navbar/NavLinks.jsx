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
          variants={path === "aboutus" ? activeVariants : itemVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <Link
            to="/aboutus"
            tabIndex="1"
            aria-label="Go to the aboutus page"
            {...(toggleMenu && { onClick: toggleMenu })}
          >
            About us
          </Link>
        </motion.div>
      </li>
      <li>
        <motion.div
          variants={path === "challenges" ? activeVariants : itemVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <Link
            to="/challenges"
            tabIndex="1"
            aria-label="Go to the challenges page"
            {...(toggleMenu && { onClick: toggleMenu })}
          >
            Challenges
          </Link>
        </motion.div>
      </li>
      <li>
        <motion.div
          variants={path === "evenets" ? activeVariants : itemVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <Link
            to="/evenets"
            tabIndex="2"
            aria-label="Go to the evenets page"
            {...(toggleMenu && { onClick: toggleMenu })}
          >
            Evenets
          </Link>
        </motion.div>
      </li>
      <li>
        <motion.div
          variants={path === "arena" ? activeVariants : itemVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <Link
            to="/arena"
            tabIndex="2"
            aria-label="Go to the arena page"
            {...(toggleMenu && { onClick: toggleMenu })}
          >
            Arena
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
