const ProjectContainer = (props) => {
    return (
        <section className="w-full px-2 py-1 rounded-md mt-2 mb-8 shadow-[1px_1px_10px_0px_gray]">
            {props.children}
        </section>
    );
}

export default ProjectContainer;