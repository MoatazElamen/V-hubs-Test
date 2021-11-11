// Todo : make ability for filtering the shipments based on the query
export const ADD_NEW_SHIPMENT= 'ADD_NEW_SHIPMENT';
export const FETCH_SHIPMENTS = 'FETCH_SHIPMENTS';
export const AddShipment = (payload)=>({
    type:ADD_NEW_SHIPMENT,
    payload
})
export const FetchShipments = (payload)=>({
    type:FETCH_SHIPMENTS,
    payload
})