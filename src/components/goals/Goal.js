import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { toggleComplete } from './actions';
import { connect } from 'react-redux';

class Goal extends PureComponent {
  state = {
    editing: false
  };

  static propTypes = {
    goal: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired
  };

  toggleEdit = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  handleToggle = () => {
    const { toggleComplete, goal } = this.props;
    return toggleComplete(goal._id);
  };

  render() { 
    const { goal } = this.props;
    return (
      <li onClick={this.handleToggle}>
        <p>{goal.goal}</p>
        <p>completed: {goal.completed ? 'Yes' : 'No'}</p>
      </li>
    );
  }
}
 
export default connect(
  null,
  { toggleComplete }
)(Goal);