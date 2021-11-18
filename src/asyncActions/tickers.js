import { getDataAction } from "../store/dataReducer";
import { io } from "socket.io-client";

export const getData = () => {
    return dispatch => {
        const socket = io('http://localhost:4000');
        socket.emit('start');
        socket.on('ticker', function(response) {
            const res = Array.isArray(response) ? response : [response];
            dispatch(getDataAction(res));
        })  
    }
}