import React, { useState, useEffect } from 'react';
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import "../App.css";

export default function Display() {
  const [padding, setPadding] = useState('25%');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPadding('0');
      } else {
        setPadding('25%');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`pl-[25%]    w-screen back text-white`}>
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
