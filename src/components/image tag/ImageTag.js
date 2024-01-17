import { useTheme } from "../theme context/ThemeContext";

const ImageTag = (props) => {

    const {darkMode}=useTheme();

    return (
        <img src={props.src} alt={props.alt} className={`w-6 h-6 ${darkMode ? `${props.style}` : ""}`}></img>
    );
}

export default ImageTag;