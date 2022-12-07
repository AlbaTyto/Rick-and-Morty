import { connect } from "react-redux";

export function Favorites({ myFavorites }) {
    return <div>
        {myFavorites.map((el) => (
            <div>{el}</div>
        ))
        }
    </div>

};
function mapStateToProps(state) {
    return{
    myFavorites: state.myFavorites
    };
};

export default connect(mapStateToProps,null)(Favorites);