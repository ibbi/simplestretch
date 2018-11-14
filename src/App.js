import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import RouterComponent from './Router';
import reducers from './reducers';

class App extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} >
                <View style={{ flex: 1 }}>
                    <RouterComponent />
                </View>
            </Provider>
        );
    }
}

export default App;
