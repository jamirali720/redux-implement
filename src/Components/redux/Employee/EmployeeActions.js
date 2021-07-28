import axios from 'axios';
import {FETCH_EMPLOYEE_REQUEST,
     FETCH_EMPLOYEE_SUCCESS, 
     FETCH_EMPLOYEE_FAILURE} from './EmployeeType';

export const fetchEmployeeRequest =()=> {
    return {
        type: FETCH_EMPLOYEE_REQUEST
    }
}     

export const fetchEmployeeSuccess = users => {
    return {
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: users
    }
}

export const fetchEmployeeFailure = error => {
    return {
        type: FETCH_EMPLOYEE_FAILURE,
        payload: error
    }
}

 export const fetchEmployee = () => {
  return function (dispatch) {
      dispatch(fetchEmployeeRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
             const users = response.data;
            dispatch(fetchEmployeeSuccess(users))           
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchEmployeeFailure(errorMsg))
        })
  };
};