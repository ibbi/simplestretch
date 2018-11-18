import { TOGGLE_REST, NEXT_STRETCH, UPDATE_TIME_REMAINING } from '../actions/types';

const INITIAL_STATE = { restToggle_b: true, stretchId: 0, timeRemaining: 10000 };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_REST:
            return { ...state, restToggle_b: !state.restToggle_b };
        case NEXT_STRETCH:
            if (state.stretchId > 8) {
                return { ...state };
            } else if (!state.restToggle_b) {
                return { ...state, stretchId: state.stretchId + 1 };
            }
            return { ...state };
        case UPDATE_TIME_REMAINING:
            console.log(action.payload);
            return { ...state, timeRemaining: action.payload };
        default:
            return state;
    }
};

