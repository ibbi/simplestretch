import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { children, onPress } = props;
    const { btnStyle, txtStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={[btnStyle, props.style]}>
            <Text style={txtStyle}>{children}</Text>
        </TouchableOpacity >
    );
};

const styles = {
    btnStyle: {
        backgroundColor: 'white',
        borderWidth: 0,
        flex: 1,
    },
    txtStyle: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: '600'
    }
};
export { Button };
