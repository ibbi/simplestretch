import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Platform } from 'react-native';
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
                            -
                        </IncButton>
                        <IncButton
                            style={{ paddingLeft: 50 }}
                            onPress={this.timeAdded.bind(this)}
                        >
                            +
                        </IncButton>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '50%',
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={styles.startText}>
                                {(this.props.time * 12) / 60}
                            </Text>
                            <Text style={styles.miniText}>minutes</Text>
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
        textAlign: 'center',
        fontWeight: '200',
        fontFamily
    },
    miniText: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: -15
    }
});
const fontFamily = Platform.OS === 'ios' ? 'HelveticaNeue-Thin' : 'Roboto';

const mapStateToProps = ({ start }) => {
    return {
        time: start.time
    };
};

export default connect(mapStateToProps, {
    incrementTime,
    decrementTime
})(StartScreen);
