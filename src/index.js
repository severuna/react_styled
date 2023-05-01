import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import man from './img/man.svg';
import women from './img/women.svg';
import unknown from './img/unknown.svg';

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

function Contact ( props ) {

  function setGender ( gender ) {

    if (gender === 'male') {

      return man

    } else if ( gender === 'female') {

      return women

    } else {

      return unknown

    }
  }

  return (
    <div className='item row'>
      <img className='item-pic' src={setGender(props.gender)} alt='gender' />
      <p className='item-field'><span>Contact:</span> {props.firstName} {props.lastName}</p>
      <p className='item-field'><span>Phone:</span> {props.phone}</p>
    </div>
  )

}

function Main ( ) {

  const [search, setSearch] = useState('');

  const [contacts, setContacts] = useState(contacts_all);

  function handleSearchChange( event ) {

    setSearch(event.target.value);

    let filteredContacts =  contacts_all.filter(el => String(el.lastName).toLowerCase().includes(String(search).toLowerCase()));

    setContacts(filteredContacts);

  }

    return (
      <div className='main column'>
        <h1 className='title'>Homework 16.ReactJS.Hooks</h1>
          <div className='container column'>
            <h2 className='subtitle'>Contacts</h2>
            <input className='search' placeholder='Find a person...' value={search} onChange={ (event) => { handleSearchChange(event) }} />
              { contacts.map((el, i) => <Contact {...el} key={i} /> )}
          </div>
      </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);