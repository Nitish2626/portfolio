import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About me/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About  />}></Route>
        <Route path="/contact" element={<Skills />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        {/* <Route path="/resume" element={<Experience />}></Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
