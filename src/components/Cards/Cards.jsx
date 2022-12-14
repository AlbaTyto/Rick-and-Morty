import Card from '../Card/Card.jsx';
import e from './Cards.module.css';

export default function Cards({characters, onClose}) {
   // const { characters } = props;
   return <div id= {e.divStyle}>
      {characters.map((element, index) => (
         <span key = {index} className= {e.divSpan}>
         <Card 
         name = {element.name}
         id = {element.id}
         species={element.species}
         gender={element.gender}
         image={element.image}
         onClose={() => onClose(element.id)}
         // onClose = {() => window.alert('Emulamos que se cierra la card')} 
         />
         </span>
      ) 
      )}
   </div>;
}
