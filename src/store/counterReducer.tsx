import { Action } from "./counterActions"
import { ActionType } from "./counterActions"

export type Counter = {
  count: number
}

export type State = {
  counters: Array<Counter>
}

const initialState: State = {
  counters: []
}

const counterReducer = (state = initialState, action: Action) => {

  switch (action.type) {

    case ActionType.ADD: {
      const summ = state.counters.reduce((sum, current) => sum + current.count, 0)

      return {
        ...state,
        counters: [...state.counters, { count: summ}]
      }
    }

    case ActionType.DELETE: {
      const counters = state.counters

      counters.splice(action.index!, 1)

      return {
        ...state,
        counters: [...counters]
      }
    }

    case ActionType.INCREMENT: {
      const counters = state.counters
      counters[action.index!].count += 1;

      return {
        ...state,
        counters: [...counters]
      }
    }

    case ActionType.DECREMENT: {
      const counters = state.counters
      counters[action.index!].count -= 1;
      
      return {
        ...state,
        counters: [...counters]
      }
    }

    default:
      return state;
  }
}

export default counterReducer;