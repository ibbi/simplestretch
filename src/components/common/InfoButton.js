import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../Colors';

const InfoButton = (props) => {
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
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: '300',
        color: colors.textDark
    }
};
export { InfoButton };
