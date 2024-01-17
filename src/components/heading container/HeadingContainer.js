import { useTheme } from "../theme context/ThemeContext";

const HeadingContainer = (props) => {

    const {darkMode}=useTheme();

    return (
        <section className={`w-full h-11 flex items-center px-2 py-2 ${props.style} z-10 ${darkMode ? "bg-black" : "bg-white"}`}>

            <img src={props.src} className={`w-6 h-6 ${darkMode ? "invert" : ""}`} alt="Heading icon"></img>
            <h1 className={`mx-2 text-xl ${darkMode ? "text-white": ""}`}>
                {props.text}
            </h1>

        </section>
    );
}

export default HeadingContainer;