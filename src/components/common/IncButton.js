import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const IncButton = (props) => {
    const { children, onPress } = props;
    const { btnStyle, txtStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={[btnStyle, props.style]}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={txtStyle}>{children}</Text>
            </View>
        </TouchableOpacity >
    );
};

const styles = {
    btnStyle: {
        borderWidth: 0,
        flex: 1,
        alignSelf: 'stretch'
    },
    txtStyle: {
        fontSize: 100,
        alignSelf: 'center',
        fontWeight: '200'
    }
};
export { IncButton };
