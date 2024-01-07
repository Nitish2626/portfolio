import about from "../../Images/about.png";
import HeadingContainer from "../heading container/HeadingContainer";
import ParagraphTag from "../paragraph tag container/ParagraphTag";
import SpanTag from "../span tag container/SpanTag";

const About = () => {

    return (
        <div className="sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 3xl:px-2">
            <div className="w-full">

                <HeadingContainer
                    src={about}
                    text="About Me"
                />

                <ParagraphTag
                    text={<>
                        My name is
                        <SpanTag text=" Nitish Kumar Sharma " />
                        and i am
                        <SpanTag text=" Full Stack Developer " />
                        with profound knowledge of
                        <SpanTag text=" HTML5, CSS3, Tailwind CSS, JAVASCRIPT, TYPESCRIPT, REACT JS, NODE JS, EXPRESS JS, MONGODB, MYSQL, GIT, GitHub." />
                    </>}
                />

                <ParagraphTag
                    text={<>
                        I am very 
                        <SpanTag text=" passionate developer in Full Stack Web Technologies " /> 
                        and always try to learn from building things.
                    </>}
                />                
            </div>
        </div>
    );
}
export default About;