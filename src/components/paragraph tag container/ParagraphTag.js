const ParagraphTag = (props) => {
    return (
        <p className="mx-1 my-1 text-lg">
            {props.children}
        </p>
    );
}

export default ParagraphTag;