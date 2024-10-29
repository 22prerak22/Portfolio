import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-[36px] mx-2 w-11" />
      </div>
      <div className="btn">
        <motion.a
          href="/Prerak_Patel_Resume.docx"
          download="Prerak_Patel_Resume.docx"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Download Resume
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
