import profile from "../../Images/profile_image.jpg";
import About from "../about me/About";
import darkTheme from "../../Images/dark-theme.png";
import SocialLinks from "../social links/SocialLinks";
import call from "../../Images/phone.png";
import gmail from "../../Images/gmail.png";
import linkedin from "../../Images/linkedin.png";
import github from "../../Images/github.png";
import home from "../../Images/home.png";

const Home = () => {
    return (
        <div className="w-full px-1 sm:px-5 md:px-16 lg:px-24 xl:px-36 2xl:px-48 3xl:px-60">
            <div className="w-full flex flex-col items-center justify-center gap-5">

                <section className="w-full flex items-center px-2 py-2 sticky top-0 bg-white">

                    <img src={home} className="w-6 h-6"></img>

                    <h1 className="mx-2 text-xl">Home</h1>

                </section>

                <section className="flex items-center px-2 fixed right-0 top-2 z-10">
                    <img src={darkTheme} alt="dark-theme" className="w-5 h-5"></img>
                </section>

                <section className="w-64 flex flex-col rounded-md py-2 px-1 mx-2 shadow-[1px_1px_10px_0px_grey]">

                    <img
                        src={profile}
                        className="w-32 h-32 border rounded-full mx-auto"
                    >
                    </img>
                    <h1 className="text-xl text-center">
                        Nitish Kumar Sharma
                    </h1>
                    <h2 className="text-lg text-blue-700 font-semibold text-center mb-2">
                        Full Stack Developer
                    </h2>

                    <SocialLinks
                        src={call}
                        link="tel:8976520212"
                        text="8976520212"
                    />
                    <SocialLinks
                        src={gmail}
                        link="mailto:nk.sharma2626@gmail.com"
                        text="nk.sharma2626@gmail.com"
                    />
                    <SocialLinks
                        src={linkedin}
                        link="http://linkedin.com/in/nitish-sharma-9465ab252"
                        text="Nitish Sharma"
                    />
                    <SocialLinks
                        src={github}
                        link="http://github.com/Nitish2626"
                        text="Nitish Kumar Sharma"
                    />

                </section>

                <About />
                {/* <Project />
                <Resume /> */}

            </div>
        </div>
    );
}
export default Home;