import f from './SearchBar.module.css';
import React from 'react';
export default function SearchBar(props) {
   const { onSearch } = props;
   const [character, setCharacter] = React.useState('');
   const handleChange = (ev) => {
      setCharacter(Number(ev.target.value));
      
   };
   return (
      <div className= {f.divStyle}>
         <input className= {f.inputStyle} type='search' value={character} onChange={handleChange} />
         <button className= {f.buttonStyle} onClick={() => { onSearch(character); setCharacter('')}}>Agregar</button>
      </div>
   );
}
//bajar react developer tools. Dice auri que va a re servir.