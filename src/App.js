import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import n from './components/Nav/Nav.module.css';

// const example = {
//   name: 'Morty Smith',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };

function App() {

  const [characters, setChar] = useState(
    {
      id: 0,
      name: '',
      species: '',
      gender: '',
      image: '',
    }
  );
  // const onSearch = (ev) => {
  //   setChar({
  //     ...characters,
  //     name: ev.target.value
  //   });
  // }

  function onSearch(character) {
    character = 1;
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setChar((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }
console.log(characters)
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <nav className={n.navStyle}>
        <Nav onSearch={onSearch} setChar={setChar} characters={characters}/>
      </nav>
    </div>
  )
}

export default App
