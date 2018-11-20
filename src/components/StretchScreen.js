import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import Sound from 'react-native-sound';
import { Actions } from 'react-native-router-flux';
import TimerCountdown from 'react-native-timer-countdown';
import { CardSection, Card } from './common';
import { toggleRestAction, nextStretch, resetStretches } from '../actions';
// import stretchList from './Stretches.json';
import FullScreenProgress from './common/FullScreenProgress';

class StretchScreen extends Component {
    componentWillMount() {
        this.resetState();
    }
    restToggled() {
        this.props.toggleRestAction();
    }
    stretchComplete() {
        this.props.nextStretch();
    }
    timeTicked(time) {
        this.props.updateTimeRemaining(time);
    }
    resetState() {
        this.props.resetStretches();
    }
    decideNextMove() {
        beep.play();
        if (!this.props.restToggle_b && this.props.stretchId > 10) {
            setTimeout(() => {
                return () => Actions.endScreen();
            }, 1000);
        } return () => {
            this.stretchComplete();
            this.restToggled();
            Actions.refresh({
                title: this.props.restToggle_b ?
                    `Next: ${stretchList[this.props.stretchId].name}` :
                    `${stretchList[this.props.stretchId].name}`
            });
        };
    }
    renderTimer() {
        if (this.props.restToggle_b) {
            return (10);
        } return (this.props.time);
    }
    render() {
        return (
            <Card>
                <FullScreenProgress />
                <CardSection>
                    <View style={{ justifyContent: 'center' }}>
                        <Image
                            style={styles.stretchImg}
                            source={stretchList[this.props.stretchId].img}
                        />
                    </View>
                </CardSection>
                <CardSection>
                    <View style={{ justifyContent: 'center' }}>
                        <TimerCountdown
                            initialSecondsRemaining={this.renderTimer() * 1000}
                            onTimeElapsed={this.decideNextMove()}
                            allowFontScaling
                            style={{ fontSize: 100 }}
                        />

                    </View>
                </CardSection>
            </Card>
        );
    }

}

const styles = StyleSheet.create({

    stretchImg: {
        width: 300,
        height: 300,
        margin: 5
    },
});

const mapStateToProps = ({ start, stretch }) => {
    return {
        time: start.time,
        restToggle_b: stretch.restToggle_b,
        stretchId: stretch.stretchId
    };
};
const beep = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
});
const stretchList = [
    {
        name: 'Shoulder Extension',
        img: require('../design_resources/stretch0.png')
    },
    {
        name: 'Underarm Shoulder Stretch',
        img: require('../design_resources/stretch1.png')
    },
    {
        name: 'Rear Hand Clasp',
        img: require('../design_resources/stretch2a.png')
    },
    {
        name: 'Rear Hand Clasp',
        img: require('../design_resources/stretch2b.png')
    },
    {
        name: 'Full Squat',
        img: require('../design_resources/stretch3.png')
    },
    {
        name: 'Standing Pike',
        img: require('../design_resources/stretch4.png')
    },
    {
        name: 'Kneeling Lunge',
        img: require('../design_resources/stretch5a.png')
    },
    {
        name: 'Kneeling Lunge',
        img: require('../design_resources/stretch5b.png')
    },
    {
        name: 'Butterfly',
        img: require('../design_resources/stretch6.png')
    },
    {
        name: 'Backbend',
        img: require('../design_resources/stretch7.png')
    },
    {
        name: 'Lying Twist',
        img: require('../design_resources/stretch8a.png')
    },
    {
        name: 'Lying Twist',
        img: require('../design_resources/stretch8b.png')
    }
];

export default connect(mapStateToProps, {
    toggleRestAction,
    nextStretch,
    resetStretches
})(StretchScreen);

