import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
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
                    <View style={{ zIndex: 1, position: 'absolute', flexDirection: 'row', height: '100%', width: '100%' }}>
                        <IncButton style={{ paddingRight: 50 }} onPress={this.timeRemoved.bind(this)} >-</IncButton>
                        <IncButton style={{ paddingLeft: 50 }} onPress={this.timeAdded.bind(this)}>+</IncButton>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 100, color: 'black' }}> {this.props.time} </Text>
                    </View>

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
        time: start.time
    };
};

export default connect(mapStateToProps, {
    incrementTime,
    decrementTime
})(StartScreen);
