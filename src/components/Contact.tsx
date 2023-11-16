import { Element } from "react-scroll";
import SlideIn from "./Animations/SlideIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <Element name="contactme">
      <section className="section-base mb-40 lg:mb-20">
        <SlideIn>
          <h1 className="mb-4 pb-2 text-5xl font font-semibold border-b border-sky-400">
            Contact
          </h1>
        </SlideIn>
        <SlideIn>
          <p className="flex justify-center mt-20 text-4xl">
            <span className="text-center">
              If you want to connect, you can find me on{" "}
              <a
                href="https://www.linkedin.com/in/jacksontmyers/"
                className="text-sky-400 hover:text-sky-500"
              >
                LinkedIn
              </a>
              .
            </span>
          </p>
          <p className="flex flex-col justify-center items-center mt-8 text-3xl">
            Or send me an email!
            <a
              href="mailto:jacksontmyers@gmail.com"
              className="flex items-center group w-fit my-3 px-3 py-1 uppercase text-xl text-zinc-900 bg-sky-400 rounded hover:bg-sky-500"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 group-hover:text-white"
              />
              Email Me
            </a>
          </p>
        </SlideIn>
      </section>
    </Element>
  );
}
