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
          <div className="grid lg:grid-cols-3 gap-y-6 lg:gap-x-6 auto-rows-min">
            <div className="lg:col-span-2 text-2xl font-extralight tracking-wide">
              <p>
                My name is Jackson Myers and I&apos;m a software engineer from
                the Bay Area. I attended college at Loyola Marymount University
                in Los Angeles, where I remained for work for the the following
                four years. I&apos;ve primarily worked with Node, Python, and
                React with a stronger focus on backend, but I am keen to expand
                my repertoire and work with whatever the job requires.
              </p>
              <br />
              <p>
                I previously worked at an enterprise blockchain fintech
                company—Symbiont. There, I worked with a proprietary language
                called SymPL for smart contract development; the remaining work
                required Node and React. My team and I were working directly
                with stakeholders at Vanguard and State Street Bank on a product
                for foreign exchange derivatives trading.
              </p>
              <br />
              <p>
                Outside of work I enjoy fitness, whether that&apos;s mountain
                biking, snowboarding, or being in the gym. You can find me at
                live music events on the weekends. I&apos;m a big fan of jam
                bands like Dead & Company and Goose.
              </p>
            </div>
            <div className="flex flex-col h-fit">
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
