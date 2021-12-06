import * as types from "./actionType"
import axios from "axios"

export const loadUsers = () => dispatch => {
    axios.get('http://localhost:5000/user').then((res) => {
        console.log(res, "res");
        dispatch({
            type: types.GET_USER,
            payload: res.data
        })
    }).catch((err) => console.log(err))

}

export const deleteUser = (id) => dispatch => {
    axios.delete(`http://localhost:5000/user/${id}`).then((res) => {
        console.log(res, "del");
        dispatch({ type: types.DELETE_USER })
        dispatch(loadUsers());


    }).catch((err) => console.log(err))

}
export const addUser = (user) => dispatch => {
    axios.post(`http://localhost:5000/user`, user).then((res) => {
        console.log(res, "del");
        dispatch({ type: types.ADD_USER })
        dispatch(loadUsers());



    }).catch((err) => console.log(err))

}
export const getSingleUser = (id) => dispatch => {
    axios.get(`http://localhost:5000/user/${id}`).then((res) => {
        console.log(res.data, "res");
        dispatch({
            type: types.GET_SINGLE_USER,
            payload: res.data
        })


    }).catch((err) => console.log(err))

}
export const updateUser = (user, id) => dispatch => {
    axios.put(`http://localhost:5000/user/${id}`, user).then((res) => {
        console.log(res, "res");
        dispatch({
            type: types.UPDATE_USER
        })


    }).catch((err) => console.log(err))

}