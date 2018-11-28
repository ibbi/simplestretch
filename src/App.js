import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore, applyMiddleware } from 'redux';
import RouterComponent from './Router';
import reducers from './reducers';

class App extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        const persistor = persistStore(store);
        return (
            <Provider store={store} >
                <PersistGate loading={null} persistor={persistor}>
                    <View style={{ flex: 1 }}>
                        <RouterComponent />
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
