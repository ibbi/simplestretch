import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartScreen from './components/StartScreen';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar >
                <Scene key='auth' initial>
                    <Scene
                        key='startScreen'
                        component={StartScreen}
                        // title='Logger'
                        hideNavBar
                    />
                </Scene>
                {/* <Scene key='main'>
                    <Scene
                        key='employeeList'
                        component={EmployeeList}
                        title='list of w2s'
                        rightTitle='Add'
                        onRight={() => Actions.employeeForm()}
                        initial
                    />
                    <Scene
                        key='employeeForm'
                        component={EmployeeCreate}
                        title='create employee'
                    />
                </Scene> */}
            </Scene>
        </Router>
    );
};

export default RouterComponent;
