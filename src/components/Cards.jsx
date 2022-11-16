import Card from './Card';
import e from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   return <div className= {e.divStyle}>
      {characters.map((element, index) => (
         <span key = {index} className= {e.divSpan}>
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
