// import {buyCake, sellCake} from '../Cake/CakeAction';
import {BUY_CAKE, SELL_CAKE} from '../Cake/CakeType';


const initialState ={
    cakeOfNumber : 10
}

 const cakeReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_CAKE :
             return {
                ...state,
                cakeOfNumber: state.cakeOfNumber -Number(action.payload)
        }
        case SELL_CAKE: 
            return {
                ...state, 
                cakeOfNumber: state.cakeOfNumber + Number(action.payload)
            }
        default: return state
    }
}
export default cakeReducer;