import { useLayoutEffect, useState } from "react";

export default function ScrollTracker() {
  const [pos, setPos] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => setPos(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div>Scroll Position: {pos}</div>;
}
