import { Element } from "react-scroll";
import { motion } from "framer-motion";
import SlideIn from "./Animations/SlideIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { skills } from "@/util/constants";

const skillsAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 100,
    y: 0,
    transition: {
      delay: 0.025 * index,
      duration: 0.2,
    },
  }),
};

export default function About() {
  return (
    <Element name="about">
      <section className="section-base">
        <SlideIn>
          <h1 className="mb-4 pb-2 text-5xl font font-semibold border-b border-sky-400">
            About
          </h1>
        </SlideIn>
        <SlideIn>
          <div className="grid grid-cols-3 gap-x-2">
            <p className="col-span-2">
              fybnjkmbhugvycyvub hinjokmbuvgfcgvuh binjokmibhgvfc
              gvbhjnomkkoihbug vyfghbnjkmnib hugvyfyghubijnfyb njkmbhugvycyvub
              hinjokmbuvgfcg vuhbinjokm ibhgvfcgvbhjn omkkoihbu gvyfghb jkmnibhu
              gvyfyghubij nfybnjkmbhugv ycyvubhinjokmbuvgfc gvuhbinjok
              mibhgvfcgvbhjno mkkoihb ugvyfghbnjkmnibhugvy fyghubijnfybnjkmbhugv
              ycyvubhinjokmbuvgfc gvuhbinjokmi bhgvfcgvbhjnom kkoihbugvyfghbnj
              kmnibhugvyfyghubijnf ybnjkmbhugvycyvubhin
            </p>
            <div className="flex flex-col">
              <div className="flex items-center mb-2 text-xl">
                <FontAwesomeIcon
                  icon={faTerminal}
                  className="mr-2 text-sky-400"
                />
                Skills
              </div>
              <ul className="flex flex-wrap max-h-[300px] gap-2">
                {skills.map((skill, index) => (
                  <motion.li
                    className="px-2 bg-transparent border border-zinc-600 rounded-full"
                    key={index}
                    variants={skillsAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </SlideIn>
      </section>
    </Element>
  );
}
