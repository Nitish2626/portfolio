import HeadingContainer from "../heading container/HeadingContainer";
import education from "../../Images/education.png";
import ParagraphTag from "../paragraph tag container/ParagraphTag";
import SpanTag from "../span tag container/SpanTag";
import { useTheme } from "../theme context/ThemeContext";

const Education = () => {

    const {darkMode}=useTheme();

    return (
        <div className={`w-full ${darkMode ? "bg-black" : "bg-white"} sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 3xl:px-2`}>
            <div className="w-full pb-10">
                <HeadingContainer
                    src={education}
                    text="Education"
                />

                <ParagraphTag>
                    Currently i am in 2<sup>nd</sup> year pursuing
                    <SpanTag>  BCA (Bachelor of Computer Application) </SpanTag>
                    from
                    <SpanTag>  YCMOU (Yashwantrao Chavan Maharashtra Open University).</SpanTag>
                </ParagraphTag>

                <ParagraphTag>
                    I have completed my
                    <SpanTag> Intermediate (10+2) </SpanTag>
                    in 2022 from
                    <SpanTag>  Maharashtra State Board </SpanTag>
                    and i have obtained
                    <SpanTag> 70% </SpanTag>
                    in
                    <SpanTag> Science (PCB) Stream </SpanTag>
                    with
                    <SpanTag> I.T (Information Technology) </SpanTag>
                    as an optional subject.
                </ParagraphTag>

                <ParagraphTag>
                    I have completed my
                    <SpanTag> SSC (10<sup>th</sup>) </SpanTag>
                    from
                    <SpanTag> Maharashtra State Board </SpanTag>
                    in 2020 and i have obtained
                    <SpanTag> 83% </SpanTag>
                    in it.
                </ParagraphTag>
            </div>
        </div >
    );
}

export default Education;