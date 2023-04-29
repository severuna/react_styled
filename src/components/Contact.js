export function Contact ( props ) {

    return (
        <div className="item column">
            <p className="item-field"><span>Fisrt Name:</span> {props.firstName}</p>
            <p className="item-field"><span>Last Name:</span> {props.lastName}</p>
            <p className="item-field"><span>Phone Name:</span> {props.phone}</p>
        </div>
    )
}

export default Contact;
