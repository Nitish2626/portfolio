import { NavLink } from "react-router-dom";
import { useTheme } from "../theme context/ThemeContext";

const Navlink = (props) => {

    const {darkMode}=useTheme();

    return (
        <NavLink to={props.to} className={`w-10 h-9 ${darkMode ? "bg-gray-700 shadow-inner shadow-white" : "bg-white"} rounded-full flex items-center justify-center`} title={props.title}>
            <img src={props.src} className={`w-6 h-6 ${darkMode ? "invert" : ""}`} alt={props.title}></img>
        </NavLink>
    );
}

export default Navlink;