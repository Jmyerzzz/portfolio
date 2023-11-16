import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GitHub() {
  return (
    <footer className="section-base mb-20 flex flex-col items-center text-xl">
      <span>Thanks for looking!</span>
      <div className="flex items-center mt-2">
        See this code on
        <a
          href="https://github.com/Jmyerzzz/portfolio"
          className="text-sky-400 hover:text-sky-500"
        >
          <FontAwesomeIcon icon={faGithub} className="mx-2" />
          GitHub
        </a>
      </div>
    </footer>
  );
}
