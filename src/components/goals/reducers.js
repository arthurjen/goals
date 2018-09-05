export const GOALS_LOAD = 'GOALS_LOAD';
export const GOALS_ADD = 'GOALS_ADD';

export const getGoals = state => state.goals;

export function goals(state = [], { type, payload }) {
  switch(type) {
    case GOALS_LOAD:
      return payload;
    case GOALS_ADD:
      return [payload, ...state];
    default:
      return state;
  }
}