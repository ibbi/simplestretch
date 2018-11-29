import { GET_STREAK } from './types';


export const getStreak = (msTime) => {
    return {
        type: GET_STREAK,
        payload: msTime
    };
};
