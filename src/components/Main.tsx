"use client";

import { useEffect } from "react";
import "overlayscrollbars/overlayscrollbars.css";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import GitHub from "./GitHub";

export default function Main() {
  const [initBodyOverlayScrollbars] = useOverlayScrollbars({
    defer: true,
    options: {
      scrollbars: {
        theme: "os-theme-light",
        autoHide: "scroll",
      },
    },
  });

  useEffect(() => {
    initBodyOverlayScrollbars(document.body);
  }, [initBodyOverlayScrollbars]);

  return (
    <main className="flex flex-col justify-center">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <GitHub />
    </main>
  );
}
