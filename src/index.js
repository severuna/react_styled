import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Contact ( props ) {

  return (
    <div className='item row'>
        <p className='item-field'><span>Contact:</span> {props.firstName} {props.lastName}</p>
        <p className='item-field'><span>Phone:</span> {props.phone}</p>
    </div>
  )

}

const contacts_all = [
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

function Main ( ) {

    const [contacts, setContacts] = useState(contacts_all);

    const [search, setSearch] = useState('');

    let elements = [];

    contacts.forEach((el, i) => {
        elements.push(
          <Contact firstName={el.firstName} lastName={el.lastName} phone={el.phone} key={i} /> 
        )
    });

    function handleSearchChange( event ) {

      setSearch(event.target.value)

      console.log(search)

      let filteredContacts =  contacts.filter(el => el.lastName.includes(search))

      setContacts(filteredContacts);

      console.log(contacts)

    }

  return (
    <div className='main column'>
      <h1 className='title'>Homework 16.ReactJS.Hooks</h1>
        <div className='container column'>
          <h2 className='subtitle'>Contacts</h2>
          <input className='search' placeholder='Find a person...' value={search} onChange={ (event) => { handleSearchChange(event) }} />
            {elements}
        </div>
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);