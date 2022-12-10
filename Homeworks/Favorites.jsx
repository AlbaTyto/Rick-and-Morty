import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";
import f from './Favorites.module.css'


export function Favorites({ myFavorites }) {
    const dispatch = useDispatch();

    return <div>
        <div>
            <select name="order" onChange={(e) => dispatch(orderCards(e.target.value))}>
                <option value="Ascend">Ascendente</option>
                <option value="Descend">Descendente</option>
            </select>
            <select name="filter" onChange={(e) => dispatch(filterCards(e.target.value))}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
        <div id={f.divStyle}>
            {myFavorites?.map((element, index) => (
                <span key={index} className={f.cardStyle}>
                    <Link to={`/detail/${element.id}`} className={f.nameStyle}><h2>{element.name} - {element.id}</h2></Link>
                    <div className={f.attStyle}>
                        <h4>{element.species}</h4>
                        <h4>{element.gender}</h4>
                    </div>
                    <img src={element.image} alt="Character" className={f.imgStyle} />
                </span>))}
        </div>
    </div>

};

function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    };
};

export default connect(mapStateToProps, null)(Favorites);