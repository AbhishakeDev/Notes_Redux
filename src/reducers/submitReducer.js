import { MODIFY } from '../actions/types';

const initialState = {
    isSubmitted: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case MODIFY:
            return {
                ...state,
                isSubmitted: action.payload
            }
        default:
            return state;
    }
}