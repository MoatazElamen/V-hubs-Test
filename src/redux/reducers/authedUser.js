import {SET_AUTHED_USER} from '../actions/user'
const initialState = {
    authedUser:null
}
const UserReducer =  (state= initialState, action) =>{
    switch (action.type){
        case SET_AUTHED_USER:
            return {...state,authedUser:action.payload}
        default:
            return state
    }
}
export default UserReducer;