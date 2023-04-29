import Contact from "./Contact";

function Contacts ( props ) {

    return (
        <div className="container row">
            <p className="container-title">Contacts</p>
            <Contact props={props} />
        </div>
    )
}

export default Contacts;
