import {BUY_ICE_CREAM, SELL_ICE_CREAM} from './IceCreamType'

export const buyIceCream = (number = 1)=> {
    return {
        type : BUY_ICE_CREAM,
        payload: number
    }
}
export const sellIceCream = (number=1) => {
    return {
        type: SELL_ICE_CREAM,
        payload: number
    }
}