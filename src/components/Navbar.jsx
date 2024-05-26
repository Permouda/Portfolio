import logo from "../assets/Permouda_LOGO_Black.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img className="mx-2 h-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/iliass-el-haddaji/" target="_blank">
        <FaLinkedin /></a>
        <a href="https://github.com/Permouda">
        <FaGithub /></a>
        <a href="https://www.instagram.com/ilya.permouda/" target="_blank"><FaInstagram /></a>
        <a href="https://x.com/elhaddaji_" target="_blank"><FaSquareXTwitter /></a>
      </div>
    </nav>
  );
};

export default Navbar;
