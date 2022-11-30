import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';

function App() {
  const location = useLocation();
  const [characters, setChar] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'e@eee.ee';
  const password = '111111';

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home')
    }
  };
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  // function logout() {
  //   navigate('/')
  // }

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
        {location.pathname !== '/' &&
          <Nav path='/:nav' onSearch={onSearch} characters={characters} setChar={setChar} />
        };
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Form login={login} username={username} password={password} />} />
        </Routes>
      </div>
      <div className='BodySubNav'>
        <Routes>
          <Route path='/home' element={<Cards
            characters={characters} onClose={onClose}
          />} />
          <Route path='/about' element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App
