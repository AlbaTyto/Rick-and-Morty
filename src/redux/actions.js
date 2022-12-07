import { ADD_FAVORITE, DELETE_FAVORITE } from "./types";

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
}

