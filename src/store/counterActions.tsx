import { ThunkDispatch } from 'redux-thunk'
import { State, Counter } from './counterReducer'

export enum ActionType {
  ADD = 'ADD',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  DELETE = 'DELETE'
}

export type Action = {
  type: ActionType,
  index?: number
}

export type CountersDispatch = ThunkDispatch<State, void, Action>;

export function checkTimers() {
  return (dispatch: CountersDispatch, getState: () => State) => {

    setTimeout(() => {
      const counters = getState().counters;

      counters.forEach((counter: Counter, index: number) => {
        if ((index + 1) % 4 === 0) {
          dispatch(increment(index));
        }
      })
        dispatch(checkTimers());
    }, 1000)
  }
}

export const addCounter = () => {
  return {
    type: ActionType.ADD
  }
}

export const increment = (index: number) => {
  return {
    type: ActionType.INCREMENT,
    index: index
  }
}

export const decrement = (index: number) => {
  return {
    type: ActionType.DECREMENT,
    index: index
  }
}

export const deleteCounter = (index: number) => {
  return {
    type: ActionType.DELETE,
    index: index
  }
}
