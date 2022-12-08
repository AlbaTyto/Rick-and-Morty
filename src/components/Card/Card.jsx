// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

// import s from './Card.module.css';
import { addCharacter, deleteCharacter } from '../../redux/actions';

// /*props = {
//          name = {element.name}
//          id = {element.id}
//          species={element.species}
//          gender={element.gender}
//          image={element.image}
//          onClose={() => onClose(element.id)}
//          addCharacter: dispatch(addCharacter()),
//          deleteCharacter: dispatch(deleteCharacter())
//          myFavorites: state.myFavorites
//       }*/
// export function Card(props, addCharacter, deleteCharacter, myFavorites) {
//    const [isFav, setFav] = useState(false);

//    function handleFavorite() {
//       if (isFav) {
//          setFav(false)
//          deleteCharacter(props.id)
//       } else if (!isFav) {
//          setFav(true)
//          addCharacter(props)
//       };
//    };
//    useEffect(() => {
//       myFavorites.forEach((fav) => {
//          if (fav.id === props.id) {
//             setFav(true);
//          }
//       });
//    }, [myFavorites, props.id]);

//    return (
//       <div className={s.divStyle}>
//          {
//             isFav ? (
//                <button onClick={handleFavorite}>❤️</button>
//             ) : (
//                <button onClick={handleFavorite}>🤍</button>
//             )
//          }
//          <button onClick={props.onClose} className={s.buttonStyle}>X</button>
//          <Link to={`/detail/${props.id}`}><h2 className={s.nameStyle}>{props.name}</h2></Link>
//          <div className={s.attStyle}>
//             <h2>{props.species}</h2>
//             <h2>{props.gender}</h2>
//          </div>
//          <img src={props.image} alt="Character" />
//       </div>
//    );
// };

// function mapDispatchToProps(dispatch) {
//    return {
//       addCharacter: dispatch(addCharacter()),
//       deleteCharacter: dispatch(deleteCharacter())
//    }
// };

// function mapStateToProps(state){
//    return {
//       myFavorites: state.myFavorites
//    }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card);

import { Link } from 'react-router-dom';
import s from './Card.module.css';

export default function Card(props) {
   const [isFav, setFav] = useState(false);
   const dispatch = useDispatch();

   function handleFavorite() {
      if (isFav) {
         setFav(false);
         dispatch(deleteCharacter(props.id))
      } else if (!isFav) {
         setFav(true);
         dispatch(addCharacter(props))
      };
   };

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
}
/*
// Desde aca, para abajo, no funciona. Lo unico que parece hacer bien es la exportacion. El connect no funciona, en este componente ni en Favorites. Pero comentando esto, no me tira el error en favorites.
//react_devtools_backend.js:4012 Warning: Cannot update a component (`Connect(Favorites)`) while rendering a different component (`Connect(Card)`). To locate the bad setState() call inside `Connect(Card)`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render

function mapDispatchToProps(dispatch) {
   return {
      addCharacter: dispatch(addCharacter()),
      deleteCharacter: dispatch(deleteCharacter())
   }
};

export default connect(null, mapDispatchToProps)(Card);*/