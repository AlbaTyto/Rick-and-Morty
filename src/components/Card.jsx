import s from './Card.module.css';

export default function Card(props) {
   return (      
         <div className = {s.divStyle}>
            <button onClick={props.onClose} className = {s.buttonStyle}>X</button>
            <h2 className = {s.nameStyle}>{props.name} </h2>
            <h2 className = {s.attStyle}>{props.species}</h2>
            <h2 className = {s.attStyle}>{props.gender}</h2>
            <img  src={props.image} alt="Character" />
         </div>
   );
}
