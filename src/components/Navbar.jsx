import logo from"../assets/PRIYANSHILOGO.jpg"

import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const Navbar = () => {
  return (
    <nav className=" mb-20  flex items-center justify-between py-2 px-4">
  <div className="flex flex-shrink-0 item-center">
  <img className="mx-2 w-20 " src={logo} alt="logo"  />
  </div>
  <div className="m-3 flex items-center justify-center gap-4 text-3xl">
   <FaLinkedin/>
   <FaInstagram/>
   <FaTwitter/>
    <FaGithub/>
   
  </div>
  </nav>
  );
}

export default Navbar
