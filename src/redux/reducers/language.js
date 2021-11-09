import {CHANGE_LANGUAGE} from '../actions/language'
const initialState = {
    lang:'en'
}
const languageReducer = (state=initialState , action)=>{
    switch(action.type){
        case CHANGE_LANGUAGE:
            return {...state,lang:action.payload}
        default:
            return state
    }
}
export default languageReducer;