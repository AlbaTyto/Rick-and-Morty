import s from './Card.module.css';

export default function Card(props) {
   return (      
         <div className = {s.divStyle}>
            <button onClick={props.onClose} className = {s.buttonStyle}>X</button>
            <h2 className = {s.nameStyle}>{props.name} </h2>
            <div className = {s.attStyle}>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
            </div>
            <img  src={props.image} alt="Character" />
         </div>
   );
}
