import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import Sound from 'react-native-sound';
import { Actions } from 'react-native-router-flux';
import TimerCountdown from 'react-native-timer-countdown';
import { CardSection, Card, InfoButton, Button, IncButton } from './common';
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
    changeDescription() {
        if (this.state.descriptionID === 2) {
            this.setState({ descriptionID: 0 });
            return;
        } else if (this.state.descriptionID === 1) {
            this.setState({ descriptionID: 2 });
            return;
        } this.setState({ descriptionID: 1 });
        return;
    }
    decideNextMove() {
        beep.play();
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
                <Text
                    style={styles.modalText}
                >
                    <Text>{'\n'}Beginner   Intermediate   <Text style={{ fontWeight: '500', textDecorationLine: 'underline' }}>Advanced</Text></Text>
                    {`\n\n${stretchList[this.props.stretchId].desc.Advanced}`}
                </Text>
            );
        } else if (this.state.descriptionID === 1) {
            return (
                <Text
                    style={styles.modalText}
                >
                    <Text>{'\n'}Beginner   <Text style={{ fontWeight: '500', textDecorationLine: 'underline' }}>Intermediate</Text>   Advanced</Text>
                    {`\n\n${stretchList[this.props.stretchId].desc.Intermediate}`}
                </Text>
            );
        }
        return (
            <Text
                style={styles.modalText}
            >
                <Text style={{ fontWeight: '500', textDecorationLine: 'underline' }}>{'\n'}Beginner</Text><Text>   Intermediate   Advanced</Text>
                {`\n\n${stretchList[this.props.stretchId].desc.Beginner}`}
            </Text>
        );
    }
    renderTimer() {
        if (this.state.modalVisible) {
            return (
                <CardSection style={{ flexDirection: 'column', paddingLeft: 10, paddingRight: 10, backgroundColor: colors.tappable, justifyContent: 'space-between' }}>
                    {this.renderDescription()}
                    <Button
                        onPress={() => {
                            this.changeDescription();
                        }}
                        style={{ flexShrink: 0 }}
                    >
                        next
                    </Button>
                </CardSection>
            );
        } return (
            <CardSection>
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
                    <View style={{ justifyContent: 'center' }}>
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
                                color: colors.textMedium
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
        width: 300,
        height: 300,
        margin: 5
    },
    modalText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '200',
        flex: 1
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

