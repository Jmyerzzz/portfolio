import { useRef } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "framer-motion";
import { Element } from "react-scroll";
import SlideIn from "./Animations/SlideIn";
import { experiences } from "@/util/constants";

type Experience = {
  title: string;
  company: string;
  image: string;
  date: string;
};

const ExperienceItem = ({
  index,
  experience,
}: {
  index: number;
  experience: Experience;
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
      date={experience.date}
      iconStyle={{ background: "white", color: "#fff" }}
      icon={
        <Image
          src={experience.image}
          alt="exp"
          width={100}
          height={100}
          draggable={false}
        />
      }
      visible={inView}
    >
      <div ref={ref} className="text-white">
        <h3 className="text-2xl">{experience.title}</h3>
        <h4 className="text-xl">{experience.company}</h4>
      </div>
    </VerticalTimelineElement>
  );
};

export default function Experience() {
  return (
    <Element name="experience">
      <section className="section-base">
        <SlideIn>
          <h1 className="mb-4 pb-2 text-5xl font font-semibold border-b border-sky-400">
            Work Experience
          </h1>
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
