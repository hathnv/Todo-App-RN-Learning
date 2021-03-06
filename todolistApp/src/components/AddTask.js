import React, { Component } from 'react';
import {
    View, TextInput, Text
} from 'react-native';
import {BackgroundImage, Button} from './common';

class AddTask extends Component {
    render() {
        const { containerStyle, textStyle, inputStyle } = styles;
        return(
            <View style={containerStyle}>
                <View style={{flex: 2, marginBottom:20}}>
                    <BackgroundImage
                        image={'http://cliparts.co/cliparts/8i6/pje/8i6pje5iE.png'}
                    >
                        <TextInput 
                            style={inputStyle}
                            placeholder="Add new Task"
                            multiline
                        />
                    </BackgroundImage>
                </View>

                <View style={{marginBottom:20, flex: 1}}>
                    <Button>Save</Button>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16
    },
    textStyle: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 18
    },
    inputStyle: {
        flex: 1,
        paddingTop:130,
        paddingBottom: 130,
        height: 40,
        width: 200,
    },
}

export default AddTask;