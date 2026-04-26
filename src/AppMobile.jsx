import { useEffect, useState, useRef } from "react";
import Eyeball from "./assets/Eyeball";
import SOTHMimg from "./assets/SOTHM-image.jpg";
import './indexMobile.css';

export default function AppMobile() {
  const [accent, setAccent] = useState("#000000");
  const triggerProj = useRef(null);
  const triggerSkills = useRef(null);
  const triggerAbout = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  useEffect(() => {
    const makeObserver = (ref, colorIn, colorOut) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setAccent(colorIn);
        },
        { threshold: 0.4 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const oPro = makeObserver(triggerProj, "#3c16d4");
    const oSkl = makeObserver(triggerSkills, "#2ea477");
    const oAbt = makeObserver(triggerAbout, "#e71075");

    return () => {
      oPro.disconnect();
      oSkl.disconnect();
      oAbt.disconnect();
    };
  }, []);

  return (
    <main>
      <div id="topHeader"><img id="hamburger" src="src/assets/Hamburger.svg" />
        <h1 className="h1Mobile">DESIGNER <span id="smaller">&</span><br />DEVELOPER .</h1></div>
      <div className="scrollable">
        <p className="pMobile spanAll">Just a heads up! My desktop website is pretty cool too and has fun elements I didn't want to clutter on the smaller screen. Be sure to check that version out too!</p>
        <Eyeball variant="inline" />
        <h2 className="wobbleText h2Mobile">Hi, I'm AshLee.</h2>
        <div ref={triggerAbout} />
        <p className="pMobile">Ever since I could hold a pencil,
          the urge to create was there.
          It evolved into a solid Graphic
          Design career...but nowadays
          UX and Software Engineering
          are my fixation. Basically, if I
          get to make something cool
          and impactful, I'm happiest.
          In my spare time, I enjoy
          video games, puzzles, hiking,
          studying ASL, and trying new
          foods. If you also like
          over cool and impactful
          things, let's talk!</p>
        <h2 className="wobbleText h2Mobile">What am I good at?</h2>
        <div ref={triggerSkills} />
        <div class="skillsContainer">
          <p>HTML5</p>
          <p>JavaScript</p>
          <p>Git</p>
          <p>React.js</p>
          <p>Figma</p>
          <p>Version Control</p>
          <p>Adobe Creative Suite</p>
          <p>REST API</p>
          <p>Visual Systems</p>
          <p>UX Principles</p>
          <p>a11y Focused Design</p>
        </div>
        <h2 className="wobbleText h2Mobile">Here are some<br />of my projects.</h2>
        <div ref={triggerProj} />
        <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
          <mask id="svgmask1">
            <ellipse cx="220" cy="150" rx="200" ry="100" fill="#ffffff" />
          </mask>
          <image href={SOTHMimg} width="600" height="400" mask="url(#svgmask1)" />
        </svg>
      </div>
    </main>
  );
}