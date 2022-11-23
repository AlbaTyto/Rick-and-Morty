import Card from '../Card/Card.jsx';
import e from './Cards.module.css';

export default function Cards({ characters }) {
   return <div className= {e.divStyle}>
      {characters.map((element) => (
         <span key = {element.id} className= {e.divSpan}>
         <Card 
         name = {element.name}
         species={element.species}
         gender={element.gender}
         image={element.image}
         onClose = {() => window.alert('Emulamos que se cierra la card')} />
         </span>
      ) 
      )}
   </div>;
}
