import { useTheme } from "../theme context/ThemeContext";

const ProjectContainer = (props) => {

    const {darkMode}=useTheme();

    return (
        <section className={`w-full relative px-2 py-1 rounded-lg mt-2 mb-8  before:w-full ${darkMode ? "text-white shadow-inner hover:shadow-gray-400" : "shadow-inner hover:shadow-gray-400"} ${props.backgroundImage} before:bg-contain before:absolute before:bg-no-repeat before:rounded-lg before:top-0 before:left-0 before:right-0 before:bottom-0 before:opacity-30 before:bg-center`}>
            {props.children}
        </section>
    );
}

export default ProjectContainer;