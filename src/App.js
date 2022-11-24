import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';

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
  };
  return (
    <div className='App' style={{ padding: '25px' }}>
      <nav>
        <Nav path='/:nav' onSearch={onSearch} characters={characters} setChar={setChar} />
      </nav>
      <Routes>
        <Route path='/home' element={<Cards
          characters={characters} onClose={onClose}
        />}/>
        <Route path='/about' element={<About />}/>
        {/* <Route path="/detail/:detailId" element={<Detail />}/> */}
      </Routes>
    </div>
  );
};

export default App
