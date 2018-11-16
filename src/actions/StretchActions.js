import { NEXT_STRETCH, TOGGLE_REST } from './types';


export const nextStretch = () => {
    return {
        type: NEXT_STRETCH
    };
};
export const toggleRest = () => {
    return {
        type: TOGGLE_REST
    };
};
