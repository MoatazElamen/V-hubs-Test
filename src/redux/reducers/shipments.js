import {ADD_NEW_SHIPMENT} from '../actions/shipment'
const initialState = {
    shipments:[],
    searchResults:[]
}
const ShipmentsReducer = (state= initialState , action)=>{
    switch(action.type){
        case ADD_NEW_SHIPMENT:
            return {...state,shipments:[...state.shipments,action.payload]}
        default:
            return state
    }
}
export default ShipmentsReducer;