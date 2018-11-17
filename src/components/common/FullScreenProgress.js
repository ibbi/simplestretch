import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class FullScreenProgress extends Component {
    render() {
        console.log(this);
        return (
            <View style={{ width: '100%', height: '100%', position: 'absolute' }}>

                <View style={styles.pBarBottom}>

                </View>
                <View style={styles.pBarTop}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    pBarBottom: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'yellow'
    },
    pBarTop: {
        position: 'absolute',
        height: '30%',
        width: '100%',
        backgroundColor: 'pink'
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
