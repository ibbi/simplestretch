import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image, Text, Platform, Vibration, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import KeepAwake from 'react-native-keep-awake';
import { Actions } from 'react-native-router-flux';
import TimerCountdown from 'react-native-timer-countdown';
import { CardSection, Card, InfoButton } from './common';
import { stretchList } from './StretchList';
import { toggleRestAction, nextStretch, resetStretches } from '../actions';
import FullScreenProgress from './common/FullScreenProgress';
import colors from './Colors';

class StretchScreen extends Component {
    state = {
        modalVisible: false,
        descriptionID: 0
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
        if (!this.props.restToggle_b) {
            this.setState({ descriptionID: 0 });
        }
        this.props.nextStretch();
    }
    resetState() {
        this.props.resetStretches();
    }
    changeDescription(id) {
        this.setState({ descriptionID: id });
        return;
    }
    decideNextMove() {
        beep.play();
        Vibration.vibrate(500);
        if (!this.props.restToggle_b && this.props.stretchId > 10) {
            return () => Actions.replace('endScreen');
        } return () => {
            this.stretchComplete();
            this.restToggled();
            Actions.refresh({
                title: `Stretch ${this.props.stretchId + 1} of ${stretchList.length}`
            });
        };
    }
    decideSecondsRemaining() {
        if (this.props.restToggle_b) {
            return (10);
        } return (this.props.time);
    }
    renderDescription() {
        if (this.state.descriptionID === 2) {
            return (
                <CardSection style={{ flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, backgroundColor: colors.tappable }}>

                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.changeDescription(0)}>
                            <Text style={styles.modalTextTappable}>Beginner</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.changeDescription(1)}>
                            <Text style={styles.modalTextTappable}>Intermediate</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalTextSelected}>Advanced</Text>
                    </View >
                    <Text style={styles.modalText}>
                        {
                            `\n${stretchList[this.props.stretchId].desc.Advanced}`
                        }
                    </Text>
                </CardSection>
            );
        } else if (this.state.descriptionID === 1) {
            return (
                <CardSection style={{ flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, backgroundColor: colors.tappable }}>

                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.changeDescription(0)}>
                            <Text style={styles.modalTextTappable}>Beginner</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalTextSelected}>Intermediate</Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.changeDescription(2)}>
                            <Text style={styles.modalTextTappable}>Advanced</Text>
                        </TouchableOpacity>
                    </View >
                    <Text style={styles.modalText}>
                        {
                            `\n${stretchList[this.props.stretchId].desc.Intermediate}`
                        }
                    </Text>
                </CardSection>
            );
        }
        return (
            <CardSection style={{ flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, backgroundColor: colors.tappable }}>

                <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text style={styles.modalTextSelected}>Beginner</Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.changeDescription(1)}>
                        <Text style={styles.modalTextTappable}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.changeDescription(2)}>
                        <Text style={styles.modalTextTappable}>Advanced</Text>
                    </TouchableOpacity>
                </View >
                <Text style={styles.modalText}>
                    {
                        `\n${stretchList[this.props.stretchId].desc.Beginner}`
                    }
                </Text>
            </CardSection>
        );
    }
    renderTimer() {
        if (this.state.modalVisible) {
            return (
                this.renderDescription()
            );
        } return (
            <CardSection>
                <KeepAwake />
                <View style={{ justifyContent: 'center' }}>
                    <TimerCountdown
                        initialSecondsRemaining={this.decideSecondsRemaining() * 1000}
                        onTimeElapsed={this.decideNextMove()}
                        formatSecondsRemaining={(milliseconds) => this.formatSecondsRemaining(milliseconds)}
                        allowFontScaling
                        style={{ fontFamily, fontSize: 100, fontWeight: '200' }}
                    />
                    <Text style={styles.miniText}>seconds</Text>
                </View>
            </CardSection>
        );
    }
    renderCenterText() {
        if (this.state.modalVisible) {
            return (
                `${stretchList[this.props.stretchId].name}`
            );
        } return (
            this.props.restToggle_b ?
                (this.props.stretchId === 3) || (this.props.stretchId === 7) || (this.props.stretchId === 11) ? 'switch sides' :
                    'get in position' :
                'stretch'
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
                <CardSection>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={styles.stretchImg}
                            source={stretchList[this.props.stretchId].img}
                        />
                        <InfoButton
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                            style={{
                                position: 'absolute',
                                height: '100%',
                                width: '100%'
                            }}
                            modalVisible={this.state.modalVisible}
                        />
                        <Text
                            style={{
                                fontSize: 30,
                                alignSelf: 'center',
                                fontWeight: '200',
                                color: colors.textDark
                            }}
                        >
                            {this.renderCenterText()}
                        </Text>
                    </View>
                </CardSection>
                {this.renderTimer()}
            </Card >
        );
    }

}

const styles = StyleSheet.create({

    stretchImg: {
        width: 180,
        height: 180,
        marginTop: 40,
        marginBottom: 20
    },
    modalText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '200',
        flex: 1
    },
    modalTextTappable: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '300',
        flex: 1,
        color: colors.textLight
    },
    modalTextSelected: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        textDecorationLine: 'underline',
        fontWeight: '500'
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

