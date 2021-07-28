import React from 'react';
import {connect} from 'react-redux'
import {buyCake, sellCake} from './CakeAction';
import {buyIceCream, sellIceCream} from '../IceCream/IceCreamAction'
const ItemContainer = (props) => {
    return (
        <div>
            <h1>Item  - {props.item} </h1>
            <button onClick={ props.items}>buy Cake</button>
        </div>
    );
};
const mapStateToProps = (state, ownProps) => {
    
    const itemState = ownProps.cake 
    ? state.cake.cakeOfNumber 
    : state.iceCream.numOfIceCream
    return {
        item: itemState
    }
}
const mapDispatchToProps =(dispatch, ownProps)=> {
    const dispatchFunction = ownProps.cake 
        ? () => dispatch(buyCake()) 
        : () => dispatch(buyIceCream()) 
        return {
            items : dispatchFunction
        }
}
export default connect(null, mapDispatchToProps)(ItemContainer);