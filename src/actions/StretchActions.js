import { NEXT_STRETCH, TOGGLE_REST, UPDATE_TIME_REMAINING } from './types';


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
export const updateTimeRemaining = (time) => {
    return {
        type: UPDATE_TIME_REMAINING,
        payload: time
    };
};
