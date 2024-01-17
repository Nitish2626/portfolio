import { useTheme } from "../theme context/ThemeContext";

const InputTag = (props) => {

    const {darkMode}=useTheme();

    return (
        <input type="text" className={`w-9/12 text-lg px-2 py-1 ${props.padding} rounded-md ${darkMode ? "bg-black text-white shadow-sm shadow-white outline-none" : "shadow-sm shadow-black outline-none"}`} placeholder={props.placeholder} required value={props.value} onChange={props.change}></input>
     );
}
 
export default InputTag;