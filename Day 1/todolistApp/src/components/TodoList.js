import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { loadData } from '../actions';
import { Button } from './common';

class TodoList extends Component{
    componentWillMount() {
        this.props.loadData(); // tác động lên dữ liệu thông qua action
        // vào component thì chạy loadData => thay đổi DL ở state và map lại vào props (mapStateToProps)
        // => chạy componentWillReceiveProps (props thay đổi)
        this.createDataSource({ undefined });
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    // hàm lấy dữ liệu cho ListView
    createDataSource({ data }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(data || []);
    }

    render() {
        return(
            <View style={{ flex:1 }}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={(item) => <Text>{item.content}</Text>}
                />
                <Button title="+" onPress={() => console.log('pressed')} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { data } = state.TodoListReducer;
    return { data };
};
export default connect(mapStateToProps, { loadData })(TodoList);