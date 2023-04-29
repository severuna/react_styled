import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const character = {
  name: "Anakin Skywalker",
  born: "41 BBY, Tatooine",
  dead: "4 ABY, DS-2 Death Star",
  avatar: "https://cdna.artstation.com/p/assets/images/images/040/927/498/large/yan-nikolaychik-img-20210830-040238-065.jpg",
  info: "Anakin Skywalker was a legendary Force-sensitive human male who was a Jedi Knight of the Galactic Republic and the prophesied Chosen One of the Jedi Order, destined to bring balance to the Force. Also known as 'Ani' during his childhood, Skywalker earned the moniker 'Hero With No Fear' from his accomplishments in the Clone Wars. His alter ego, Darth Vader, the Dark Lord of the Sith, was created when Skywalker turned to the dark side of the Force, pledging his allegiance to the Sith Lord Darth Sidious at the end of the Republic Era."
}

function Card ( ) {
  return (
    <div className='card row'>
      <img className='card-img' src={character.avatar} alt='avatar' />
      <div className='card-info column'>
        <h1 className='card-info__name'>{character.name}</h1>
        <div className='card-info__years row'>
          <p>Born: {character.born}</p>
          <p>Dead: {character.dead}</p>
        </div>
        <p className='card-info__content'>{character.info}</p>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Card />
);