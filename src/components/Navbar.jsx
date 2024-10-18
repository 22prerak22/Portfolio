import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-[36px] mx-2 w-11" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </div>
  );
};

export default Navbar;
