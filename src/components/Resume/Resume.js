import resume from "../../Images/resume.png";
import gmail from "../../Images/gmail.png";
import linkedin from "../../Images/linkedin.png";
import github from "../../Images/github.png";
import call from "../../Images/phone.png";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import js from "../../Images/js.png";
import tc from "../../Images/tailwind.png";
import react from "../../Images/react.png";
import git from "../../Images/git.png";
import mongodb from "../../Images/mongodb.png";
import mysql from "../../Images/mysql.png";
import redirect from "../../Images/redirect.png";
import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <div className="sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 3xl:px-2">
            <div className="w-full h-full pb-20">

                <section className="flex items-center px-2 py-2 sticky top-0 bg-white">

                    <img src={resume} className="w-6 h-6"></img>

                    <h1 className="mx-2 text-xl">Resume</h1>

                </section>

                <section className="px-2 my-2">

                    <h1 className="text-xl text-blue-600">Nitish Kumar Sharma</h1>
                    <h1 className="text-blue-600 font-semibold">Frontend Developer</h1>

                    <section className="flex items-center mt-3">

                        <img src={gmail} className="w-4 h-4"></img>

                        <Link to="mailto:nk.sharma2626@gmail.com" className="text-blue-700 pl-2">
                            nk.sharma2626@gmail.com
                        </Link>

                    </section>

                    <section className="flex items-center">

                        <img src={linkedin} className="w-4 h-4 "></img>

                        <Link to="http://linkedin.com/in/nitish-sharma-9465ab252" target="blank" className="text-blue-700 pl-2">
                            nitish-sharma-9465ab252
                        </Link>

                    </section>

                    <section className="flex items-center">

                        <img src={github} className="w-4 h-4"></img>

                        <Link to="http://github.com/Nitish2626" target="blank" className="text-blue-700 pl-2">
                            Nitish2626
                        </Link>

                    </section>

                    <section className="flex items-center">

                        <img src={call} className="w-4 h-4"></img>

                        <Link to="tel:8976520212" className="text-blue-700 pl-2">
                            8976520212
                        </Link>

                    </section>

                    <h1 className="text-xl mt-3">About Me</h1>

                    <section className="mt-3 text-blue-500 text-lg">
                        I am a very <strong>passionate developer</strong> and always try to learn and understand things to become better and <strong>build better</strong>.
                    </section>

                    <h1 className="text-xl mt-3">Academics</h1>

                    <section className="flex gap-2 mt-3">

                        <h2 className="pr-4 text-blue-500 font-semibold">
                            2022-2025
                        </h2>

                        <h1 className="flex flex-col text-blue-500 font-semibold">
                            BCA
                            <h3 className="text-blue-500 font-semibold">
                                YCMOU University
                            </h3>
                        </h1>

                    </section>

                    <section className="flex gap-2 mt-3">

                        <h2 className="pr-4 text-blue-500 font-semibold">
                            2020-2022
                        </h2>

                        <h1 className="flex flex-col text-blue-500 font-semibold">
                            HSC (10+2)
                            <h3 className="text-blue-500 font-semibold">
                                Maharshtra State Board
                            </h3>
                        </h1>

                    </section>

                    <section className="flex gap-12 mt-3">

                        <h2 className="pr-4 text-blue-500 font-semibold">
                            2020
                        </h2>

                        <h1 className="flex flex-col text-blue-500 font-semibold">
                            SSC (10)
                            <h3 className="text-blue-500 font-semibold">
                                Maharashtra State Board
                            </h3>
                        </h1>

                    </section>

                    <h1 className="text-xl mt-3">Skills</h1>

                    <section className="flex items-center justify-around flex-wrap mt-2">

                        <section className="mt-3 flex items-center">
                            <img src={html} className="w-6 h-6"></img>
                            <h4 className="pl-2 text-blue-500 font-semibold">HTML</h4>
                        </section>

                        <section className="mt-3 flex items-center">
                            <img src={css} className="w-6 h-6"></img>
                            <h4 className="pl-2 text-blue-500 font-semibold">CSS</h4>
                        </section>

                        <section className="mt-3 flex items-center">
                            <img src={js} className="w-6 h-6"></img>
                            <h4 className="pl-2 text-blue-500 font-semibold">JAVASCRIPT</h4>
                        </section>

                        <section className="mt-3 flex items-center">
                            <img src={tc} className="w-6 h-6"></img>
                            <h4 className="pl-2 text-blue-500 font-semibold">Tailwind CSS</h4>
                        </section>

                        <section className="mt-3 flex items-center">
                            <img src={react} className="w-6 h-6"></img>
                            <h4 className="pl-2 text-blue-500 font-semibold">REACT JS</h4>
                        </section>

                        <section className="mt-3 flex items-center">
                            <img src={git} className="w-6 h-6"></img>
                            <h4 className="pl-2 text-blue-500 font-semibold">GIT</h4>
                        </section>

                        <section className="mt-3 flex items-center">
                            <img src={github} className="w-6 h-6"></img>
                            <h4 className="pl-2 text-blue-500 font-semibold">GitHub</h4>
                        </section>

                        <section className="mt-3 flex items-center">
                            <img src={mongodb} className="w-6 h-6"></img>
                            <h4 className="pl-2 text-blue-500 font-semibold">MongoDB</h4>
                        </section>

                        <section className="mt-3 flex items-center">
                            <img src={mysql} className="w-6 h-6"></img>
                            <h4 className="pl-2 text-blue-500 font-semibold">MySQL</h4>
                        </section>

                    </section>

                    <h1 className="text-xl mt-3">Experience</h1>

                    <ul className="mt-2 list-disc px-5">
                        <li className="text-blue-500 font-semibold text-lg">
                            Fresher
                        </li>
                    </ul>

                    <h1 className="text-xl my-3">Projects</h1>

                    <Link to="/projects" className="text-white bg-blue-500 font-semibold text-lg w-32 border rounded-lg flex items-center justify-center gap-2 py-1">Projects <img src={redirect} className="w-6 h-6"></img></Link>

                </section>

            </div>
        </div>
    );
}

export default Resume;