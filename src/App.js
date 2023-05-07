import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NightToggler from "./hooks/NightToggler";
import Layout from "./Layout";
import Contact from "./components/Contact";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";
function App() {
  const night = NightToggler();
  const [display, setDisplay] = useState({
    backgroundColor: "white",
    color: "black",
  });
  useEffect(() => {
    if (night) {
      document.querySelector("ul li a ").style.color = "white";
      document.querySelector(".spinner").style.backgroundColor = "white";
      document.querySelector(".horizontal").style.backgroundColor = "white";
      document.querySelector(".part-2").style.backgroundColor = "white";
      setDisplay({
        color: "white",
        backgroundPosition: "center",
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        animation: "animate 60s ease-in-out infinite",
        transition: "all 9s ease-in-out",
      });
    }
  }, [night]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout bodyStyle={display} />}>
          <Route index element={<Home />}></Route>
          <Route exact path="contact" element={<Contact />}></Route>
          <Route exact path="Bio" element={<Bio />}></Route>
          <Route exact path="Skills" element={<Skills />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
