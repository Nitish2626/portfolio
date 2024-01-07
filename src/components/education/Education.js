import HeadingContainer from "../heading container/HeadingContainer";
import education from "../../Images/education.png";
import ParagraphTag from "../paragraph tag container/ParagraphTag";
import SpanTag from "../span tag container/SpanTag";

const Education = () => {
    return (
        <div className="sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 3xl:px-2">
            <div className="w-full pb-10">
                <HeadingContainer
                    src={education}
                    text="Education"
                />

                <ParagraphTag
                    text={<>
                        Currently i am in 2<sup>nd</sup> year pursuing
                        <SpanTag text=" BCA (Bachelor of Computer Application) " /> from
                        <SpanTag text=" YCMOU (Yashwantrao Chavan Maharashtra Open University)." />
                    </>}
                />

                <ParagraphTag
                    text={<>
                        I have completed my
                        <SpanTag text=" Intermediate (10+2) " />
                        in 2022 from
                        <SpanTag text=" Maharashtra State Board " />
                        and i have obtained
                        <SpanTag text=" 70% " />
                        in
                        <SpanTag text=" Science (PCB) Stream " />
                        with
                        <SpanTag text=" I.T (Information Technology) " />
                        as an optional subject.
                    </>}
                />

                <ParagraphTag
                    text={<>
                        I have completed my
                        <SpanTag text={<> SSC (10<sup>th</sup>) </>} />
                        from
                        <SpanTag text=" Maharashtra State Board " />
                        in 2020 and i have obtained
                        <SpanTag text=" 83% " />
                        in it.
                    </>}
                />
            </div>
        </div>
    );
}

export default Education;