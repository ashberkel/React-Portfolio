import "./Popup.css";
import { useEffect, useState } from "react";

export default function Popup({ data, onClose }) {
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
        <h1>{data.h1Pop}</h1>
        <h2>{data.h2Pop}</h2>
        <p>{data.pPop}</p>
      
      </div>
      
    </div>
    
  );
}