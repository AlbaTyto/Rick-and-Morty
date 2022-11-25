import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

import n from './Nav.module.css';

export default function Nav({onSearch, characters, setChar}) {
   return (      
         <div className={n.navStyle}>
            <div id={n.Navlnk}>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
            </div>
            <div id={n.Bar}>
            <SearchBar onSearch = {onSearch} characters={characters} setChar={setChar}/>
            </div>
         </div>
   );
}