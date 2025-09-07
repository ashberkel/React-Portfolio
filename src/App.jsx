function numGen() {
  return Math.floor(Math.random() * 6);
}

let facts = ["and I still have my wisdom teeth.", "and I am a cat person.", "and I can't tie a cherry stem with my mouth.", "and The Neverhood is my favorite childhood game.", "and I was born in Misawa, Japan.", "and I own a melodica."];

const aboutMe = "How much<br />can one say in the<br />space of an eyeball? Ever<br />since I could hold a pencil,<br />the urge to create was there.<br />It evolved into a solid Graphic<br />Design career...but nowadays UX<br />and Software Engineering are my fixation. Basically, if I get to make something cool and impactful, I'm happiest. In my spare time, I enjoy video games, puzzles, hiking, studying ASL, and trying new<br />foods. Also, yes, I am a cat<br />person. If you also like<br /> cool and impactful<br />things, let's talk!<br />-Ash"

function App() {
  return (
    <div className="App">
      <div id="top-left"></div>
      <div id="top-right">
        <a href="">About</a>
      </div>
      {/* <h1>I'm  AshLee.</h1>
      <h2>{facts[numGen()]}</h2> */}
      <h1>Colorado<span id="smaller">.</span>gov</h1>
      <h2>WEB DESIGN | UX | ART DIRECTION</h2>
      <p>A rehaul of the site for the state of Colorado.<br />I wanted to bring in a sense of modern, innovative fun.</p>
      {/* <h1 class="textShake">DESIGNER <span id="smaller">&</span><br />DEVELOPER .</h1> */}
      <svg id="eyeball" width="356" height="539" viewBox="0 0 356 539" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M178 1C226.711 1 270.936 30.8939 303.03 79.4863C335.119 128.071 355 195.248 355 269.5C355 343.752 335.119 410.929 303.03 459.514C270.936 508.106 226.711 538 178 538C129.289 538 85.0642 508.106 52.9697 459.514C20.8806 410.929 1 343.752 1 269.5C1 195.248 20.8806 128.071 52.9697 79.4863C85.0642 30.8939 129.289 1 178 1Z" fill="white"/>
      <path id="pupil" fill-rule="evenodd" clip-rule="evenodd" d="M71.8224 30.42C71.8224 41.0636 66.2908 50.4269 57.9191 55.8413C80.7281 55.8413 89.9781 78.104 89.9781 96.0447C89.9781 120.321 70.1152 140.001 45.614 140.001L29.9929 140.001C13.4282 140.001 -2.84226e-05 126.697 -2.77053e-05 110.285L-2.55403e-05 60.7555L-2.51614e-05 52.0889L-2.44326e-05 35.416C-2.35797e-05 15.9023 15.9658 0.0830056 35.6606 0.0830057L41.2049 0.0830057C58.1146 0.0830058 71.8224 13.6651 71.8224 30.42Z"/>
      <rect id="lid-top" x="0" y="0" width="356" height="670"/>
      <rect id="lid-bottom" x="0" y="0" width="356" height="670"/>  
      <path d="M178 1C226.711 1 270.936 30.8939 303.03 79.4863C335.119 128.071 355 195.248 355 269.5C355 343.752 335.119 410.929 303.03 459.514C270.936 508.106 226.711 538 178 538C129.289 538 85.0642 508.106 52.9697 459.514C20.8806 410.929 1 343.752 1 269.5C1 195.248 20.8806 128.071 52.9697 79.4863C85.0642 30.8939 129.289 1 178 1Z" stroke="white" stroke-width="4"/>
      </svg>
    </div>
  );
}

export default App;