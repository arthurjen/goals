import { GOALS_LOAD, GOALS_ADD } from './reducers';
import { getGoals, postGoal } from '../../services/api';

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