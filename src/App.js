import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import About from "./components/about me/About";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";
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
        <Route path="/skills" element={<About  />}></Route>
        <Route path="/portfolio" element={<Project />}></Route>
        <Route path="/contact" element={<Resume />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
