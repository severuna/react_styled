import "./Contact.css";

export function Contact ( props ) {

    return (
        <div className="item row">
            <p className="item-field">{props.firstName} {props.lastName}</p>
            <p className="item-field"><span>Phone:</span> {props.phone}</p>
        </div>
    )
}

export default Contact;
