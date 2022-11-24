import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import n from './Nav.module.css';

export default function Nav({onSearch, characters, setChar}) {
   return (      
         <div className={n.navStyle}>
            <SearchBar onSearch = {onSearch} characters={characters} setChar={setChar}/>
         </div>
   );
}