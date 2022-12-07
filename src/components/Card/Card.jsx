import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import s from './Card.module.css';
import { addCharacter, deleteCharacter } from '../../redux/actions';

/*props = {
         name = {element.name}
         id = {element.id}
         species={element.species}
         gender={element.gender}
         image={element.image}
         onClose={() => onClose(element.id)}
         addCharacter: dispatch(addCharacter()),
         deleteCharacter: dispatch(deleteCharacter())
         myFavorites: state.myFavorites
      }*/
export function Card(props, addCharacter, deleteCharacter, myFavorites) {
   const [isFav, setFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setFav(false)
         deleteCharacter(props.id)
      } else if (!isFav) {
         setFav(true)
         addCharacter(props)
      };
   };
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setFav(true);
         }
      });
   }, [myFavorites, props.id]);

   return (
      <div className={s.divStyle}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={props.onClose} className={s.buttonStyle}>X</button>
         <Link to={`/detail/${props.id}`}><h2 className={s.nameStyle}>{props.name}</h2></Link>
         <div className={s.attStyle}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         <img src={props.image} alt="Character" />
      </div>
   );
};

function mapDispatchToProps(dispatch) {
   return {
      addCharacter: dispatch(addCharacter()),
      deleteCharacter: dispatch(deleteCharacter())
   }
};

function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);