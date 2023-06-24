import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addCharacter, deleteCharacter } from '../../redux/actions';
import { Link } from 'react-router-dom';
import s from './Card.module.css';
export function Card(props) {
   const [isFav, setFav] = useState(false);
   function handleFavorite() {
      if (isFav) {
         setFav(false);
         props.deleteCharacter(props.id)
      } else {
         setFav(true);
         props.addCharacter(props)
      };
   };
   useEffect(() => {
      props.myFavorites.length>0 && props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setFav(true);
         }
      });
      //eslint-disable-next-line
   }, [props.myFavorites]);
   return (
      <div className={s.divStyle}>
         <div id={s.favorite}>
         {
            isFav ? (
               <button onClick={handleFavorite} className={s.favBtn}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={s.favBtn}>🤍</button>
            )
         }
         </div>
         <button onClick={props.onClose} className={s.buttonStyle}>X</button>
         <Link to={`/detail/${props.id}`} style={{gridRow: '4'}}><h3 className={s.nameStyle}>{props.name}</h3></Link>
         <div className={s.attStyle}>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
         </div>
         <img src={props.image} alt="Character" />
      </div>
   );
}
export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   };
};
export function mapDispatchToProps(dispatch) {
   return {
      addCharacter: function(character) {dispatch(addCharacter(character))},
      deleteCharacter: function(id) {dispatch(deleteCharacter(id))}
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);