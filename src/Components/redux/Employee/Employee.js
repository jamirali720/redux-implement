import React, { useEffect } from 'react';
import {fetchEmployee}  from './EmployeeActions';
import {connect} from 'react-redux';

const Employee = ({ userData, fetchEmployee }) => {
  useEffect(() => {
    fetchEmployee();
  }, [fetchEmployee]);
  return userData.loading ? 
  (<h1>Loading </h1>):
  userData.error? (
      <h1> { userData.error}</h1>
  ):(<div>
      <h1> user list</h1>
      <div>
          {
              userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
          }
      </div>
  </div>)
};
const mapStateToProps = state => {
    return {
        userData: state.users
      
    }
}
const mapDispatchToProps =dispatch => {
    return {
      fetchEmployee: () => dispatch(fetchEmployee()) 
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Employee);