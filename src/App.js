import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Project from "./components/projects/Project";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Theme from "./components/theme/Theme";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Theme />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/portfolio" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
