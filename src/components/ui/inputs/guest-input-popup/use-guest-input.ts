import { useReducer } from "react";

enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

export enum CounterKey {
  ADULTS = "adults",
  CHILDREN = "children",
  ROOMS = "rooms"
}

interface State {
  adults: number;
  children: number;
  rooms: number;
}

interface Action {
  type: ActionType;
  payload: CounterKey;
}

const initialState: State = {
  adults: 2,
  children: 1,
  rooms: 1
};

const guestsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, [action.payload]: state[action.payload] + 1 };

    case ActionType.DECREMENT:
      return {
        ...state,
        [action.payload]: Math.max(0, state[action.payload] - 1)
      };

    default:
      return state;
  }
};

export function useGuestInput() {
  const [state, dispatch] = useReducer(guestsReducer, initialState);

  const handleIncrement = (type: CounterKey) => {
    dispatch({ type: ActionType.INCREMENT, payload: type });
  };

  const handleDecrement = (type: CounterKey) => {
    dispatch({ type: ActionType.DECREMENT, payload: type });
  };

  return {
    state,
    handleIncrement,
    handleDecrement
  };
}
