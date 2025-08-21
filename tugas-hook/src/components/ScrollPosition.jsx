import React, { useState, useLayoutEffect } from "react";

export default function ScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h1>Posisi Scroll</h1>
      <p>Scroll Y: {scrollY}px</p>
      <p>Geser halaman ke bawah untuk lihat perubahannya 👇</p>
    </div>
  );
}
