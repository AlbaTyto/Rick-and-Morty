import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, RESTORE_FAVORITES } from "./types";

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
export function orderCards(value) {
    return {
        type: ORDER,
        payload: value
    }
}
export function restoreFavorites() {
    return {
        type: RESTORE_FAVORITES,
    }
};
