import { Element } from "react-scroll";
import SlideIn from "./Animations/SlideIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <Element name="contact">
      <section className="section-base mb-20">
        <SlideIn>
          <div className="mb-4 pb-2 text-5xl font font-semibold border-b border-sky-400">
            Contact
          </div>
        </SlideIn>
        <SlideIn>
          <div className="flex justify-center mt-20 text-4xl">
            <span>If you want to connect, you can find me on&nbsp;</span>
            <span>
              <a
                href="https://www.linkedin.com/in/jacksontmyers/"
                className="text-sky-300"
              >
                LinkedIn.&nbsp;
              </a>
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 text-3xl">
            Or send me an email!
            <div className="group w-fit my-3 px-3 py-1 uppercase text-xl text-zinc-900 bg-sky-400 rounded hover:bg-sky-500">
              <a
                href="mailto:jacksontmyers@gmail.com"
                className="flex items-center"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 group-hover:text-white"
                />
                Email Me
              </a>
            </div>
          </div>
        </SlideIn>
      </section>
    </Element>
  );
}
