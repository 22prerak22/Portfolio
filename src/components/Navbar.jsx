import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-[36px] mx-2 w-11" />
      </div>
      <div className="btn">
        <motion.a
          href="/portfolio/Prerak_Patel_Resume.docx"
          download="Prerak_Patel_Resume.docx"
          initial={{ "--x": "100%", scale: 1 }}
          animate={{ "--x": "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
              type: "spring",
              stiffness: 10,
              damping: 5,
              mass: 0.1,
            },
          }}
          className="px-6 py-2 rounded-md relative radial-gradient"
        >
          <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
            Download My CV
          </span>
        </motion.a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/prerak-patel-510970151/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.5,
            rotate: 360,
          }}
          transition={{ duration: 0.5 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/22prerak22"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.5,
            rotate: 360,
          }}
          transition={{ duration: 0.5 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/your-instagram-profile/" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.5,
            rotate: 360,
          }}
          transition={{ duration: 0.5 }}
        >
          <FaInstagram />
        </motion.a>
      </div>
    </div>
  );
};

export default Navbar;
