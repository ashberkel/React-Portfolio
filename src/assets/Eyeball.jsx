import { useEffect, useRef } from "react";
import "./Eyeball.css";

export default function Eyeball({
  variant = "home",
  animate,
  trackCursor,
  imgSrc,
}) {
  const wrapperRef = useRef(null);
  const pupilRef = useRef(null);

useEffect(() => {
  if (!trackCursor || !pupilRef.current || !wrapperRef.current) return;

  const svg = wrapperRef.current;
  const pupil = pupilRef.current;

  const eyeCenter = { x: 178, y: 269.5 }; // center based on your path math-ish
  const maxOffset =110; // how far pupil can move inside the eye

  let targetX = eyeCenter.x;
  let targetY = eyeCenter.y;
  let frameId = null;

  const clientToSvg = (clientX, clientY) => {
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svg.getScreenCTM();
    return ctm ? pt.matrixTransform(ctm.inverse()) : eyeCenter;
  };

  const onMove = (e) => {
    const p = clientToSvg(e.clientX, e.clientY);

    // vector from eye center to mouse (in SVG units)
    let dx = p.x - eyeCenter.x;
    let dy = p.y - eyeCenter.y;

    // clamp to a circle
    const dist = Math.hypot(dx, dy) || 1;
    if (dist > maxOffset) {
      const s = maxOffset / dist;
      dx *= s;
      dy *= s;
    }

    targetX = eyeCenter.x + dx;
    targetY = eyeCenter.y + dy;
  };

  // measure pupil's original center so "centered" means centered
  const bb = pupil.getBBox();
  const pupilCenter0 = { x: bb.x + bb.width / 2, y: bb.y + bb.height / 2 };

  const tick = () => {
    const tx = targetX - pupilCenter0.x;
    const ty = targetY - pupilCenter0.y;
    pupil.style.transform = `translate(${tx}px, ${ty}px)`;
    frameId = requestAnimationFrame(tick);
  };

  window.addEventListener("mousemove", onMove);
  frameId = requestAnimationFrame(tick);

  return () => {
    window.removeEventListener("mousemove", onMove);
    if (frameId) cancelAnimationFrame(frameId);
  };
}, [trackCursor]);

  return (
    <main>
      <div
        className={`eyeball eyeball--${variant} ${
          animate ? "eyeball--replay" : ""
        }`}
      >
        <svg
          ref={wrapperRef}
          id="eyeball"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="eyeClip">
              {/* reuse the same eyeball path shape */}
              <path d="M178 1C226.711 1 270.936 30.8939 303.03 79.4863C335.119 128.071 355 195.248 355 269.5C355 343.752 335.119 410.929 303.03 459.514C270.936 508.106 226.711 538 178 538C129.289 538 85.0642 508.106 52.9697 459.514C20.8806 410.929 1 343.752 1 269.5C1 195.248 20.8806 128.071 52.9697 79.4863C85.0642 30.8939 129.289 1 178 1Z" />
            </clipPath>
          </defs>

          {/* eyeball base */}
          <path
            d="M178 1C226.711 1 270.936 30.8939 303.03 79.4863C335.119 128.071 355 195.248 355 269.5C355 343.752 335.119 410.929 303.03 459.514C270.936 508.106 226.711 538 178 538C129.289 538 85.0642 508.106 52.9697 459.514C20.8806 410.929 1 343.752 1 269.5C1 195.248 20.8806 128.071 52.9697 79.4863C85.0642 30.8939 129.289 1 178 1Z"
            fill="white"
          />

          {/* clipped image inside eye */}
          {imgSrc && (
            <image
              href={imgSrc}
              height="100%"
              clipPath="url(#eyeClip)"
              preserveAspectRatio="xMidYMid slice"
            />
          )}

          {/* pupil that tracks the cursor */}
          <path
            id="pupil"
            ref={pupilRef}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M71.8224 30.42C71.8224 41.0636 66.2908 50.4269 57.9191 55.8413C80.7281 55.8413 89.9781 78.104 89.9781 96.0447C89.9781 120.321 70.1152 140.001 45.614 140.001L29.9929 140.001C13.4282 140.001 -2.84226e-05 126.697 -2.77053e-05 110.285L-2.55403e-05 60.7555L-2.51614e-05 52.0889L-2.44326e-05 35.416C-2.35797e-05 15.9023 15.9658 0.0830056 35.6606 0.0830057L41.2049 0.0830057C58.1146 0.0830058 71.8224 13.6651 71.8224 30.42Z"
          />

          <rect id="lid-top" x="0" y="0" width="356" height="670" />
          <rect id="lid-bottom" x="0" y="0" width="356" height="670" />

          {/* outline */}
          <path
            d="M178 1C226.711 1 270.936 30.8939 303.03 79.4863C335.119 128.071 355 195.248 355 269.5C355 343.752 335.119 410.929 303.03 459.514C270.936 508.106 226.711 538 178 538C129.289 538 85.0642 508.106 52.9697 459.514C20.8806 410.929 1 343.752 1 269.5C1 195.248 20.8806 128.071 52.9697 79.4863C85.0642 30.8939 129.289 1 178 1Z"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>
    </main>
  );
}
