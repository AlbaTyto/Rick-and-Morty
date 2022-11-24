import './App.css'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react';
// import SearchBar from './components/SearchBar/SearchBar.jsx'
// import characters, { Rick } from './data.js'
// const example = {
//   id: 0,
//   name: 'Morty Smith',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };

function App() {

  const [characters, setChar] = useState([]);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setChar((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };
  function onClose(id) {
    setChar(characters.filter(char => char.id !== id));
    // setChar(characters.splice(characters.indexOf(id), 1))=> Esta no funciuono
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      {/* <div className='Present'>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div> */}
      <hr />
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
      <hr />
      {/* <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div> */}
      <nav>
        <Nav onSearch={onSearch} characters={characters} setChar={setChar} />
      </nav>
    </div>
  )
}

export default App
