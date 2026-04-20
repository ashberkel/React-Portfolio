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
        <img id="hamburger" src="src/assets/Hamburger.svg" />
      <header id="top-left"><h2>AshLee Berkel</h2><h1 className="wobbleText">DESIGNER <span id="smaller">&</span><br />DEVELOPER .</h1></header>
      <Eyeball variant="home" />
    </main>
  );
}