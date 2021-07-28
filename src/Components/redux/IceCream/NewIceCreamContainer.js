import React, {useState} from "react";
// import { useSelector, useDispatch } from "react-redux";
import { buyIceCream, sellIceCream } from "./IceCreamAction";
import {connect} from 'react-redux'

const NewIceCreamContainer = (props) => {
    const [number, setNumber] = useState(1)
//   const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
//   const dispatch = useDispatch();
  return (
    <div>
      <h1> Number of Ice Cream {props.numOfIceCream}</h1>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyIceCream(number)}>Sell Ice Cream:{number} </button>
      <button onClick={() => props.sellIceCream(number)}>Buy Ice Cream:{number} </button>
    </div>
  );
};
const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}
const mapDispatchToProps =dispatch=> {
    return {
        buyIceCream: number => dispatch(buyIceCream(number)),
        sellIceCream: number => dispatch(sellIceCream(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewIceCreamContainer);
