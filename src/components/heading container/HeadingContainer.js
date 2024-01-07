const HeadingContainer = (props) => {
    return (
        <section className="flex items-center px-2 py-2 sticky top-0 bg-white">

            <img src={props.src} className="w-6 h-6"></img>
            <h1 className="mx-2 text-xl">
                {props.text}
            </h1>

        </section>
    );
}

export default HeadingContainer;