import { Link } from "react-router-dom";

const SocialLinks = (props) => {
    return (
        <section className="flex items-center justify-start ">

            <img src={props.src} className="w-4 h-4 mx-2" alt="social"></img>
            <Link to={props.link} className="text-blue-700 text-md">
                {props.text}
            </Link>

        </section>
    );
}

export default SocialLinks;