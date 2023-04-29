function Contact ( props ) {

    return (
        <div className="item column">
            <p className="item-field"><span>Fisrt Name:</span> {props.firstName}</p>
            <p className="item-field"><span>Fisrt Name:</span> {props.lastName}</p>
            <p className="item-field"><span>Fisrt Name:</span> {props.phone}</p>
            <p className="item-field"><span>Fisrt Name:</span> {props.gender}</p>
        </div>
    )
}

export default Contact;
