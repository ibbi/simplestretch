import { GET_STREAK } from '../actions/types';

const INITIAL_STATE = { streak: 1, lastStretched: new Date().getTime() };
export default (state = INITIAL_STATE, action) => {
    if (action.type === GET_STREAK) {
        const dayInMs = 24 * 60 * 60 * 1000;
        const justStretched = action.payload;

        const currentDate = new Date(justStretched).getDate();
        const currentMonth = new Date(justStretched).getMonth();
        const currentYear = new Date(justStretched).getFullYear();
        const fullCurrentDate = `${currentDate}${currentMonth}${currentYear}`;

        const lastStretchedDate = new Date(state.lastStretched).getDate();
        const lastStretchedMonth = new Date(state.lastStretched).getMonth();
        const lastStretchedYear = new Date(state.lastStretched).getFullYear();
        const fullLastStretchedDate = `${lastStretchedDate}${lastStretchedMonth}${lastStretchedYear}`;

        const streakDate = new Date(state.lastStretched + dayInMs).getDate();
        const streakMonth = new Date(state.lastStretched + dayInMs).getMonth();
        const streakYear = new Date(state.lastStretched + dayInMs).getFullYear();
        const fullStreakDate = `${streakDate}${streakMonth}${streakYear}`;

        if (fullCurrentDate === fullLastStretchedDate) {
            return { ...state };
        } else if (fullCurrentDate === fullStreakDate) {
            return { ...state, streak: state.streak + 1, lastStretched: justStretched };
        }
        return { ...state, ...INITIAL_STATE, lastStretched: justStretched };
    } return state;
};
