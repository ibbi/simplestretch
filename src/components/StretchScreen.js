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
    componentDidUpdate() {

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
    backButtonPressed() {
        console.log('wow');
        this.props.resetStretches();
    }
    renderTimer() {
        if (this.props.restToggle_b) {
            return (10);
        } return (this.props.time);
    }

    render() {
        console.log(this);
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
                            onTimeElapsed={() => {
                                this.stretchComplete();
                                this.restToggled();
                                Actions.refresh({
                                    title: this.props.restToggle_b ?
                                        `Next: ${stretchList[this.props.stretchId].name}` :
                                        `${stretchList[this.props.stretchId].name}`,
                                    onExit: () => { console.log('lit'); }
                                });
                            }}
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

