import { TOGGLE_REST, NEXT_STRETCH } from '../actions/types';

const INITIAL_STATE = { restToggle_b: true, stretchId: 0 };
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
        default:
            return state;
    }
};

