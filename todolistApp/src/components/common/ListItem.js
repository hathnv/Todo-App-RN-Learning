import React, { PropTypes } from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
    item: PropTypes.object.isRequired
};

const ListItem = ({ item }) => {

    const { itemContainer, iconStyle, textStyle } = styles;
    
    return (
        <TouchableOpacity
            style={itemContainer}
            onPress={() => Actions.editTask({ item })}
        >
            <Text style={textStyle}>{item.content}</Text>
            <Icon
                name={item.resolved ? 'ios-checkbox-outline' : 'ios-square-outline'}
                size={30}
                style={iconStyle}
                color={item.resolved ? '#4caf50' : '#e91e63'}
            />
        </TouchableOpacity>
    );
};

ListItem.propTypes = propTypes;

const styles = {
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        flex: 1,
        paddingRight: 15,
    },
    textStyle: {
        flex: 9,
        fontSize: 18,
        color: 'black',
        paddingLeft: 20
    }
};
export { ListItem };
