const HeadingContainer = (props) => {
    return (
        <section className="w-full flex items-center px-2 py-2 sticky top-0 bg-white z-10">

            <img src={props.src} className="w-6 h-6" alt="Heading icon"></img>
            <h1 className="mx-2 text-xl">
                {props.text}
            </h1>

        </section>
    );
}

export default HeadingContainer;