import { combineReducers } from 'redux';
import StartScreenReducer from './StartScreenReducer';
import StretchScreenReducer from './StretchScreenReducer';
import StretchObjectReducer from './StretchObjectReducer';

export default combineReducers({
    start: StartScreenReducer,
    stretch: StretchScreenReducer,
    stretchList: StretchObjectReducer
});
