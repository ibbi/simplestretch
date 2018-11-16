import { INCREMENT_TIME, DECREMENT_TIME } from '../actions/types';

const INITIAL_STATE = { time: 3 };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT_TIME:
            if (state.time < 120) {
                return { ...state, time: state.time + 30 };
            }
            return { state };
        case DECREMENT_TIME:
            if (state.time > 30) {
                return { ...state, time: state.time - 30 };
            }
            return { state };
        default:
            return state;
    }
};
