import React, { Component } from 'react';
import {
    View, TextInput, Text
} from 'react-native';

class AddTask extends Component {
    render() {
        const { containerStyle, textStyle, inputStyle, cardStyle } = styles;
        return(
            <View style={containerStyle}>
                <Text style={textStyle}>Tạo Task</Text>
                <View style={cardStyle}>
                    <TextInput 
                        style={inputStyle}
                        placeholder="Add new Task"
                        multiline
                    />
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
        height: 160
    },
    cardStyle: {
        borderWidth: 1,
        marginTop: 10,
        borderColor: '#ddd',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        padding: 5,
    }
}

export default AddTask;