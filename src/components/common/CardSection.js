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
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: '#ff6666',
        flex: 1
    }

};

export { CardSection };
