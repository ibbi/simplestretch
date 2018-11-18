import { NEXT_STRETCH, TOGGLE_REST, RESET_STRETCHES } from './types';


export const nextStretch = () => {
    return {
        type: NEXT_STRETCH
    };
};
export const toggleRestAction = () => {
    return {
        type: TOGGLE_REST
    };
};
export const resetStretches = () => {
    return {
        type: RESET_STRETCHES
    };
};

