import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';
import { CardSection, Card } from './common';
import { toggleRestAction } from '../actions';

class StretchScreen extends Component {
    restToggled() {
        console.log('resttoggled');
        this.props.toggleRestAction();
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
                                console.log('insidetimer');
                                this.restToggled();
                                console.log('insidetimer');
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
        restToggle_b: stretch.restToggle_b
    };
};

export default connect(mapStateToProps, { toggleRestAction })(StretchScreen);

