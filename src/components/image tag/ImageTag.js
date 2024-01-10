const ImageTag = (props) => {
    return (
        <img src={props.src} alt={props.alt} className="w-6 h-6"></img>
    );
}

export default ImageTag;