import home from "../../Images/home.png";
import skills from '../../Images/project.png';
import portfolio from "../../Images/resume.png";
import contact from '../../Images/contact.png';
import Navlink from "../navlink container/Navlink";
import { useTheme } from "../theme context/ThemeContext";

const Navigation = () => {

    const {darkMode}=useTheme();

    return (
        <div>
            <footer className={`w-full h-10 fixed flex items-center justify-evenly bottom-0 rounded-t-2xl z-20 ${darkMode ? "bg-black" : "bg-white"}`}>

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