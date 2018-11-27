import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartScreen from './components/StartScreen';
import StretchScreen from './components/StretchScreen';
import EndScreen from './components/EndScreen';
import colors from './components/Colors';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: colors.main }}>
            <Scene key='root' >
                <Scene
                    hideNavBar
                    key='startScreen'
                    component={StartScreen}
                    initial
                />
                <Scene
                    key='stretchScreen'
                    component={StretchScreen}
                    title='Get In Position'
                />
                <Scene
                    hideNavBar
                    key='endScreen'
                    component={EndScreen}
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
