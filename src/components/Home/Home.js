import profile from "../../Images/profile_image.jpg";
import About from "../about me/About";
import SocialLinks from "../social links/SocialLinks";
import call from "../../Images/phone.png";
import gmail from "../../Images/gmail.png";
import linkedin from "../../Images/linkedin.png";
import github from "../../Images/github.png";
import home from "../../Images/home.png";
import Education from "../education/Education";
import download from "../../Images/download.png";
import HeadingContainer from "../heading container/HeadingContainer";
import { useTheme } from "../theme context/ThemeContext";

const Home = () => {

    const {darkMode}=useTheme();

    return (
        <div className={`w-full h-screen ${darkMode ? "bg-black" : ""} sm:px-5 md:px-16 lg:px-24 xl:px-36 2xl:px-48 3xl:px-60`}>
            <div className="w-full flex flex-col items-center justify-center gap-5">

                <HeadingContainer
                    src={home}
                    text="Home"
                    style="sticky top-0"
                />

                <section className={`w-64 flex flex-col rounded-md py-2 px-1 mx-2 ${darkMode ? "shadow-inner shadow-gray-400" : "shadow-inner shadow-gray-400"}`}>

                    <img
                        src={profile}
                        className="w-32 h-32 border rounded-full mx-auto"
                        alt="Profile"
                    >
                    </img>
                    <h1 className={`text-xl text-center ${darkMode ? "text-white" : "text-black"}`}>
                        Nitish Kumar Sharma
                    </h1>
                    <h2 className={`text-lg font-semibold text-center mb-2 ${darkMode ? "text-blue-400" : "text-blue-700"}`}>
                        Full Stack Developer
                    </h2>

                    <section className="w-full flex items-center justify-center">
                        <SocialLinks
                            src={call}
                            link="tel:8976520212"
                            title="Phone Number"
                        />
                        <SocialLinks
                            src={gmail}
                            link="mailto:nk.sharma2626@gmail.com"
                            title="Gmail Id"
                        />
                        <SocialLinks
                            src={linkedin}
                            link="http://linkedin.com/in/nitish-sharma-9465ab252"
                            title="Linkedin Id"
                        />
                        <SocialLinks
                            src={github}
                            link="http://github.com/Nitish2626"
                            style="invert"
                            title="GitHub Id"
                        />
                        <SocialLinks
                            src={download}
                            link="https://drive.google.com/file/d/1CuZQeUPoX4wr5gHtXv1sgeDci7mhuwnk/view?usp=drive_link"
                            style="invert"
                            title="Download Resume"
                        />
                    </section>

                </section>

                <About />
                <Education />
            </div>
        </div>
    );
}
export default Home;