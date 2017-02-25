import React, { Component } from 'react';
import {
    View, TextInput, Text, TouchableOpacity
} from 'react-native';
import {BackgroundImage, Button} from './common';


class EditTask extends Component{
    render(){
        const { containerStyle, inputStyle, contentStyles, btnStyles, btnStyle } = styles;
        return(
            <View style={containerStyle}>
                <View style={contentStyles}>
                    <BackgroundImage
                        image={'http://cliparts.co/cliparts/8i6/pje/8i6pje5iE.png'}
                    >
                        <TextInput 
                            style={inputStyle}
                            placeholder="Edit Task"
                            multiline
                        />
                    </BackgroundImage>
                </View>

                <View style={btnStyles}>
                    <Button style={btnStyle}>Save</Button>

                    <Button style={btnStyle}>Resolved</Button>
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
        paddingRight: 16,
    },
    contentStyles: {
        flex: 2,
        marginBottom: 20
    },
    inputStyle: {
        flex: 1,
        paddingTop:130,
        paddingBottom: 130,
        height: 40,
        width: 200,
    },
    btnStyles: {
        backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'row',
        paddingBottom:20,
    },
    btnStyle: {
      width: 160  
    }
}
export default EditTask;