import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TimerCountdown from 'react-native-timer-countdown';
import { CardSection, Card } from './common';
import { toggleRestAction, nextStretch, resetStretches } from '../actions';
import stretchList from './Stretches.json';
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
        if (!this.props.restToggle_b && this.props.stretchId > 7) {
            console.log('jenesequoi');
            console.log(this.props);
            return () => Actions.startScreen();
        }
        console.log(this.props);
        return () => {
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
                            source={{ uri: `${stretchList[this.props.stretchId].img}` }}
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

export default connect(mapStateToProps, {
    toggleRestAction,
    nextStretch,
    resetStretches
})(StretchScreen);

