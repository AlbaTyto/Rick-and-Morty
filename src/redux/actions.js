import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./types";

export function addCharacter(personaje) {
    return {
        type: ADD_FAVORITE,
        payload: personaje
    }
};

export function deleteCharacter(id) {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
};
export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
};
export function orderCards(id) {
    return {
        type: ORDER,
        payload: id
    }
}

