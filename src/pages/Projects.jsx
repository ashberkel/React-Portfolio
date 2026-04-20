import "./projects.css"
import Popup from "../assets/Popup"; 
import Eyeball from "../assets/Eyeball";
import { useState } from "react";

export default function Projects() {
  const galleryData = [
    { h1T: "Title1", h2T: "Sub1", pT: "Text1",
      imgT: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
      h1Pop: "Title1", h2Pop: "Sub1", pPop: "This is Project 1"},
    { h1T: "WE ARE STILL HUMANZ", h2T: "WIP", pT: "When Did This Virtual Band Feel The Most Alive? Measuring phases of Gorillaz by visual cues, media presence, and immersion strategies.",
      imgT: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
      h1Pop: "Title2", h2Pop: "Sub2", pPop: "This is Project 2"},
    { h1T: "Title3",
      h2T: "Sub3",
      pT: "Text3",
      imgT: "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
      h1Pop: "Title3",
      h2Pop: "Sub3",
      pPop:
      "This is Project 3"},
    { h1T: "Some Other Hand Than Mine",
      h2T: "HTML / CSS, JavaScript, JQuery, UX / UI Design, Game Logic, Art Direction",
      pT: "A love letter to my childhood ambitions of creating a scary point and click adventure game.",
      imgT: "src/assets/SOTHM-image.jpg",
      pPop1: "When I was younger, before I had any idea what I wanted to be when I got out of high school, I was making creative little projects in Flash and strived on being able to make a creepy point and click adventure with heavy Edgar Allen Poe theming. But as I really delved into it and learned what it took to create the guts of a project like that, it became daunting and I turned my focus to Graphic Design. All these years later while pursuing a degree in Computer Science, I wondered...was it too childish of me to finally fulfill that dream of mine?",
      pPop2: "I was finally learning what makes up the meat and flesh of how applications, web or otherwise, work to show something interactive. I figure the best way to test myseld and really explore my own knowledge as I grew throughout my college growth was to create something I'd have fun with. And even all grown up, I still love horror experiences. But rather than leaning towards Edgar Allen Poe, I instead imagined a sort of Lovecraftian Titanic story, with elements of other, more current inspirations such as SCP-3001, The Red Reality and Mouthwashing. ",
      pPop3: "Though it's only a demo, this project has everything that I was hoping for and more. There are sturdy bones here that could be fleshed out whenver I wanted, and it still looks and feels great with enough to feel cohesive and fulfilling enough. I think my teen self would be impressed and happy with this if I could go back and show them.",
      pPop4: "It's very possible to learn something new even when you're confident of your own skills. Looking back at the final product, I see much cleaner ways I could have optimized some of the code / functionality, but I didn't see these approaches at the beginning because of where I was in my learning. If I decided to move this from a demo to a fuller game, I'd definitely optimize it better.",
      link: "/SOTHM"}
  ];

  const [showPopup, setShowPopup] = useState(false);

  const [index, setIndex] = useState(0);
  const [eyeIndex, setEyeIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const BLINK_MS = 400;

function triggerAnimation() {
  setAnimate(false);
  requestAnimationFrame(() =>
    requestAnimationFrame(() => setAnimate(true))
  );
}

function galNext() {
  triggerAnimation();
  setIndex(prev => {
    const next = (prev + 1) % galleryData.length;
    setTimeout(() => {
      setEyeIndex(next);
    }, BLINK_MS);
    return next;
  });
}

function galPrev() {
  triggerAnimation();
  setIndex(prev => {
    const next = (prev - 1 + galleryData.length) % galleryData.length;
    setTimeout(() => {
      setEyeIndex(next);
    }, BLINK_MS);
    return next;
  });
}

  return (
    <div>
      <h1 id = "h1P" onClick={() => setShowPopup(true)} style={{ cursor: "zoom-in" }} key={index + "-h1"} className="fade">{galleryData[index].h1T}</h1>
      <div id="details">
      <h2 key={index + "-h2"} className="fade">{galleryData[index].h2T}</h2>
      <p key={index + "-p"} className="fade">{galleryData[index].pT}</p>
      </div>
      <div className = "eyeP" onClick={() => setShowPopup(true)} style={{ cursor: "zoom-in" }}><Eyeball
        variant="project"
        animate={animate}
        imgSrc={galleryData[eyeIndex].imgT}
      /></div>
      {showPopup && (
  <Popup
    data={galleryData[index]}
    onClose={() => setShowPopup(false)}
  />
)}
      <img onClick={galNext} className={`galNav ${animate ? "galNav--animate" : ""}`} src="src\assets\Arrow.svg" />
      <img onClick={galPrev} className={`galNav ${animate ? "galNav--animate" : ""}`} id="galNavPrev" src="src\assets\Arrow.svg" />
    </div>
  );
}