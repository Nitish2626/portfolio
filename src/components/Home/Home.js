import profile from "../../Images/profile_image.jpg";
import About from "../about me/About";
import SocialLinks from "../social links/SocialLinks";
import call from "../../Images/phone.png";
import gmail from "../../Images/gmail.png";
import linkedin from "../../Images/linkedin.png";
import github from "../../Images/github.png";
import home from "../../Images/home.png";
import Education from "../education/Education";
import HeadingContainer from "../heading container/HeadingContainer";

const Home = () => {
    return (
        <div className="w-full px-1 sm:px-5 md:px-16 lg:px-24 xl:px-36 2xl:px-48 3xl:px-60">
            <div className="w-full flex flex-col items-center justify-center gap-5">

                <HeadingContainer
                    src={home}
                    text="Home"
                    style="sticky top-0"
                />

                <section className="w-64 flex flex-col rounded-md py-2 px-1 mx-2 shadow-[1px_1px_10px_0px_grey]">

                    <img
                        src={profile}
                        className="w-32 h-32 border rounded-full mx-auto"
                        alt="Profile"
                    >
                    </img>
                    <h1 className="text-xl text-center">
                        Nitish Kumar Sharma
                    </h1>
                    <h2 className="text-lg text-blue-700 font-semibold text-center mb-2">
                        Frontend Developer
                    </h2>

                    <section className="w-full flex items-center justify-center">
                        <SocialLinks
                            src={call}
                            link="tel:8976520212"
                        />
                        <SocialLinks
                            src={gmail}
                            link="mailto:nk.sharma2626@gmail.com"
                        />
                        <SocialLinks
                            src={linkedin}
                            link="http://linkedin.com/in/nitish-sharma-9465ab252"
                        />
                        <SocialLinks
                            src={github}
                            link="http://github.com/Nitish2626"
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