import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SlideIn from "./Animations/SlideIn";

export default function GitHub() {
  return (
    <Element name="contact">
      <section className="section-base mb-20 flex flex-col items-center text-xl">
        <SlideIn>
          <span>Thanks for looking!</span>
          <div className="flex items-center mt-2">
            See this code on
            <a href="https://github.com/Jmyerzzz/portfolio">
              <div className="text-sky-300 hover:text-sky-400">
                <FontAwesomeIcon icon={faGithub} className="mx-2" />
                GitHub
              </div>
            </a>
          </div>
        </SlideIn>
      </section>
    </Element>
  );
}
