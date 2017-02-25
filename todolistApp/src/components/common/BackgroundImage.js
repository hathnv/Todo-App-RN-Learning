import React, { PropTypes, Component } from 'react';

import {
    Image
} from 'react-native';


const BackgroundImage = ({image, children}) => {
        const {imageStyles} = styles;
        return(
            <Image
                source={{uri: image}}
                style={imageStyles}
            >
            {children}
            </Image>
        );
}
const styles = {
    imageStyles: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        borderColor: '#ddd',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        alignItems: 'center',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        padding: 5,
    }
};

export {BackgroundImage}