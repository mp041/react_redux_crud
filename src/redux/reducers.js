import * as types from "./actionType"

const initialState = {
    users :[],
    user : {},
    loading : true
}


const userReducer = (state = initialState, action) => {

   
   
    switch (action.type) { 
        case types.GET_USER: 
            return {
                ...state,
                users : action.payload,
                loading : false
            }
        case types.DELETE_USER : 
            return {
                ...state,
                loading : false
            }

        default:
      return state
    }
   }

export default userReducer;