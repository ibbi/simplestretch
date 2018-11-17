import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';
import { CardSection, Card, FullScreenProgress } from './common';
import { toggleRestAction, nextStretch } from '../actions';

class StretchScreen extends Component {
    componentDidUpdate() {
        console.log('tre');
    }
    restToggled() {
        this.props.toggleRestAction();
    }
    stretchComplete() {
        this.props.nextStretch();
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
                        <Image style={styles.stretchImg} source={{ uri: 'https://via.placeholder.com/300' }} />
                    </View>
                </CardSection>
                <CardSection>
                    <View style={{ justifyContent: 'center' }}>

                        <TimerCountdown
                            initialSecondsRemaining={this.renderTimer() * 1000}
                            onTimeElapsed={() => {
                                this.stretchComplete();
                                this.restToggled();
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

export default connect(mapStateToProps, { toggleRestAction, nextStretch })(StretchScreen);

