import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../actions/types';


//Add note
export const addNote = (data) => (dispatch) => {
    dispatch({
        type: ADD_NOTE,
        payload: data
    })
}
//Delete Note
export const deleteNote = (id) => (dispatch) => {
    dispatch({
        type: DELETE_NOTE,
        payload: id
    })
}
//Update Note
export const updateNote = (data) => (dispatch) => {
    dispatch({
        type: UPDATE_NOTE,
        payload: data
    })
}