import {BUY_ICE_CREAM, SELL_ICE_CREAM} from './IceCreamType'
const initialState = {
    numOfIceCream : 20
}
const iceCreamReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_ICE_CREAM: return{
                ...state, 
                numOfIceCream: state.numOfIceCream + Number(action.payload)
        }
        case SELL_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - Number(action.payload)

        }    
            default: return state
    }
}
export default iceCreamReducer;