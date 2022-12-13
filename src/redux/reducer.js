import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./types";


const initialState = {
    myFavorites: [],
    allCharacters: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            // state.myFavorites.push(action.payload)
            return {
                ...state,
                // myFavorites: [...state.myFavorites]
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };
        case DELETE_FAVORITE:
            // const filterFav = state.myFavorites.filter((card)=>card.id !== action.payload)
            return {
                ...state,
                myFavorites: state.myFavorites.filter((card) => card.id !== action.payload)
            };
        case FILTER:
            if (action.payload === "All") {
                return {
                    ...state,
                    myFavorites: [...state.allCharacters]
                }
            }
            const fil = state.allCharacters.filter((char) => char.gender === action.payload);
            return {
                ...state,
                myFavorites: fil
            };
        case ORDER:
            const ord = state.allCharacters.sort((a, b) => {
                if (action.payload === "Ascend") {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                } else {
                    if (a.id < b.id) return 1;
                    if (a.id > b.id) return -1;
                    return 0;
                }
            });
            return {
                ...state,
                myFavorites: ord
            }
        default:
            return { ...state };
    }
};