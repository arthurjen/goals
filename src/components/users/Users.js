import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsersGoals } from './reducers';
import { loadUsersGoals } from './actions';
import User from './User';

class Users extends PureComponent {
  static propTypes = {
    loadUsersGoals: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.loadUsersGoals();
  }

  render() { 
    const { users } = this.props;
    return (
      <div>
        <h1>users</h1>
        <ul className="users-list">
          {users.map(user => (
            <User
              key={user._id}
              user={user}
            />
          ))}
        </ul>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    users: getUsersGoals(state)
  }),
  { loadUsersGoals }
)(Users);