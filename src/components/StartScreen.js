import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button } from './common';

class StartScreen extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text style={{ fontSize: 40, color: 'black' }}> 55 </Text>
                </CardSection>
                <CardSection>
                    <Button>start</Button>
                </CardSection>
            </Card >
        );
    }
}
export default StartScreen;

