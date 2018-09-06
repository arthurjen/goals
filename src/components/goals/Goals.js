import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { getGoals } from './reducers';
import { loadGoals, addGoal } from './actions';
import GoalForm from './GoalForm';
import Goal from './Goal';
import styles from './Goals.css';

export class Goals extends PureComponent {

  state = {
    adding: false
  };

  static propTypes = {
    user: PropTypes.object.isRequired,
    loadGoals: PropTypes.func.isRequired,
    addGoal: PropTypes.func.isRequired,
    goals: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.loadGoals();
  }

  handleAdd = goal => {
    const { addGoal } = this.props;
    return addGoal(goal)
      .then(() => this.toggleAdding());
  };

  toggleAdding = () => {
    this.setState(({ adding }) => ({ adding: !adding }));
  };

  render() { 
    const { adding } = this.state;
    const { user, goals } = this.props;

    return (
      <div className={styles.goals}>
        {adding 
          ? <GoalForm submit={this.handleAdd}/>
          : <button onClick={this.toggleAdding}>
            <i className="fas fa-plus"></i>
          </button>
        }
        <h2>Goals for {user.name}:</h2>
        <ul className="goals-list">
          {goals.map(goal => (
            <Goal
              key={goal._id}
              goal={goal}
            />
          ))}
        </ul>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state),
    goals: getGoals(state)
  }),
  { loadGoals, addGoal }
)(Goals);
