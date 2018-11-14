import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';

class StartScreen extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text style={{ fontSize: 40, color: 'black' }}></Text>
                </CardSection>
                <CardSection>
                    <Button>start</Button>
                </CardSection>
            </Card >
        );
    }
}
