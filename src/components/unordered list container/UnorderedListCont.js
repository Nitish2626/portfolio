const UnorderedListCont = (props) => {
    return (
        <ul className="list-disc mt-2">
            {props.children}
        </ul>
    );
}

export default UnorderedListCont;