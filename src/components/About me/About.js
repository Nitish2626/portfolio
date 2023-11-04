import about from "../../Images/about.png";

const About = () => {

    return (
        <div className="w-full h-full pb-20">

            <section className="flex items-center px-2 py-2 sticky top-0 bg-white">

                <img src={about} className="w-7 h-7"></img>

                <h1 className="mx-2 text-xl">About Me</h1>

            </section>

            <p className="mx-1 my-2">
                My name is <strong>Nitish Kumar Sharma</strong> and i am <strong>Frontend Developer</strong> with profound knowledge of <strong>HTML5, CSS3, JAVASCRIPT, Tailwind CSS and REACT JS</strong>. Now, I am learning how to make <strong>Backend Technologies using NODE JS and EXPRESS JS</strong> and vision is to learn all <strong>Full Stack Technologies</strong>.
            </p>

            <p className="mx-1 my-2">
                I am a very <strong>passionate developer</strong> and always try to learn and understand things to become better and <strong>build better</strong>.
            </p>

            <p className="mx-1 my-2">
                Currently i am pursuing <strong>BCA (Bachelor of Computer Application)</strong> from <strong>YCMOU (Yashwantrao Chavan Maharashtra Open University) in 2022</strong>, now i am in 2<sup>nd</sup> year
            </p>

            <p className="mx-1 my-2">
                I have completed my <strong>Intermediate (10+2)</strong> in 2022 from <strong>Maharashtra State Board</strong> and i have obtained <strong>70%</strong> in <strong>Science (PCB) Stream</strong> with <strong>I.T (Information Technology)</strong> as an optional subject.
            </p>

            <p className="mx-1 my-2">
                I have completed my <strong>SSC (10<sup>th</sup>)</strong> from <strong>Maharashtra State Board</strong> and i have obtained <strong>83%</strong> in it.
            </p>

        </div>
    );
}
export default About;