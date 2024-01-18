import darkTheme from "../../Images/dark-theme.png";
import lightTheme from "../../Images/light-theme.png";
import { useTheme } from "../theme context/ThemeContext";

const Theme = () => {

    const { darkMode, changeMode } = useTheme();

    return (
        <button className={`w-8 h-8 flex items-center justify-center fixed top-2 right-2 rounded-full z-20 ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-200"} sm:mr-5 md:mr-14 lg:mr-24 xl:mr-36 2xl:mr-48 3xl:mr-60`} onClick={changeMode}>
            <img
                src={!darkMode ? darkTheme : lightTheme}
                alt="dark-theme"
                className={`w-5 h-5 ${darkMode ? "invert" : ""}`}>
            </img>
        </button>
    );
}

export default Theme;