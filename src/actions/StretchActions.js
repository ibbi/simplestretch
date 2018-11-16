import { NEXT_STRETCH, TOGGLE_REST } from './types';


export const nextStretch = () => {
    console.log('tre');
    return {
        type: NEXT_STRETCH
    };
};
export const toggleRestAction = () => {
    console.log('action');
    return {
        type: TOGGLE_REST
    };
};
