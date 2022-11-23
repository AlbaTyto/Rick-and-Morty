import './App.css'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react';
// import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters, { Rick } from './data.js'
// const example = {
//   name: 'Morty Smith',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };

function App () {
const onSearch = (characterID) => {};
// const [characters, setChar] = useState(example);
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
          characters={characters}
        />
      </div>
      <hr />
      {/* <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div> */}
      <nav>
        <Nav props = {onSearch}/>
      </nav>
    </div>
  )
}

export default App
