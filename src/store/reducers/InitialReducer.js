import { SEND_FORM } from '../actions/action';

export const formReducer = (state = {}, action) => {
    switch (action.type) {
        case SEND_FORM:
            return action.payload;
        default:
            return state;
    }
};
