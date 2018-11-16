import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
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
                    <View style={styles.incrementView} >
                        <IncButton
                            style={{ paddingRight: 50 }}
                            onPress={this.timeRemoved.bind(this)}
                        >
                            {console.log(this)}
                            -
                        </IncButton>
                        <IncButton
                            style={{ paddingLeft: 50 }}
                            onPress={this.timeAdded.bind(this)}
                        >
                            +
                        </IncButton>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', width: '50%', alignItems: 'center', backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
                            <Text style={styles.startText}> {((this.props.time * 9) + this.props.time) / 60} </Text>
                            <View style={{ backgroundColor: 'yellow', justifyContent: 'flex-end' }}>
                                <Text style={styles.miniText}>m</Text>
                            </View>
                        </View>
                    </View>

                </CardSection>
                <CardSection>
                    <Button onPress={() => Actions.stretchScreen()}>start</Button>
                </CardSection>
            </Card >
        );
    }
}

const styles = StyleSheet.create({
    incrementView: {
        zIndex: 1,
        position: 'absolute',
        flexDirection: 'row',
        height: '100%',
        width: '100%'
    },
    startText: {
        fontSize: 100,
        color: 'black',
        width: 138,
        backgroundColor: 'pink',
        textAlign: 'right'
    },
    miniText: {
        fontSize: 15
    }
});

const mapStateToProps = ({ start }) => {
    return {
        time: start.time
    };
};

export default connect(mapStateToProps, {
    incrementTime,
    decrementTime
})(StartScreen);
