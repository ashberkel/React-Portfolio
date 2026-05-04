import "./projects.css"
import GalleryData from "../assets/GalleryData";
import PopupFull from "../assets/PopupFull";
import Eyeball from "../assets/Eyeball";
import { useState } from "react";

export default function Projects({ setAccent }) {

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
      const next = (prev + 1) % GalleryData.length;
      setTimeout(() => {
        setEyeIndex(next);
      }, BLINK_MS);
      return next;
    });
  }

  function galPrev() {
    triggerAnimation();
    setIndex(prev => {
      const next = (prev - 1 + GalleryData.length) % GalleryData.length;
      setTimeout(() => {
        setEyeIndex(next);
      }, BLINK_MS);
      return next;
    });
  }

  return (
    <main>
      <h1 id="h1P" onClick={() => setShowPopup(true)} style={{ cursor: "zoom-in" }} key={index + "-h1"} className="fade">{GalleryData[index].h1T}</h1>
        <br />
        <div className="galNavigation">
        <h1 onClick={galPrev} className={`galNav ${animate ? "galNav--animate" : ""}`} id="galNavPrev">PREV</h1>
        <p>  |  </p>
        <h1 onClick={galNext} className={`galNav ${animate ? "galNav--animate" : ""}`}>NEXT</h1>
      </div>
      <div id="details">
        <h2 key={index + "-h2"} className="fade">{GalleryData[index].h2T}</h2>
        <p key={index + "-p"} className="fade">{GalleryData[index].pT}</p>
      </div>
      <div className="eyeP" onClick={() => setShowPopup(true)} style={{ cursor: "zoom-in" }}><Eyeball
        variant="project"
        animate={animate}
        imgSrc={GalleryData[eyeIndex].imgT}
      /></div>
      {showPopup && (
        <PopupFull
          data={GalleryData[index]}
          onClose={() => setShowPopup(false)}
        />
      )}

    </main>
  );
}