import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';

class FullScreenProgress extends Component {
    constructor(props) {
        super(props);
        this.state = { height: new Animated.Value(this.props.restToggle_b ? 100 : 0) };
    }
    componentWillUpdate() {
        this.toggleHeight();
    }
    toggleHeight() {
        const endHeight = this.props.restToggle_b ? 0 : 100;

        Animated.timing(this.state.height, {
            toValue: endHeight,
            duration: this.props.restToggle_b ? this.props.time * 1000 : 10000,
            easing: Easing.linear
        }).start();
    }
    render() {
        return (
            <View style={{ width: '100%', height: '100%', position: 'absolute' }}>

                <View style={styles.pBarBottom} />
                <Animated.View
                    style={{
                        ...styles.pBarTop,
                        height: this.state.height.interpolate({
                            inputRange: [0, 100],
                            outputRange: ['0%', '100%'],
                            extrapolate: 'clamp'
                        })
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    pBarBottom: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#ff9696'
    },
    pBarTop: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#ff6666'
    }
});

const mapStateToProps = ({ start, stretch }) => {
    return {
        time: start.time,
        restToggle_b: stretch.restToggle_b,
        stretchId: stretch.stretchId
    };
};

export default connect(mapStateToProps)(FullScreenProgress);
