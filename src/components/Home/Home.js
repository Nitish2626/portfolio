import home from "../../Images/home.png";
import profile from "../../Images/profile.jpg";
import About from "../About me/About";
import Contact from "../Contact/Contact";
import Project from "../Projects/Project";
import Resume from "../Resume/Resume";

const Home = () => {
    return (
        <div className="w-full h-full sm:px-5 md:px-16 lg:px-24 xl:px-36 2xl:px-48 3xl:px-60">
            <div className="w-full h-full">

                <section className="flex items-center px-2 py-2 sticky top-0 bg-white">

                    <img src={home} className="w-5 h-5"></img>

                    <h1 className="mx-2 text-xl">Home</h1>

                </section>

                <section className="flex flex-col items-center justify-center rounded-md py-1 mx-2 shadow-[1px_1px_10px_0px_grey] mb-5">

                    <img src={profile} className="w-32 h-40 border rounded-full"></img>
                    <h1 className="text-xl">Nitish Kumar Sharma</h1>
                    <h2 className="text-lg text-blue-700 font-semibold">Frontend Developer</h2>

                </section>

                <About />
                <Contact />
                <Project />
                <Resume />

            </div>
        </div>
    );
}
export default Home;