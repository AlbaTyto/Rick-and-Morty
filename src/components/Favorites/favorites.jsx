import { connect } from "react-redux";
import { Link } from "react-router-dom";


export function Favorites({ myFavorites }) {
    
    return <div>
        {myFavorites.map((element, index) => (
        <span key = {index}>
         <Link to={`/detail/${element.id}`}><h2>{element.name}</h2></Link>
         <div>
            <h2>{element.species}</h2>
            <h2>{element.gender}</h2>
         </div>
         <img src={element.image} alt="Character" />
         </span>))}
   </div>

};

function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    };
};

export default connect(mapStateToProps, null)(Favorites);