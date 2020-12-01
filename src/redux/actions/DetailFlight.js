import axios from '../../helpers/axios';
import { ToastAndroid } from 'react-native';

const handleError = (error) => {
    console.log(error);
    if (error.response) {
        return ToastAndroid.show(error.response.data.msg, ToastAndroid.LONG);
    }
    return ToastAndroid.show('Connection Refused', ToastAndroid.LONG);
};


const GetDetailFlight = (id = 5 , callback) => (dispatch) => {
    axios.get(`/public/classes/${id}`)
    .then(res=>{
        callback(false, res);
        console.log(1)
        return dispatch({
            type: 'GET_DETAIL_FLIGHT',
            payload: res.data.data
        })
    })
    .catch(err=>{
        callback(true, err);
        return handleError(err);
    })
}

export {GetDetailFlight}