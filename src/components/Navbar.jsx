import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-slate-900/80 to-slate-800/80 border-b border-orange-500/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Nischal
        </h1>

        <div className="hidden md:flex gap-8 items-center">
          {["about", "skills", "projects", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-orange-400 transition-colors duration-300 capitalize font-medium"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex gap-5 text-xl text-white">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;