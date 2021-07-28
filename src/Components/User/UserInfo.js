import React from 'react';
import {connect} from 'react-redux';
import {buyCake, sellCake} from '../redux/Cake/CakeAction'

const UserInfo = (props) => {
    return (
        <div>
            <h1> here is number of Cake : { props.cakeOfNumber}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={props.sellCake}>Sell Cake</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cakeOfNumber: state.cake.cakeOfNumber
    }
}

const mapDispatchToProps =dispatch =>{
    return {
        buyCake: () => dispatch(buyCake()),
        sellCake: () => dispatch(sellCake())
    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);