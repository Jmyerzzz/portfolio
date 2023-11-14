import { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "framer-motion";
import { Element } from "react-scroll";
import SlideIn from "./Animations/SlideIn";
import { experiences } from "@/util/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const ExperienceItem = ({
  index,
  experience,
}: {
  index: number;
  experience: Object;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <VerticalTimelineElement
      key={index}
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{
        borderRight: "7px solid  rgb(33, 150, 243)",
      }}
      date="2011 - present"
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<FontAwesomeIcon icon={faTerminal} className="mr-2 text-sky-400" />}
      visible={inView}
    >
      <div ref={ref}>
        <h3 className="text-white text-2xl">safghgefwqefwgrergfw</h3>
        <p>{experience["test"]}</p>
      </div>
    </VerticalTimelineElement>
  );
};

export default function Experience() {
  return (
    <Element name="experience">
      <section className="section-base">
        <SlideIn>
          <div className="mb-4 pb-2 text-5xl font font-semibold border-b border-sky-400">
            Work Experience
          </div>
        </SlideIn>
        <SlideIn>
          <VerticalTimeline>
            {experiences.map((experience, index) => {
              return (
                <ExperienceItem
                  key={index}
                  index={index}
                  experience={experience}
                />
              );
            })}
          </VerticalTimeline>
        </SlideIn>
      </section>
    </Element>
  );
}
