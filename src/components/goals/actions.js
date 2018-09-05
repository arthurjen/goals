import { GOALS_LOAD, GOALS_ADD, GOAL_TOGGLE } from './reducers';
import { getGoals, postGoal, toggleGoal } from '../../services/api';

export const loadGoals = () => {
  return {
    type: GOALS_LOAD,
    payload: getGoals()
  };
};

export const addGoal = data => {
  return {
    type: GOALS_ADD,
    payload: postGoal(data)
  };
};

export const toggleComplete = id => {
  return {
    type: GOAL_TOGGLE,
    payload: toggleGoal(id)
  };
};