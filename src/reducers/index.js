import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import StartScreenReducer from './StartScreenReducer';
import StretchScreenReducer from './StretchScreenReducer';
import EndScreenReducer from './EndScreenReducer';

const rootReducer = combineReducers({
    start: StartScreenReducer,
    stretch: StretchScreenReducer,
    end: EndScreenReducer
});
const persistConfig = {
    key: 'root',
    storage
};

export default persistReducer(persistConfig, rootReducer);
