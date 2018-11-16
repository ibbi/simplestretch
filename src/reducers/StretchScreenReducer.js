import { TOGGLE_REST } from '../actions/types';

const INITIAL_STATE = { restToggle_b: true, stretchId: 0 };
export default (state = INITIAL_STATE, action) => {
    console.log('reducer');
    switch (action.type) {
        case TOGGLE_REST:
            return { ...state, restToggle_b: !state.restToggle_b };
        // case NEXT_STRETCH:
        //     console.log('bezrop');
        //     if (state.stretchId > 3) {
        //         return { ...state };
        //     } else if (state.restToggle_b) {
        //         console.log('beeop');
        //         return { ...state, stretchId: state.stretchId + 1 };
        //     }
        //     return { ...state };
        default:
            return state;
    }
};

