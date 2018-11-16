import { TOGGLE_REST, NEXT_STRETCH } from '../actions/types';

const INITIAL_STATE = { restToggle: true, stretchId: 0 };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_REST:
            return { ...state, restToggle: !state.restToggle };
        case NEXT_STRETCH:
            if (state.stretchId > 3) {
                return { ...state };
            } else if (!state.restToggle) {
                return { ...state, stretchId: state.stretchId + 1 };
            }
            return { ...state };
        default:
            return state;
    }
};

