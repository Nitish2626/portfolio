const OrderedListCont = (props) => {
    return (
        <ol className="list-decimal" start={props.start}>
            {props.children}
        </ol>
    );
}

export default OrderedListCont;