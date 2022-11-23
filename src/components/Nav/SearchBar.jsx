import f from './SearchBar.module.css';
import React from 'react';

export default function SearchBar({ onSearch, setChar, characters }) {
   const handleInputChange = (ev) => {
      setChar({
         ...characters,
         id: ev.target.value
      });
   };
   return (
      <div className={f.divStyle}>
         <input className={f.inputStyle} type='search' onChange={handleInputChange} />
         <button className={f.buttonStyle} onClick={onSearch}>Agregar</button>
      </div>
   );
}
