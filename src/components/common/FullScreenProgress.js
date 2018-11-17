import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class FullScreenProgress extends Component {
    render() {
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

export { FullScreenProgress };
