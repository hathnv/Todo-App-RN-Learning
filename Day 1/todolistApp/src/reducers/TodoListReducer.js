import { LOAD_DATA } from '../actions/types'; // Lưu type vào một file để dễ quản lý tránh nhầm lẫn

const INITIAL = {};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case LOAD_DATA: // reducer xử lý trường hợp nếu LOAD_DATA thì trả về payload
            return action.payload;
        default:
            return state;
    }
};