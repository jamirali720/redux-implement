import {FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAILURE} from './EmployeeType';


const initialState = {
    loading: false,
    users: [],
    error: ''
}

 const employeeReducer = (state= initialState, action)=> {
    switch(action.type){
        case FETCH_EMPLOYEE_REQUEST: return {    
            ...state,
            loading: true
        }
        case FETCH_EMPLOYEE_SUCCESS: return {           
            loading: false,
            users: action.payload,
            error : ''
        }
        case FETCH_EMPLOYEE_FAILURE : return {            
            loading: false,
            users: [],
            error : action.payload
        }
        default: return state
    }  
}


export default employeeReducer;