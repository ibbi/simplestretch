import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Sound from 'react-native-sound';
import { Card, CardSection, Button } from './common';

class EndScreen extends Component {
    componentWillMount() {
        beep.play();
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Text>loot</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={() => Actions.replace('startScreen')}>restart</Button>
                </CardSection>
            </Card>
        );
    }

}

const beep = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
});

export default EndScreen;

