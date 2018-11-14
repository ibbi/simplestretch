import { INCREMENT_TIME, DECREMENT_TIME } from './types';


export const incrementTime = () => {
    return {
        type: INCREMENT_TIME
    };
};
export const decrementTime = () => {
    return {
        type: DECREMENT_TIME
    };
};
