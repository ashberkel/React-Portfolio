import { useEffect, useState } from "react";
import "./About.css"
import Eyeball from "../assets/Eyeball";

export default function About() {
  
let facts = ["I still have my wisdom teeth.", "I can't tie a cherry stem with my mouth.", "The Neverhood is my favorite childhood game.", "I was born in Misawa, Japan.", "I own a melodica."];
const [factIndex] = useState(() => Math.floor(Math.random() * facts.length));


const [displayedText, setDisplayedText] = useState("");
const aboutMe = `How much can one
say in the space
of an eyeball? Ever
since I could hold a pencil,
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
things, let's talk!
-Ash`

useEffect(() => {
    let index = -1;
    const speed = 60; 
    const delay = 1500;
    let intervalId;
   const timeoutId = setTimeout(() => {
    intervalId = setInterval(() => {
      if (index < aboutMe.length - 1) {
        index += 1; 
        setDisplayedText(prev => prev + aboutMe[index]); // append current
      } else {
        clearInterval(intervalId);
      }
    }, speed);
    }, delay);
    
    return () => {clearTimeout(timeoutId);clearInterval(intervalId);  };
}, []);

  return (
  <main>
    <h1>About Me</h1>
    <h2>{facts[factIndex]}</h2>
    <div className="pTyped">
        <div className="typeBox">
        <p className="typeText">
          {displayedText}
          <span className="caret" />
        </p></div>
      </div>
    <Eyeball variant="about" />
    </main>);
}