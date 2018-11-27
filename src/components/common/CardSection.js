import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { contStyle } = styles;
    return (
        <View style={[contStyle, props.style]}>{props.children}</View>
    );
};

const styles = {
    contStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        flex: 1
    }

};

export { CardSection };
