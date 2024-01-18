import skills from "../../Images/project.png";
import HeadingContainer from "../heading container/HeadingContainer";
import SkillBar from "../skills graph/SkillsBar";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import js from "../../Images/js.png";
import ts from "../../Images/typescript.png";
import tc from "../../Images/tailwind.png";
import react from "../../Images/react.png";
import nodejs from "../../Images/nodejs.png";
import expressjs from "../../Images/expressjs.png";
import mongodb from "../../Images/mongodb.png";
import mysql from "../../Images/mysql.png";
import { useTheme } from "../theme context/ThemeContext";

const Skills = () => {

    const {darkMode}=useTheme();

    return (
        <div className={`w-full h-screen ${darkMode ? "bg-black" : "bg-white"} sm:px-5 md:px-16 lg:px-24 xl:px-36 2xl:px-48 3xl:px-60`}>
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
                    src={ts}
                    percentage="50"
                    bgColor="bg-blue-600"
                    text="text-white"
                    alt="TypeScript"
                />
                <SkillBar 
                    src={react}
                    percentage="75"
                    bgColor="bg-blue-400"
                    text="text-white"
                    alt="React JS"
                />
                <SkillBar 
                    src={nodejs}
                    percentage="40"
                    bgColor="bg-green-700"
                    text="text-white"
                    alt="Node JS"
                />
                <SkillBar 
                    src={expressjs}
                    percentage="60"
                    bgColor="bg-yellow-900"
                    text="text-white"
                    alt="Express JS"
                />
                <SkillBar 
                    src={mongodb}
                    percentage="70"
                    bgColor="bg-green-600"
                    text="text-white"
                    alt="MongoDB"
                />
                <SkillBar 
                    src={mysql}
                    percentage="80"
                    bgColor="bg-yellow-300"
                    text="text-black"
                    alt="MySQL"
                />
            </div>
        </div>
    );
}

export default Skills;