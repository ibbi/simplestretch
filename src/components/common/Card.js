import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { contStyle } = styles;
    return (
        <View style={contStyle}>{props.children}</View>
    );
};

const styles = {
    contStyle: {
        justifyContent: 'space-around',
        flex: 1,
        backgroundColor: 'white',
        elevation: 1
    }

};

export { Card };
