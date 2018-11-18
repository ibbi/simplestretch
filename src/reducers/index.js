import { combineReducers } from 'redux';
import StartScreenReducer from './StartScreenReducer';
import StretchScreenReducer from './StretchScreenReducer';

export default combineReducers({
    start: StartScreenReducer,
    stretch: StretchScreenReducer
});
