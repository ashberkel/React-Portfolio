import { useEffect, useState } from "react";
import Eyeball from "./assets/Eyeball";
import './indexMobile.css';

export default function AppMobile() {
  const [accent, setAccent] = useState("#000000");

    useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);
  
  return (
    <main>
      <div id="topHeader"><img id="hamburger" src="src/assets/Hamburger.svg" />
      <header><h1 className="wobbleText">DESIGNER <span id="smaller">&</span><br />DEVELOPER .</h1></header></div>
      <h2>Hi, I'm AshLee.</h2>
      <p>Just a heads up! My desktop website is pretty cool too and has fun elements I didn't want to clutter on the smaller screen. Be sure to check that version out too!</p><Eyeball variant="home" />
    </main>
  );
}