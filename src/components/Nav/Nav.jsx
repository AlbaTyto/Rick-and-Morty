import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

import n from './Nav.module.css';

export default function Nav({onSearch, characters, setChar}) {
   return (      
         <div className={n.navStyle}>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
            <SearchBar onSearch = {onSearch} characters={characters} setChar={setChar}/>
         </div>
   );
}