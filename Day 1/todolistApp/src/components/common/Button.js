import React, { PropTypes } from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';

const propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
};

const Button = ({ title, onPress }) => {

    const {buttonContainer, buttonTitle} = styles;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonContainer}
        >
            <Text style={buttonTitle}>{title}</Text>
        </TouchableOpacity >
    );
};

Button.propTypes = propTypes;

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#D8202A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 24,
    }
};

export { Button };
