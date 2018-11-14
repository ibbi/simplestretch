import React, { Component } from 'react';
import { View } from 'react-native';
import RouterComponent from './Router';

class App extends Component {
    render() {
        // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            // <Provider store={store} >
            <View style={{ flex: 1 }}>
                <RouterComponent />
            </View>
            // </Provider>
        );
    }
}

export default App;
