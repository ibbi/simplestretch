import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Image } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';
import { CardSection, Card } from './common';

class StretchScreen extends Component {
    render() {
        return (
            <Card>
                <CardSection style={{ backgroundColor: 'blue' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Image style={styles.stretchImg} source={{ uri: 'https://via.placeholder.com/300' }} />
                        {console.log(this)}
                    </View>
                </CardSection>
                <CardSection>
                    <View style={{ justifyContent: 'center' }}>

                        <TimerCountdown
                            initialSecondsRemaining={this.props.time * 1000}
                            onTimeElapsed={() => console.log('complete')}
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

const mapStateToProps = ({ start }) => {
    return {
        time: start.time
    };
};

export default connect(mapStateToProps)(StretchScreen);

