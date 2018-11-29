import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Vibration } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Sound from 'react-native-sound';
import { getStreak } from '../actions';
import { Card, CardSection, Button } from './common';

class EndScreen extends Component {
    componentWillMount() {
        this.updateStreak();
        endBeep.play();
        Vibration.vibrate(Platform.OS === 'ios' ? [500, 500, 500] : [500, 500, 500, 500, 500, 500]);
    }
    updateStreak() {
        this.props.getStreak(new Date().getTime());
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={styles.startText}>
                            {this.props.streak}
                        </Text>
                        <Text style={styles.miniText}>day streak</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Button onPress={() => Actions.replace('startScreen')}>restart</Button>
                </CardSection>
            </Card>
        );
    }

}

const endBeep = new Sound('endBeep.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
});

const styles = StyleSheet.create({
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

const mapStateToProps = ({ end }) => {
    return {
        streak: end.streak,
        lastStretched: end.lastStretched
    };
};

export default connect(mapStateToProps, {
    getStreak
})(EndScreen);

