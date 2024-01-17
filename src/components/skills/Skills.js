import skills from "../../Images/project.png";
import HeadingContainer from "../heading container/HeadingContainer";
import SkillBar from "../skills graph/SkillsBar";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import js from "../../Images/js.png";
import tc from "../../Images/tailwind.png";
import react from "../../Images/react.png";
import { useTheme } from "../theme context/ThemeContext";

const Skills = () => {

    const {darkMode}=useTheme();

    return (
        <div className={`w-full h-screen ${darkMode ? "bg-black" : "bg-white"}`}>
            <div className="w-full pb-10">
                <HeadingContainer
                    src={skills}
                    text="Skills"
                    style="sticky top-0"
                />
                <SkillBar 
                    src={html}
                    percentage="95"
                    bgColor="bg-red-500"
                    text="text-white"
                    alt="HTML"
                />
                <SkillBar 
                    src={css}
                    percentage="90"
                    bgColor="bg-blue-600"
                    text="text-white"
                    alt="CSS"
                />
                <SkillBar 
                    src={tc}
                    percentage="75"
                    bgColor="bg-blue-300"
                    text="text-white"
                    alt="Tailwind CSS"
                />
                <SkillBar 
                    src={js}
                    percentage="85"
                    bgColor="bg-yellow-400"
                    text="text-black"
                    alt="JavaScript"
                />
                <SkillBar 
                    src={react}
                    percentage="75"
                    bgColor="bg-blue-400"
                    text="text-white"
                    alt="React JS"
                />
            </div>
        </div>
    );
}

export default Skills;