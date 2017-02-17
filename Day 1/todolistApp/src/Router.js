import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import TodoList from './components/TodoList';

const RouterWithRedux = connect()(Router); // giúp Router kết nối đến vùng trạng thái state của Redux

class RouterComponent extends Component{
    render() {
        return(
            <RouterWithRedux>
                <Scene 
                    key="todoList" 
                    component={TodoList} 
                    title="Todo"
                    navigationBarStyle={styles.navigationBarStyle}
                    sceneStyle={styles.sceneStyle}
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
        paddingTop: 60,
    }
};

export default RouterComponent;