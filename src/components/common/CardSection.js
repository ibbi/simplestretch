import React from 'react';
import { Text, View } from 'react-native';

const CardSection = (props) => {
    const { contStyle } = styles;
    return (
        <View style={[contStyle, props.style]}>{props.children}</View>
    );
};

const styles = {
    contStyle: {
        padding: 15,
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative'
    }

};

export { CardSection };
