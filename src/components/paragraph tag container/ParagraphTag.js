import { useTheme } from "../theme context/ThemeContext";

const ParagraphTag = (props) => {

    const {darkMode}=useTheme();

    return (
        <p className={`mx-1 my-1 text-lg ${darkMode ? "text-white" : "text-black"}`}>
            {props.children}
        </p>
    );
}

export default ParagraphTag;