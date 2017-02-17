import { LOAD_DATA } from './types';
// import list from '../reducers/todoList.json';

export const loadData = () => {
    return (dispatch) => {
        fetch('http://45.117.160.28:3330/tasks')
            .then(response => response.json()) // lấy từ backend
            .then(response => { // nếu success
                dispatch({
                    type: LOAD_DATA,
                    payload: response.data || response // trả về response.data nếu có data
                });
            })
            .catch(error => { // error
                console.log('error', error.message);
            });
    };
};
