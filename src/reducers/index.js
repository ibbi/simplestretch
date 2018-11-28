import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import StartScreenReducer from './StartScreenReducer';
import StretchScreenReducer from './StretchScreenReducer';

const rootReducer = combineReducers({
    start: StartScreenReducer,
    stretch: StretchScreenReducer
});
const persistConfig = {
    key: 'root',
    storage
};

export default persistReducer(persistConfig, rootReducer);
