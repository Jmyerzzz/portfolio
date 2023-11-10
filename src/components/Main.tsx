import { useEffect } from "react";
import "overlayscrollbars/overlayscrollbars.css";
import { useOverlayScrollbars } from "overlayscrollbars-react";

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

  return <div className="flex flex-col justify-center"></div>;
}
