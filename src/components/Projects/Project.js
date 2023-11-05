import { Link } from "react-router-dom";
import project from "../../Images/project.png";

const Project = () => {
    return (
        <div className="sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 3xl:px-2">
            <div className="w-full h-full pb-20">

                <section className="flex items-center px-2 py-2 sticky top-0 bg-white">

                    <img src={project} className="w-7 h-7"></img>

                    <h1 className="mx-2 text-xl">Projects</h1>

                </section>

                <section className="mx-1 my-2 px-2 py-2 bg-slate-200 border rounded-lg">

                    <h2 className="font-bold">
                        1. Calculator WebApp
                    </h2>

                    <p className="my-2 text-lg">
                        This WebApp is made using <span className="text-blue-700">HTML, CSS, JAVASCRIPT and REACT JS</span> and contains four different types of <span className="text-blue-700">Calculators</span> which is used to perform various types of calculations in our daily life. <span className="text-blue-700">WebApp is fully responsive and compatible with all types of devices</span>.
                    </p>
                    <p>
                        WebApp URL :
                        <Link className="text-blue-700 font-semibold" to="https://usecalc.000webhostapp.com" target="blank">
                            https://usecalc.000webhostapp.com
                        </Link>
                    </p>
                    <p>
                        GitHub Source Code URL :
                        <Link className="text-blue-700 font-semibold" to="https://github.com/Nitish2626/usecalc" target="blank">
                            https://github.com/Nitish2626/usecalc
                        </Link>
                    </p>
                </section>

                <section className="mx-1 my-2 px-2 py-2 bg-slate-200 border rounded-lg">

                    <h2 className="font-bold">
                        2. News WebApp
                    </h2>

                    <p className="my-2 text-lg">
                        This WebApp is made using <span className="text-blue-700">HTML, CSS, JAVASCRIPT and REACT JS</span> and contains <span className="text-blue-700">top-headlines from 53 countries in their regional languages.</span> This News App is made using third-party news api. <span className="text-blue-700">WebApp is fully responsive and compatible with all types of devices</span>.
                    </p>

                    <p className="text-lg">
                        <span className="text-blue-700">I have used third-party api, that's why i can't host it.</span>
                    </p>

                    <p>
                        GitHub Source Code URL :
                        <Link className="text-blue-700 font-semibold" to="https://github.com/Nitish2626/news-app" target="blank">
                            https://github.com/Nitish2626/news-app
                        </Link>
                    </p>

                </section>

            </div>
        </div>
    );
}
export default Project;