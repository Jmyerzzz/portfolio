import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GitHub() {
  return (
    <Element name="contact">
      <section className="section-base flex flex-col items-center text-xl">
        <span>Thanks for looking!</span>
        <div className="flex">
          See this code on
          <div className="flex items-center">
            <a href="https://github.com/Jmyerzzz/">
              <FontAwesomeIcon
                icon={faGithub}
                className="mx-2 hover:scale-105"
              />
            </a>
            GitHub
          </div>
        </div>
      </section>
    </Element>
  );
}
