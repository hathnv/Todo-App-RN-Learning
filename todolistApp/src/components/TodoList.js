import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux'; // Actions cung cấp phương thức di chuyển giữa các màn hình

import { loadData } from '../actions';
import { Button, ListItem } from './common';

// trong component dữ liệu phải đoán trc được (obj hoặc arr)
class TodoList extends Component{
    componentWillMount() {
        this.props.loadData(); // tác động lên dữ liệu thông qua action
        // vào component thì chạy loadData => thay đổi DL ở state và map lại vào props (mapStateToProps)
        // => chạy componentWillReceiveProps (props thay đổi)
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    // hàm lấy dữ liệu cho ListView
    createDataSource({ data }) { // dạng obj nếu không sử dụng {} thì  gọi props.data
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(data);
    }

    //Hàm tạo vùng phân tách giữa các item trong ListView
    renderSeparator = (sectionID, rowID) => {
        return <View style={styles.separatorStyle} key={rowID}/>
    }

    render() {
        return(
            <View style={{ flex:1 }}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={(item) => <ListItem item={item} />}
                    renderSeparator={this.renderSeparator}
                />
                <Button 
                    onPress={() => Actions.addTask()}
                    icon = {<Icon name="ios-add-outline" size={30} color="#fff" />}
                />
            </View>
        );
    }
}

const styles = {
    separatorStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: "#D8202A"
    },

}

const mapStateToProps = (state) => {
    const data = state.TodoListReducer; // trả về mảng data
    return { data }; // trả về obj 
};
export default connect(mapStateToProps, { loadData })(TodoList);