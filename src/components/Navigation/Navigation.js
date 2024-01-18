import home from "../../Images/home.png";
import skills from '../../Images/project.png';
import projects from "../../Images/resume.png";
import contact from '../../Images/contact.png';
import Navlink from "../navlink container/Navlink";
import { useTheme } from "../theme context/ThemeContext";

const Navigation = () => {

    const { darkMode } = useTheme();

    return (
        <div className={`w-full h-10 flex items-center justify-center fixed bottom-0 z-20 ${darkMode ? "bg-black" : "bg-white"}`}>
            <footer className={`w-full h-10 fixed flex items-center justify-evenly bottom-0 rounded-t-2xl z-20 ${darkMode ? "bg-black" : "bg-white"} sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5`}>

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
                    to="/projects"
                    src={projects}
                    title="Projects"
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