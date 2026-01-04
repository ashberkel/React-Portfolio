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
    if (!trackCursor) return; // only do this for skills

function handleMove(e) {
  if (!wrapperRef.current || !pupilRef.current) return;

  const rect = wrapperRef.current.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // vector from eye center to mouse
  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;

  // how far the pupil is allowed to move, in pixels
  const maxOffset = 70; // try 50–80 and adjust

  const dist = Math.hypot(dx, dy) || 1;

  // start with “follow exactly”
  let offsetX = dx;
  let offsetY = dy;

  // if mouse is farther away than the leash, clamp to a circle
  if (dist > maxOffset) {
    const scale = maxOffset / dist;
    offsetX *= scale;
    offsetY *= scale;
  }

  // optional base offset if the pupil isn't visually centered
  const baseX = 150; // tweak like +5 or -10 etc.
  const baseY = 200;

  pupilRef.current.style.transform =
    `translate(${baseX + offsetX}px, ${baseY + offsetY}px)`;
}

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [trackCursor]);

  return (
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
  );
}
