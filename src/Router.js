import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartScreen from './components/StartScreen';
import StretchScreen from './components/StretchScreen';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ borderBottomWidth: 0, backgroundColor: '#ff6666' }}>
            <Scene key='root' >
                <Scene
                    hideNavBar
                    key='startScreen'
                    component={StartScreen}
                    // title='Logger'
                    initial
                />
                <Scene
                    key='stretchScreen'
                    component={StretchScreen}
                    title='list of w2s'
                />
                {/* <Scene
                        key='employeeForm'
                        component={EmployeeCreate}
                        title='create employee'
                    /> */}
            </Scene>
        </Router>
    );
};

export default RouterComponent;
