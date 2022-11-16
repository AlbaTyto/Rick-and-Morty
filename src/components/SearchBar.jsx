import f from './SearchBar.module.css';
export default function SearchBar(props) {
   const { onSearch } = props;
   return (
      <div className= {f.divStyle}>
         <input className= {f.inputStyle} type='search' />
         <button className= {f.buttonStyle} onClick={() => onSearch('Futuro ID')}>Agregar</button>
      </div>
   );
}
