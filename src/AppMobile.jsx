import { useEffect, useState, useRef } from "react";
import PopupMobile from "./assets/PopupMobile.jsx";
import GalleryData from "./assets/GalleryData.js";
import Eyeball from "./assets/Eyeball";
import SOTHM1 from "./assets/SOTHM1.jpg";
import GDB1 from "./assets/GDB1.jpg";
import './indexMobile.css';

export default function AppMobile() {
  const [accent, setAccent] = useState("#000000");
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerProj = useRef(null);
  const triggerSkills = useRef(null);
  const triggerAbout = useRef(null);
  const triggerLinks = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const makeObserver = (ref, colorIn, colorOut) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setAccent(colorIn);
        },
        { threshold: 0.7 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const oPro = makeObserver(triggerProj, "#3c16d4");
    const oSkl = makeObserver(triggerSkills, "#2ea477");
    const oAbt = makeObserver(triggerAbout, "#000000");
    const oLnk = makeObserver(triggerLinks, "#e71075");

    return () => {
      oPro.disconnect();
      oSkl.disconnect();
      oAbt.disconnect();
      oLnk.disconnect();
    };
  }, []);

  return (
    <main>
      <div id="topHeader">
        <img
          id="hamburger"
          src="src/assets/Hamburger.svg"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: 'pointer' }}
        />

        {menuOpen && (
          <nav id="hamburgerMenu">
            <a className="hamburgerA" href="#skills" onClick={() => { setMenuOpen(false); setAccent("#2ea477"); }}>Skills</a>
            <a className="hamburgerA" href="#projects" onClick={() => { setMenuOpen(false); setAccent("#3c16d4"); }}>Projects</a>
            <a className="hamburgerA" href="#links" onClick={() => { setMenuOpen(false); setAccent("#e71075"); }}>Links</a>
          </nav>
        )}
      </div>
      <h1 className="h1Mobile">DESIGNER <span id="smaller">&</span><br />DEVELOPER .</h1>
      <div className="scrollable">
        <p className="pMobile spanAll">Just a heads up! My desktop website is pretty cool too and has fun elements I didn't want to clutter on the smaller screen. Be sure to check that version out!</p>
        <Eyeball variant="inline" />
        <div id="about" />
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
        <div id="skills" />
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
        <div id="projects" />
        <h2 className="wobbleText h2Mobile">Here are some<br />of my projects.</h2>
        <div ref={triggerProj} />
        <div className="galDiv">
          <svg onClick={() => { setIndex(3); setShowPopup(true); }} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="galSVG" >
            <mask id="maskSOTHM">
              <circle cx="200" cy="200" r="195" fill="#ffffff" />
            </mask>
            <image href={SOTHM1} x="-150" y="-50" width="800" height="800" mask="url(#maskSOTHM)" />
          </svg>
          <svg onClick={() => { setIndex(1); setShowPopup(true); }} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="galSVG" >
            <mask id="maskGDB">
              <circle cx="200" cy="200" r="195" fill="#ffffff" />
            </mask>
            <image href={GDB1} x="-340" y="-160" width="900" height="900" mask="url(#maskGDB)" />
          </svg>
        </div>
        <div id="links" />
        <h2 className="wobbleText h2Mobile">Want more? Here's some links!</h2>
        <div ref={triggerLinks} />
        <div className="linksContainer">
          <a className="aMobile" href="https://www.linkedin.com/in/ashleeberkel" target="_blank">LinkedIn</a><br />
          <a className="aMobile" href="https://bsky.app/profile/abcreates.bsky.social" target="_blank"> Bluesky</a><br />
          <a className="aMobile" href="https://github.com/ashberkel" target="_blank"> GitHub</a><br />
          <a className="aMobile" href="mailto:ashberkel@gmail.com">Email</a><br />
        </div>
      </div>
            {showPopup && (
        <PopupMobile
          data={GalleryData[index]}
          onClose={() => setShowPopup(false)}
        />
      )}
    </main>
  );
}