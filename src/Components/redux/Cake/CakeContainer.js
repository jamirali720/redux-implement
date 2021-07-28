import React, { useState } from 'react'
import {buyCake, sellCake } from './CakeAction';
import {connect} from 'react-redux'

function CakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1> Number of Cake { props.cakeOfNumber}</h1>
            <button onClick={() => props.buyCake(number)}> Buy Cake</button>
            <button onClick ={() => props.sellCake(number)}> Sell Cake</button>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
        </div>
    )
}

 const mapStateToProps = (state) => {
    return {
        cakeOfNumber : state.cake.cakeOfNumber
    }
}
 const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: num => dispatch(buyCake(num)),
        sellCake : num => dispatch(sellCake(num))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
