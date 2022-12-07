import { ADD_FAVORITE, DELETE_FAVORITE } from "./types";


const initialState = {
    myFavorites: [],

};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((card)=>card !== action.payload)
            };
        default:
            return state;
    }
};