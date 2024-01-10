const InputTag = (props) => {
    return (
        <input type="text" ref={props.ref} className={`w-9/12 text-lg px-2 py-1 ${props.padding} rounded-md shadow-[1px_1px_10px_0px_gray]`} placeholder={props.placeholder} required></input>
     );
}
 
export default InputTag;