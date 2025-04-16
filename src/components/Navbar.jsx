import logo from "../assets/ak.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-16" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl" >
          <a href="https://www.linkedin.com/in/aayushkukade/"><FaLinkedin /></a>
          <a href="https://github.com/its-tsukii"><FaGithub /></a>
          <a href="https://www.instagram.com/aayush.kukade/"><FaInstagram /></a>
          <a href="https://medium.com/@sroy10012001"><FaXTwitter /></a>
        </div>
    </nav>
  )
}

export default Navbar;