import "./PopupMobile.css";
import { useEffect, useState } from "react";

export default function PopupMobile({ data, onClose }) {
  const [closing, setClosing] = useState(false);
  
  useEffect(() => {
    if (data) setClosing(false);
  }, [data]);

  if (!data) return null;

  const handleClose = () => setClosing(true);

  return (
    <div
      className={`popupOverlay ${closing ? "fadeOut" : "fadeIn"}`}
      onAnimationEnd={() => {
        if (closing) onClose();
      }}
    >
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <p id="exit" onClick={handleClose}>CLOSE</p>
        <div id="colLeft">
          <a id="demo" href={data.link} target="_blank">Click Here For Live Demo!</a>
          <h2>The Big Question</h2>
          <p>{data.pPop1}</p>
          <h2>How I Thought About It</h2>
          <p>{data.pPop2}</p>
          <h2>The Answer</h2>
          <p>{data.pPop3}</p>
          <h2>Takeaways</h2>
          <p>{data.pPop4}</p>
        </div>
        <div id="colRight"><img src={data.img2} /></div>
      </div>

    </div>

  );
}