import { useTheme } from "../theme context/ThemeContext";

const SpanTag = (props) => {

    const {darkMode}=useTheme();

    return ( 
        <span className={`${darkMode ? "text-blue-400" : "text-blue-700"} `}>
            {props.children}
        </span>
    );
}
 
export default SpanTag;