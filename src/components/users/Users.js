import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsersGoals } from './reducers';
import { loadUsersGoals } from './actions';

class Users extends PureComponent {
  static propTypes = {
    loadUsers: PropTypes.func.isRequired
  };

  render() { 

    return (
      <h1>users</h1>
    );
  }
}
 
export default connect(
  state => ({
    users: getUsersGoals(state)
  }),
  { loadUsersGoals }
)(Users);