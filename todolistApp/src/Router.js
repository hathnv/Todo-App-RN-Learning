import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';

const RouterWithRedux = connect()(Router); // giúp Router kết nối đến vùng trạng thái state của Redux

class RouterComponent extends Component{
    render() {

        const { navigationBarStyle, navBarTitle, sceneStyle, backIconStyle } = styles;
        return(
            <RouterWithRedux>
                <Scene 
                    key="todoList" 
                    component={TodoList} 
                    title="Todo App"
                    navigationBarStyle={navigationBarStyle}
                    titleStyle={navBarTitle} 
                    sceneStyle={sceneStyle}
                />

                <Scene
                    key="addTask"
                    component={AddTask}
                    title="AddTask"
                    navigationBarStyle={navigationBarStyle}
                    titleStyle={navBarTitle}
                    leftButtonIconStyle={backIconStyle}                    
                    sceneStyle={sceneStyle}
                    /*initial // Chọn Scene ưu tiên chạy trước*/
                />
                <Scene
                    key="editTask"
                    component={EditTask}
                    title="Edit Task"
                    navigationBarStyle={navigationBarStyle}
                    titleStyle={navBarTitle}
                    leftButtonIconStyle={backIconStyle}                    
                    sceneStyle={sceneStyle}
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
    backIconStyle: {
        tintColor: '#fff'
    }
};

export default RouterComponent;