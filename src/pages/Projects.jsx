import "./projects.css"
import Popup from "../assets/Popup"; 
import Eyeball from "../assets/Eyeball";
import { useState } from "react";

export default function Projects() {
  const galleryData = [
    { h1T: "Title1", h2T: "Sub1", pT: "Text1",
      imgT: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
      h1Pop: "Title1", h2Pop: "Sub1", pPop: "This is Project 1"},
    { h1T: "Title2", h2T: "Sub2", pT: "Text2",
      imgT: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
      h1Pop: "Title2", h2Pop: "Sub2", pPop: "This is Project 2"},
    { h1T: "Title3", h2T: "Sub3", pT: "Text3",
      imgT: "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
      h1Pop: "Title3", h2Pop: "Sub3", pPop: "This is Project 3"},
    { h1T: "Title4", h2T: "Sub4", pT: "Text4",
      imgT: "https://a-z-animals.com/media/2025/06/shutterstock-2414948153-huge-licensed-scaled.jpg",
      h1Pop: "Title4", h2Pop: "Sub4", pPop: "This is Project 4"}
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
      <h1 key={index + "-h1"} className="fade">{galleryData[index].h1T}</h1>
      <h2 key={index + "-h2"} className="fade">{galleryData[index].h2T}</h2>
      <p key={index + "-p"} className="fade">{galleryData[index].pT}</p>
      <div onClick={() => setShowPopup(true)} style={{ cursor: "zoom-in" }}><Eyeball
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
      <img onClick={galNext} className={`galNav ${animate ? "galNav--animate" : ""}`} src="src/assets/Arrow.svg" />
      <img onClick={galPrev} className={`galNav ${animate ? "galNav--animate" : ""}`} id="galNavPrev" src="src/assets/Arrow.svg" />
    </div>
  );
}