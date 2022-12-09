import { ADD_FAVORITE, DELETE_FAVORITE } from "./types";


const initialState = {
    myFavorites: []
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            state.myFavorites.push(action.payload)
            return {
                ...state,
                myFavorites: [...state.myFavorites]
                // myFavorites: [...state.myFavorites, action.payload]
            };
        case DELETE_FAVORITE:
            // const filterFav = state.myFavorites.filter((card)=>card.id !== action.payload)
            return {
                ...state,
                myFavorites: state.myFavorites.filter((card)=>card.id !== action.payload)
            };
        default:
            return {...state};
    }
};