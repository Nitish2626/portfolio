import about from "../../Images/about.png";
import HeadingContainer from "../heading container/HeadingContainer";
import ParagraphTag from "../paragraph tag container/ParagraphTag";
import SpanTag from "../span tag container/SpanTag";

const About = () => {

    return (
        <div className="sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 3xl:px-2">
            <div className="w-full">

                {/* <section className="flex items-center px-2 py-2 sticky top-0 bg-white">

                    <img src={about} className="w-6 h-6"></img>

                    <h1 className="mx-2 text-xl">About Me</h1>

                </section> */}
                <HeadingContainer 
                    src={about}
                    text=""
                />

                <ParagraphTag 
                    text={<>My name is <SpanTag text="Nitish Kumar Sharma" /> and i am <SpanTag text="Full Stack Developer" /> with profound knowledge of <SpanTag text="HTML5, CSS3, Tailwind CSS, JAVASCRIPT, TYPESCRIPT, REACT JS, NODE JS, EXPRESS JS, MONGODB, MYSQL, GIT, GitHub" /></>}
                />

                <ParagraphTag 
                    text={<>I am very <SpanTag text="passionate developer in Full Stack Web Technologies" /> and always try to learn from building things.</>}
                />

                <p className="mx-1 my-2 text-lg">
                    Currently i am pursuing <span className="text-blue-700">BCA (Bachelor of Computer Application)</span> from <span className="text-blue-700">YCMOU (Yashwantrao Chavan Maharashtra Open University) in 2022</span>, now i am in 2<sup>nd</sup> year
                </p>

                <p className="mx-1 my-2 text-lg">
                    I have completed my <span className="text-blue-700">Intermediate (10+2)</span> in 2022 from <span className="text-blue-700">Maharashtra State Board</span> and i have obtained <span className="text-blue-700">70%</span> in <span className="text-blue-700">Science (PCB) Stream</span> with <span className="text-blue-700">I.T (Information Technology)</span> as an optional subject.
                </p>

                <p className="mx-1 my-2 text-lg">
                    I have completed my <span className="text-blue-700">SSC (10<sup>th</sup>)</span> from <span className="text-blue-700">Maharashtra State Board</span> and i have obtained <span className="text-blue-700">83%</span> in it.
                </p>

            </div>
        </div>
    );
}
export default About;