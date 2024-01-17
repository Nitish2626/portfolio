import darkTheme from "../../Images/dark-theme.png";
import lightTheme from "../../Images/light-theme.png";
import { useTheme } from "../theme context/ThemeContext";

const Theme = () => {

    const { darkMode, changeMode } = useTheme();

    return (
        <div className="sm:px-5 md:px-16 lg:px-24 xl:px-36 2xl:px-48 3xl:px-96">
            <button className={`w-8 h-8 flex items-center justify-center fixed top-2 right-0 rounded-full z-20 hover:bg-slate-200 ${darkMode ? "hover:bg-gray-700" : ""}`} onClick={changeMode}>
                <img
                    src={!darkMode ? darkTheme : lightTheme}
                    alt="dark-theme"
                    className={`w-5 h-5 ${darkMode ? "invert" : ""}`}>
                </img>
            </button>
        </div>
    );
}

export default Theme;