import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Main ( ) {

  const [contacts, setContacts] = useState([
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
  ]);

  let elements = [];

  contacts.forEach((el, i) => {
    console.log(el.firstName)
    elements.push(el.firstName)
  });

  console.log(elements)

  return (
      <div className='main column'>
          <h1 className='title'>Homework 16. ReactJS. Hooks</h1>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);