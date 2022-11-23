import SearchBar from '../SearchBar/SearchBar.jsx';
import n from './Nav.module.css';

export default function Nav(props) {
   return (      
         <div className={n.navStyle}>
            <SearchBar
          props = {props}/>
         </div>
   );
}