import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image, Modal, Text, SafeAreaView, Platform } from 'react-native';
import Sound from 'react-native-sound';
import { Actions } from 'react-native-router-flux';
import TimerCountdown from 'react-native-timer-countdown';
import { CardSection, Card, Button, InfoButton } from './common';
import { stretchList } from './StretchList';
import { toggleRestAction, nextStretch, resetStretches } from '../actions';
import FullScreenProgress from './common/FullScreenProgress';
import colors from './Colors';

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
    formatSecondsRemaining(milliseconds) {
        const remainingSec = Math.round(milliseconds / 1000);
        const seconds = parseInt((remainingSec).toString(), 10);
        return seconds;
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
                    (this.props.stretchId === 3) || (this.props.stretchId === 7) || (this.props.stretchId === 11) ? 'Switch Sides' :
                        'Get In Position' :
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
                formatSecondsRemaining={(milliseconds) => this.formatSecondsRemaining(milliseconds)}
                allowFontScaling
                style={{ fontFamily, fontSize: 100, fontWeight: '200' }}
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
                    <SafeAreaView style={{ flex: 1, backgroundColor: colors.main }}>

                        <Card>
                            <CardSection style={{ padding: 10 }}>
                                <Text
                                    style={styles.modalText}
                                >
                                    <Text>
                                        <Text style={{ fontWeight: '500' }}>Beginner</Text>
                                        {`\n${stretchList[this.props.stretchId].desc.Beginner}\n\n`}
                                    </Text>
                                    <Text>
                                        <Text style={{ fontWeight: '500' }}>Intermediate</Text>
                                        {`\n${stretchList[this.props.stretchId].desc.Intermediate}\n\n`}
                                    </Text>
                                    <Text>
                                        <Text style={{ fontWeight: '500' }}>Advanced</Text>
                                        {`\n${stretchList[this.props.stretchId].desc.Advanced}\n\n`}
                                    </Text>
                                </Text>
                            </CardSection>
                            <CardSection>
                                <Button
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                >
                                    <Text>close</Text>
                                </Button>
                            </CardSection>
                        </Card>
                    </SafeAreaView>
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
                        <Text style={styles.miniText}>seconds</Text>
                    </View>
                </CardSection>
                <InfoButton
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                    style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%'
                    }}
                >tap for description </InfoButton>
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
    modalText: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '200'
    },
    miniText: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: -15
    }
});
const fontFamily = Platform.OS === 'ios' ? 'HelveticaNeue-Thin' : 'Roboto';

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

