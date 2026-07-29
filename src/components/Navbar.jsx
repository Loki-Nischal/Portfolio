import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const githubProfileUrl = "https://github.com/Loki-Nischal";
const linkedinProfileUrl =
  "https://www.linkedin.com/in/nischal-budhathoki-ab8906327/";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-slate-900/80 to-slate-800/80 border-b border-orange-500/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <FaCode className="text-2xl text-orange-500" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Nischal
          </h1>
        </div>

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
          <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300" aria-label="GitHub profile">
            <FaGithub />
          </a>
          <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300" aria-label="LinkedIn profile">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;