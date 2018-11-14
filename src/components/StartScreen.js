import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Button, IncButton } from './common';
import { incrementTime, decrementTime } from '../actions';

class StartScreen extends Component {
    timeAdded() {
        this.props.incrementTime();
    }
    timeRemoved() {
        this.props.decrementTime();
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <IncButton OnPress={this.timeAdded.bind(this)} >-</IncButton>
                    <Text style={{ alignSelf: 'center', fontSize: 100, color: 'black' }}> 55 </Text>
                    <IncButton OnPress={this.timeRemoved.bind(this)}>+</IncButton>
                </CardSection>
                <CardSection>
                    <Button>start</Button>
                </CardSection>
            </Card >
        );
    }
}

const mapStateToProps = ({ start }) => {
    return {
        timer: start.timer
    };
};

export default connect(mapStateToProps, {
    incrementTime,
    decrementTime
})(StartScreen);
