export const GOALS_LOAD = 'GOALS_LOAD';
export const GOALS_ADD = 'GOALS_ADD';
export const GOAL_TOGGLE = 'GOALS_TOGGLE';

export const getGoals = state => state.goals;

export function goals(state = [], { type, payload }) {
  switch(type) {
    case GOALS_LOAD:
      return payload;
    case GOALS_ADD:
      return [...state, payload];
    case GOAL_TOGGLE:
      return state.map(goal => goal._id === payload._id ? payload : goal);
    default:
      return state;
  }
}