import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-20 flex justify-between items-center min-w-full px-7 py-4 bg-zinc-900/30 backdrop-blur-md text-zinc-100">
      <div className="uppercase text-xl">
        <Link
          className="nav-button"
          activeClass="active-nav"
          to="about"
          spy={true}
          duration={1000}
          delay={100}
          smooth={true}
          offset={50}
        >
          About
        </Link>
        <Link
          className="mx-4 nav-button"
          activeClass="active-nav"
          to="experience"
          spy={true}
          duration={1000}
          delay={100}
          smooth={true}
          offset={50}
        >
          Experience
        </Link>
        <Link
          className="nav-button"
          activeClass="active-nav"
          to="contact"
          spy={true}
          duration={1000}
          delay={100}
          smooth={true}
          offset={50}
        >
          Contact
        </Link>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/jacksontmyers/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="xl"
            className="hover:scale-105"
          />
        </a>
        <a href="https://github.com/Jmyerzzz/">
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            className="mx-4 hover:scale-105"
          />
        </a>
        <button className="group px-3 py-1 tracking-wider uppercase font-semibold text-xl border-2 border-sky-400 rounded hover:border-sky-500">
          <div className="flex items-center">
            Resume
            <FontAwesomeIcon
              icon={faDownload}
              size="sm"
              className="ml-2 group-hover:text-sky-500"
            />
          </div>
        </button>
      </div>
    </header>
  );
}
