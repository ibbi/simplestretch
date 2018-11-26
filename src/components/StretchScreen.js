import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image, Modal, Text } from 'react-native';
import Sound from 'react-native-sound';
import { Actions } from 'react-native-router-flux';
import TimerCountdown from 'react-native-timer-countdown';
import { CardSection, Card, Button } from './common';
import { stretchList } from './StretchList';
import { toggleRestAction, nextStretch, resetStretches } from '../actions';
import FullScreenProgress from './common/FullScreenProgress';

class StretchScreen extends Component {
    state = {
        modalVisible: false,
        resetTimer: 1
    };
    componentWillMount() {
        this.resetState();
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    restToggled() {
        this.props.toggleRestAction();
    }
    stretchComplete() {
        this.props.nextStretch();
    }
    resetState() {
        this.props.resetStretches();
    }
    decideNextMove() {
        beep.play();
        if (!this.props.restToggle_b && this.props.stretchId > 10) {
            return () => Actions.replace('endScreen');
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
    decideSecondsRemaining() {
        if (this.props.restToggle_b) {
            return (10);
        } return (this.props.time);
    }
    renderTimer() {
        if (this.state.modalVisible) {
            return;
        } return (
            <TimerCountdown
                initialSecondsRemaining={this.decideSecondsRemaining() * 1000}
                onTimeElapsed={this.decideNextMove()}
                allowFontScaling
                style={{ fontSize: 100 }}
            />
        );
    }
    renderProgressBar() {
        if (this.state.modalVisible) {
            return;
        } return (
            <FullScreenProgress />

        );
    }
    render() {
        return (
            <Card>
                {this.renderProgressBar()}
                <Modal
                    animationType={'slide'} transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { console.log('Modal has been closed.'); }}
                >
                    <Text>{`${stretchList[this.props.stretchId].desc}`}</Text>
                    <Button
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <Text>X</Text>
                    </Button>
                </Modal>
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
                        {this.renderTimer()}
                    </View>
                </CardSection>
                <Button
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                    style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%'
                    }}
                > ? </Button>
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

export default connect(mapStateToProps, {
    toggleRestAction,
    nextStretch,
    resetStretches
})(StretchScreen);

