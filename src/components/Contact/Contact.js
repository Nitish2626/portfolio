import { Link } from "react-router-dom";
import contact from "../../Images/contact.png";
import gmail from "../../Images/gmail.png";
import linkedin from "../../Images/linkedin.png";
import call from "../../Images/phone.png";

const Contact = () => {

    return (
        <div className="sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 3xl:px-2">
            <div className="w-full h-full pb-20">

                <section className="flex items-center px-2 py-2 sticky top-0 bg-white">

                    <img src={contact} className="w-6 h-6"></img>

                    <h1 className="mx-2 text-xl">Contact Me</h1>

                </section>

                <div className="w-full h-96 flex flex-col items-center justify-center">

                    <section className="flex items-center my-2">

                        <img src={gmail} className="w-4 h-4 mx-2"></img>

                        <Link to="mailto:nk.sharma2626@gmail.com" className="text-blue-700">
                            nk.sharma2626@gmail.com
                        </Link>

                    </section>

                    <section className="flex items-center">

                        <img src={linkedin} className="w-4 h-4 mx-2"></img>

                        <Link to="http://linkedin.com/in/nitish-sharma-9465ab252" target="blank" className="text-blue-700">
                            nitish-sharma-9465ab252
                        </Link>

                    </section>

                    <section className="flex items-center my-2">

                        <img src={call} className="w-4 h-4 mx-2"></img>

                        <Link to="tel:8976520212" className="text-blue-700">
                            8976520212
                        </Link>

                    </section>

                </div>

            </div>
        </div>
    );
}
export default Contact;