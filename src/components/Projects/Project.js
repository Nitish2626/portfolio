import { Link } from "react-router-dom";
import project from "../../Images/project.png";

const Project = () => {
    return (
        <div className="w-full h-full pb-20">

            <section className="flex items-center px-2 py-2 sticky top-0 bg-white">

                <img src={project} className="w-7 h-7"></img>

                <h1 className="mx-2 text-xl">Projects</h1>

            </section>

            <section className="mx-1 my-2 px-2 py-2 bg-slate-200 border rounded-lg shadow-black-500/50">

                <h2 className="font-bold">
                    1. Calculator WebApp
                </h2>

                <p className="my-2 ">
                    This WebApp is made using <strong>HTML, CSS, JAVASCRIPT and REACT JS</strong> and contains four different types of <strong>Calculators</strong> which is used to perform various types of calculations in our daily life. <strong>WebApp is fully responsive and compatible with all types of devices</strong>.
                </p>
                <p>
                    WebApp URL : <Link className="text-blue-700 font-semibold" to="https://usecalc.000webhostapp.com" target="blank">https://usecalc.000webhostapp.com</Link>
                </p>
                <p>
                    GitHub Source Code URL : <Link className="text-blue-700 font-semibold" to="https://github.com/Nitish2626/usecalc" target="blank">https://github.com/Nitish2626/usecalc</Link>
                </p>
            </section>

        </div>
    );
}
export default Project;