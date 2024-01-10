import { Link } from "react-router-dom";

const SocialLinks = (props) => {
    return (
        <Link to={props.link} className="w-10 h-10 flex items-center justify-center relative rounded-full hover:bg-slate-200" target="blank">
            <img src={props.src} className={`${props.size ? props.size : "w-5 h-5"}`} alt="Social links"></img>
        </Link>
    );
}

export default SocialLinks;