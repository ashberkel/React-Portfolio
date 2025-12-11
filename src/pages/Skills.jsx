import { useEffect } from "react";
import "./Skills.css"
import Eyeball from "../assets/Eyeball";

export default function Skills() {
useEffect(() => {
  const speed = 1;
  const bounceBox = document.getElementById("bounceBox");
  if (!bounceBox) return;
  const allKeywords = bounceBox.querySelectorAll(".keywords");

const eachWord = Array.from(allKeywords).map((word) => {
  // initial styles
  word.style.position = "absolute";;

  const boxWidth = bounceBox.clientWidth;
  const boxHeight = bounceBox.clientHeight;

  const width = word.offsetWidth;
  const height = word.offsetHeight;

  const startX = Math.random() * (boxWidth - width);
  const startY = Math.random() * (boxHeight - height);

  word.style.left = startX + "px";
  word.style.top = startY + "px";

  const wordObj = {
    word, // the DOM element
    x: startX,
    y: startY,
    dirX: Math.random() < 0.5 ? -1 : 1,
    dirY: Math.random() < 0.5 ? -1 : 1,
    prevColorIndex: 0,
    width,
    height,
    paused: false, // 🔹 NEW
  };

  // 🔹 Hover: pause + grow
  word.addEventListener("mouseenter", () => {
    wordObj.paused = true;
    word.style.color = "white";
    word.style.backgroundColor = "#153629ff"
    word.style.transform = "scale(2)"; // grow a bit
  });

  // 🔹 Leave: unpause + reset size
  word.addEventListener("mouseleave", () => {
    wordObj.paused = false;
    word.style.color = "#83c1a9ff"
    word.style.backgroundColor = ""
    word.style.transform = "scale(1)"; // back to normal
  });

  return wordObj;
});

  function animate() {
    const boxWidth = bounceBox.clientWidth;
    const boxHeight = bounceBox.clientHeight;

    eachWord.forEach((wordObj) => {
    if (wordObj.paused) return;
      // bounce vertically
      if (wordObj.y + wordObj.height >= boxHeight || wordObj.y <= 0) {
        wordObj.dirY *= -1;
      }

      // bounce horizontally
      if (wordObj.x + wordObj.width >= boxWidth || wordObj.x <= 0) {
        wordObj.dirX *= -1;
      }

      // move this word
      wordObj.x += wordObj.dirX * speed;
      wordObj.y += wordObj.dirY * speed;

      wordObj.word.style.left = wordObj.x + "px";
      wordObj.word.style.top = wordObj.y + "px";
    });

    window.requestAnimationFrame(animate);
  }

  window.requestAnimationFrame(animate);
});

  return (
  <main>
    <h1>Skills</h1>
    <div id="bounceBox">
        <div className="keywords"><h2>HTML5</h2></div>
        <div className="keywords"><h2>JavaScript</h2></div>
        <div className="keywords"><h2>Git</h2></div>
        <div className="keywords"><h2>React.js</h2></div>
        <div className="keywords"><h2>Figma</h2></div>
        <div className="keywords"><h2>Version Control</h2></div>
        <div className="keywords"><h2>Adobe Creative Suite</h2></div>
        <div className="keywords"><h2>REST API</h2></div>
        <div className="keywords"><h2>Visual Systems</h2></div>
        <div className="keywords"><h2>UX Principles</h2></div>
        <div className="keywords"><h2>a11y Focused Design</h2></div>
    </div>
    <Eyeball variant="skills" trackCursor />
    </main>);
}