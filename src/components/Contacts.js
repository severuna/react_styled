import { useState } from "react";
import Contact from "./Contact";

const contacts = [
    {
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666"
    }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
    }
];


export function Contacts ( ) {

    const [state, setState] = useState({contacts});

    return (
        <div className="container row">
            <p className="container-title">Contacts</p>
            <div>
            {state.contacts.map((contact) => (
                    <Contact  firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} />
            ))}
            </div>
        </div>
    )
}

export default Contacts;
