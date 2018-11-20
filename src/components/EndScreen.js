import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class EndScreen extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text>loot</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={() => Actions.startScreen()}>restart</Button>
                </CardSection>
            </Card>
        );
    }

}

export default EndScreen;

