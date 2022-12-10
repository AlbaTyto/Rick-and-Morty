import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";


export function Favorites({ myFavorites }) {
    const dispatch = useDispatch();

    function handleOrder(e){
        dispatch( orderCards(e.terget.value) )
    }
    return <div>
        <div>
            <select name="order" onChange={handleOrder}>
                <option value="ascend">Ascendente</option>
                <option value="descend">Descendent</option>               
            </select>
            <select name="filter" onChange={(e) => dispatch(filterCards(e.target.value))}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
        {myFavorites?.map((element, index) => (
        <span key = {index}>
         <Link to={`/detail/${element.id}`}><h2>{element.name} - {element.id}</h2></Link>
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