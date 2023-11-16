import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import SlideIn from "./Animations/SlideIn";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="section-base lg:mt-40">
      <div className="lg:mr-80 my-5 min-w-fit relative z-10">
        <SlideIn index={0} direction="y">
          <span className="text-8xl font-semibold text-sky-400">Hey, </span>
          <span className="text-8xl font-semibold">I&apos;m Jackson</span>
        </SlideIn>
        <SlideIn index={1} direction="y">
          <h2 className="flex items-center my-8 ml-5 lg:ml-7 text-3xl lg:text-5xl font-semibold">
            <FontAwesomeIcon icon={faAnglesRight} size="xs" className="mr-2" />
            Full Stack Engineer
          </h2>
        </SlideIn>
        <SlideIn index={2} direction="y">
          <p className="max-w-[700px] whitespace-normal">
            fybnjkmbhugvycyvubhinjokmbuvgfcgvuh
            binjokmibhgvfcgvbhjnomkkoihbugvyfghbnjkmnib
            hugvyfyghubijnfybnjkmbhugvycyvub hinjokmbuvgfcgvuhbinjokm
            ibhgvfcgvbhjnomkkoihbu gvyfghbnjkmnibhu
            gvyfyghubijnfybnjkmbhugvycyvubhinjokmbuvgfcgvuhbinjok
            mibhgvfcgvbhjnomkkoihb ugvyfghbnjkmnibhugvyfyghubijnfybnjkmbhugv
            ycyvubhinjokmbuvgfcgvuhbinjokmi bhgvfcgvbhjnomkkoihbugvyfghbnj
            kmnibhugvyfyghubijnf ybnjkmbhugvycyvubhin
          </p>
        </SlideIn>
        <SlideIn index={3} direction="y">
          <Link
            to="contactme"
            spy={true}
            duration={1000}
            delay={100}
            smooth={true}
            offset={50}
            className="flex items-center w-fit group my-8 px-3 py-1 uppercase text-xl text-zinc-900 bg-sky-400 rounded hover:bg-sky-500 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2 group-hover:text-white"
            />
            Contact
          </Link>
        </SlideIn>
      </div>
      <div className="absolute invisible lg:visible top-40 right-40">
        <SlideIn index={3} direction="x">
          <Image
            src="/test_pic.png"
            alt="portrait"
            width={700}
            height={700}
            className="mr-20 grayscale drop-shadow-[0_0px_35px_rgba(0,0,0,0.25)]"
            draggable={false}
            priority={true}
          />
        </SlideIn>
      </div>
    </section>
  );
}
