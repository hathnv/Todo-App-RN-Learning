import React from 'react';
import {
    TouchableOpacity, Text
} from 'react-native';

const Button = ({ onPress, children }) => {
    const { btnStyles, textStyles } = styles;
    return(
        <TouchableOpacity style={btnStyles} onPress={onPress}>
            <Text style={textStyles}>{ children }</Text>
        </TouchableOpacity>
    );
};

const styles = {
    btnStyles: {
        borderRadius: 4,
        backgroundColor: '#D8202A',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: null,
        position: 'relative',
        shadowColor: '#82b1ff',
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2,
        elevation: 2,
        alignSelf: "stretch",
        marginLeft: 10,
        marginRight: 10
    },

    textStyles: {
        padding: 10,
        color: '#fff',
        fontSize: 16
    }
};

export { Button };