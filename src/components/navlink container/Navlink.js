import { NavLink } from "react-router-dom";

const Navlink = (props) => {
    return (
        <NavLink to={props.to} className="w-10 h-9 bg-white border rounded-full flex items-center justify-center" title={props.title}>
            <img src={props.src} className="w-6 h-6" alt={props.title}></img>
        </NavLink>
    );
}

export default Navlink;