import { Link } from "react-router-dom";
import { useTheme } from "../theme context/ThemeContext";

const SocialLinks = (props) => {

    const {darkMode}=useTheme();

    return (
        <Link to={props.link} className={`w-10 h-10 flex items-center justify-center relative rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-200"}`} target="blank">
            <img src={props.src} className={`${props.size ? props.size : "w-5 h-5"} ${darkMode ? props.style : ""}`} alt="Social links"></img>
        </Link>
    );
}

export default SocialLinks;