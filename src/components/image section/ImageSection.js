const ImageSection = (props) => {
    return (
        <section className="flex relative gap-2 mx-5 my-2">
            {props.children}
        </section>
    );
}

export default ImageSection;