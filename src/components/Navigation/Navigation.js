import home from "../../Images/home.png";
import skills from '../../Images/project.png';
import portfolio from "../../Images/resume.png";
import contact from '../../Images/contact.png';
import { NavLink } from "react-router-dom";
import Navlink from "../navlink container/Navlink";

const Navigation = () => {

    return (
        <div>
            <footer className='w-full h-10 fixed bg-white flex items-center justify-evenly bottom-0 rounded-t-2xl z-10'>

                <Navlink 
                    to="/"
                    src={home}
                    title="Home"
                />

                <Navlink 
                    to="/skills"
                    src={skills}
                    title="Skills"
                />

                <Navlink 
                    to="/portfolio"
                    src={portfolio}
                    title="Portfolio"
                />

                <Navlink 
                    to="/contact"
                    src={contact}
                    title="Contact"
                />

            </footer>
        </div>
    );
}
export default Navigation;