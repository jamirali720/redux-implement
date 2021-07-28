import {combineReducers} from 'redux';
import employeeReducer from '../Employee/EmployeeReducer';


import cakeReducer from './cakeReducer';

import iceCreamReducer from '../../redux/IceCream/IceCreamReducer'

const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: employeeReducer
})

export default rootReducers;