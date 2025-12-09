import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import './index.css';

export default function App() {
  const [accent, setAccent] = useState("#000000");

    useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);
  
  return (
    <BrowserRouter>
      {/* Navigation */}
      <div className="App">
      <nav id="top-right">
          <Link onClick={() => setAccent("#000000")} to="/">Home</Link>|
          <Link onClick={() => setAccent("#3c16d4")} to="/projects">Projects</Link>|
          <Link onClick={() => setAccent("#e71075")} to="/about">About</Link>
      </nav>
      <nav id="bottom-right">
        <a href ="https://www.linkedin.com/in/ashleeberkel" target="_blank">LinkedIn</a>| 
        <a href ="https://bsky.app/profile/abcreates.bsky.social" target="_blank"> Bluesky</a>|
        <a href ="mailto:ashberkel@gmail.com">Email</a> 
        </nav>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
          </div>
    </BrowserRouter>
  );
}