import { SET_HOLDER_DATA, SET_SITE_DATA, SET_TITLE_DATA } from './detailSelectionType'
import { DETAIL_INCORRECT_COUNT } from '../messageHandler/messageHandlerType'
import axios from 'axios';


export const getHolderData = id => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'JWT ' + localStorage.getItem('access')
        }
    }; 
    axios
        .get(`/detail-holder/${id}/`,config)
        .then(res => {
                dispatch({
                    type: SET_HOLDER_DATA,
                    payload: res.data
                });
            })
        .catch(err => {
            console.log(err)
                // dispatch({
                //     type: DETAIL_INCORRECT_COUNT,
                // });
            });
}


// export const getHolderDataSimple = id => dispatch => {
//     axios
//         .get(`/detail-holder-simple/${id}/`)
//         .then(res => {
//                 dispatch({
//                     type: SET_HOLDER_DATA,
//                     payload: res.data
//                 });
//             })
//         .catch(err => {
//                 dispatch({
//                     type: DETAIL_INCORRECT_COUNT,
//                 });
//             });
// }

export const getSiteData = id => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'JWT ' + localStorage.getItem('access')
        }
    }; 
    axios
        .get(`/detail-site/${id}/`,config)
        .then(res => {
                dispatch({
                    type: SET_SITE_DATA,
                    payload: res.data
                });
            })
        .catch(err => {
            console.log(err)
                // dispatch({
                //     type: DETAIL_INCORRECT_COUNT,
                // });
            });
}


export const getTitleData = id => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'JWT ' + localStorage.getItem('access')
        }
    }; 
    axios
        .get(`/detail-title/${id}/`,config)
        .then(res => {
                // console.log(res)
                dispatch({
                    type: SET_TITLE_DATA,
                    payload: res.data
                });
            })
        .catch(err => {
            console.log(err)
                // dispatch({
                //     type: DETAIL_INCORRECT_COUNT,
                // });
            });
}

