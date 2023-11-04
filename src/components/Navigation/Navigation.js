import home from "../../Images/home.png";
import about from '../../Images/about.png';
import project from '../../Images/project.png';
import contact from '../../Images/contact.png';
import resume from "../../Images/resume.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <footer className='w-full h-10 fixed bg-white flex items-center justify-evenly bottom-0 rounded-t-2xl'>

            <NavLink to="/" className="w-10 h-9 bg-white border rounded-full flex items-center justify-center" id="home1" title="Home">
                <img src={home} className="w-6 h-6" alt="home-icon"></img>
            </NavLink>

            <NavLink to="/about" className="w-10 h-9 bg-white border rounded-full flex items-center justify-center" id="education1" title="About Me">
                <img src={about} className="w-6 h-6" alt="about-icon"></img>
            </NavLink>

            <NavLink to="/contact" className="w-10 h-9 bg-whiteborder rounded-full flex items-center justify-center" id="skills1" title="Contact">
                <img src={contact} className="w-6 h-6" alt="contact-icon"></img>
            </NavLink>

            <NavLink to="/projects" className="w-10 h-9 bg-white border rounded-full flex items-center justify-center" id="experience1" title="Projects">
                <img src={project} className="w-6 h-6" alt="project-icon"></img>
            </NavLink>

            <NavLink to="/resume" className="w-10 h-9 bg-white border rounded-full flex items-center justify-center" id="experience1" title="Resume">
                <img src={resume} className="w-6 h-6" alt="resume-icon"></img>
            </NavLink>


        </footer>
    );
}
export default Navigation;