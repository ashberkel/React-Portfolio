import "./about.css"

export default function About() {
  function numGen() {
  return Math.floor(Math.random() * 6);
}

let facts = ["and I still have my wisdom teeth.", "and I am a cat person.", "and I can't tie a cherry stem with my mouth.", "and The Neverhood is my favorite childhood game.", "and I was born in Misawa, Japan.", "and I own a melodica."];

const aboutMe = "How much<br />can one say in the<br />space of an eyeball? Ever<br />since I could hold a pencil,<br />the urge to create was there.<br />It evolved into a solid Graphic<br />Design career...but nowadays UX<br />and Software Engineering are my fixation. Basically, if I get to make something cool and impactful, I'm happiest. In my spare time, I enjoy video games, puzzles, hiking, studying ASL, and trying new<br />foods. Also, yes, I am a cat<br />person. If you also like<br /> cool and impactful<br />things, let's talk!<br />-Ash"

  return (
  <main>
    <h1>About Me</h1>
    <h2>{facts[numGen()]}</h2>
    </main>);
}