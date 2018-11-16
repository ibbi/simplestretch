import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';
import { CardSection, Card } from './common';
import { toggleRestAction, nextStretch } from '../actions';

class StretchScreen extends Component {
    restToggled() {
        this.props.toggleRestAction();
    }
    stretchComplete() {
        this.props.nextStretch();
    }
    render() {
        return (
            <Card>
                <CardSection style={{ backgroundColor: 'blue' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Image style={styles.stretchImg} source={{ uri: 'https://via.placeholder.com/300' }} />
                    </View>
                </CardSection>
                <CardSection>
                    <View style={{ justifyContent: 'center' }}>

                        <TimerCountdown
                            initialSecondsRemaining={this.props.time * 1000}
                            onTimeElapsed={() => {
                                console.log(this.props);
                                this.restToggled();
                                this.stretchComplete();
                                console.log(this.props);
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

