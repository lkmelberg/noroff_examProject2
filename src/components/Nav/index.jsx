import React from "react";
import { useState, useEffect } from "react";
import { NavDesktop } from "../NavDesktop";
import { NavMobile } from "../NavMobile";

export function Nav() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 750);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isDesktop ? <NavDesktop /> : <NavMobile />}</>;
}
