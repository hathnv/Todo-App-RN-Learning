import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

const RouterWithRedux = connect()(Router); // giúp Router kết nối đến vùng trạng thái state của Redux

class RouterComponent extends Component{
    render() {
        return(
            <RouterWithRedux>
                <Scene 
                    key="todoList" 
                    component={TodoList} 
                    title="Todo App"
                    navigationBarStyle={styles.navigationBarStyle}
                    titleStyle={styles.navBarTitle} 
                    sceneStyle={styles.sceneStyle}
                />

                <Scene
                    key="addTask"
                    component={AddTask}
                    title="AddTask"
                    navigationBarStyle={styles.navigationBarStyle}
                    titleStyle={styles.navBarTitle}
                    leftButtonBarStyle={{color : "#FFF"}}                    
                    sceneStyle={styles.sceneStyle}
                    /*initial // Chọn Scene ưu tiên chạy trước*/
                />
            </RouterWithRedux>
        );
    }
}

const styles = {
    navigationBarStyle: {
        backgroundColor: "#2979ff",
        shadowColor: '#82b1ff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    sceneStyle: {
        paddingTop: 50,
    }, 
    navBarTitle: {
        color: '#fff'
    },
};

export default RouterComponent;