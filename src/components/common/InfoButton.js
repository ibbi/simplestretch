import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../Colors';

const InfoButton = (props) => {
    const { onPress } = props;
    const { btnStyle, txtStyle, clickable } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={[btnStyle, props.style]}>
            <View style={{ marginTop: 8, flex: 1, justifyContent: 'flex-start' }}>

                <Text
                    style={txtStyle}
                >
                    tap {props.modalVisible ?
                        'to ' :
                        'for '}
                    {props.modalVisible ?
                        <Text style={clickable}>return</Text> :
                        <Text style={clickable}>description</Text>}
                </Text>
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
        fontWeight: '200'
    },
    clickable: {
        color: colors.textClickable,
        fontWeight: '300'
    }
};
export { InfoButton };
