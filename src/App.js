import React from "react";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Work from "./pages/Work";
import Project01 from "./pages/Project1";
import Project02 from "./pages/Project2";
import Project03 from "./pages/Project3";
import Project04 from "./pages/Project4";
import Resume from "./components/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project01" element={<Project01 />} />
        <Route path="/project02" element={<Project02 />} />
        <Route path="/project03" element={<Project03 />} />
        <Route path="/project04" element={<Project04 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
