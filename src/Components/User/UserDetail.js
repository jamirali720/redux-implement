import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {buyCake, sellCake} from '../redux/Cake/CakeAction';


const UserDetail = (props) => {

    const numOfCakes = useSelector(state => state.cake.cakeOfNumber)
    const dispatch = useDispatch();
    return (
        <div>
            <h1> Number of Cake {numOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>buy Cake</button>
            <button onClick={() => dispatch(sellCake())}>sell Cake</button>
        </div>
    );
};

export default UserDetail;