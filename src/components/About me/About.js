import about from "../../Images/about.png";
import HeadingContainer from "../heading container/HeadingContainer";
import ParagraphTag from "../paragraph tag container/ParagraphTag";
import SpanTag from "../span tag container/SpanTag";
import { useTheme } from "../theme context/ThemeContext";

const About = () => {

    const {darkMode}=useTheme();

    return (
        <div className={`w-full  ${darkMode ? "bg-black" : "bg-white"} sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 3xl:px-2`}>
            <div className="w-full">

                <HeadingContainer
                    src={about}
                    text="About Me"
                />

                <ParagraphTag>
                    My name is
                    <SpanTag>  Nitish Kumar Sharma </SpanTag>
                    and i am
                    <SpanTag> Full Stack Developer </SpanTag> 
                    with profound knowledge of
                    <SpanTag>  HTML5, CSS3, Tailwind CSS, JAVASCRIPT, TYPESCRIPT, REACT JS, NODE JS, EXPRESS JS, MONGODB, MYSQL, GIT, GitHub.</SpanTag>
                </ParagraphTag>

                <ParagraphTag>
                    I am very
                    <SpanTag> passionate developer </SpanTag>
                    and always try to learn from building things.
                </ParagraphTag>
            </div>
        </div>
    );
}
export default About;