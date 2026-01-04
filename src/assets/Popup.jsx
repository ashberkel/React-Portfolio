import "./Popup.css";

export default function Popup({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="popupOverlay" onClick={onClose}>
      <div className="popup" onClick={e => e.stopPropagation()}>
        <h1>{data.h1Pop}</h1>
        <h2>{data.h2Pop}</h2>
        <p>{data.pPop}</p>
      </div>
    </div>
  );
}