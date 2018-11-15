import { INCREMENT_TIME, DECREMENT_TIME } from '../actions/types';

const INITIAL_STATE = { time: 55 };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT_TIME:
            return { ...state, time: state.time + 15 };
        case DECREMENT_TIME:
            return { ...state, time: state.time - 15 };
        default:
            return state;
    }
};

