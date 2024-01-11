const InputTag = (props) => {
    return (
        <input type="text" className={`w-9/12 text-lg px-2 py-1 ${props.padding} rounded-md shadow-[1px_1px_10px_0px_gray]`} placeholder={props.placeholder} required value={props.value} onChange={props.change}></input>
     );
}
 
export default InputTag;