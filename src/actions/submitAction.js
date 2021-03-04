import { MODIFY } from '../actions/types';

//Modify Submission
export const modify = (flag) => (dispatch) => {
    dispatch({
        type: MODIFY,
        payload: flag
    })
}