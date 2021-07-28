import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyIceCream, sellIceCream} from './IceCreamAction'

const IceCreamContainer = (props) => {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch =   useDispatch();
    return (
        <div>
            <h1> Number of Ice Cream  {numOfIceCream}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
            <button onClick={() => dispatch(sellIceCream())}>Buy Ice Cream</button>
        </div>
    );
};

export default IceCreamContainer;