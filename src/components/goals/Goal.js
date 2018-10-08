import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { toggleComplete } from './actions';
import { connect } from 'react-redux';
import GoalDisplay from './GoalDisplay';
import styles from './Goal.css';

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
      <li
        onClick={this.handleToggle}
        className={[styles.goal, goal.completed].join(' ')}
      >
        <GoalDisplay goal={goal}/>
      </li>
    );
  }
}
export default connect(
  null,
  { toggleComplete }
)(Goal);