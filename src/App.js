import React from "react";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Work from "./pages/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Landing />
    // </div>
  );
}

export default App;
