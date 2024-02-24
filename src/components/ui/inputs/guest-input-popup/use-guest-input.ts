import { isScrollFlipPopUp } from "@/util/scroll-to-flip";
import { useEffect, useReducer, useRef, useState } from "react";

enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  VISIBILITY_CHANGED = "VISIBILITY_CHANGED"
}

export enum CounterKey {
  ADULTS = "adults",
  CHILDREN = "children",
  ROOMS = "rooms"
}

export interface CounterState {
  adults: number;
  children: number;
  rooms: number;
  isVisible: boolean;
}

type Action =
  | {
      type: ActionType;
      payload: CounterKey;
    }
  | {
      type: ActionType.VISIBILITY_CHANGED;
    };

const initialState: CounterState = {
  adults: 2,
  children: 1,
  rooms: 1,
  isVisible: false
};

const guestsReducer = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, [action.payload]: state[action.payload] + 1 };

    case ActionType.DECREMENT:
      return {
        ...state,
        [action.payload]: Math.max(0, state[action.payload] - 1)
      };

    case ActionType.VISIBILITY_CHANGED:
      return { ...state, isVisible: !state.isVisible };

    default:
      return state;
  }
};

export function useGuestInput() {
  const [state, dispatch] = useReducer(guestsReducer, initialState);

  const [popupFlipToTop, setPopupFlipToTop] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const rootElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      if (!popupRef.current?.contains(e.target as Node)) {
        handleChangeVisibility();
      }
    };

    if (state.isVisible && rootElRef.current) {
      document.addEventListener("click", handleOutSideClick, false);
    }

    return () =>
      document.removeEventListener("click", handleOutSideClick, false);
  }, [state.isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      const isFlip = isScrollFlipPopUp(rootElRef, popupRef);
      setPopupFlipToTop(isFlip);
    };

    if (state.isVisible && rootElRef.current && popupRef.current) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [state.isVisible]);

  const handleIncrement = (type: CounterKey) => {
    dispatch({ type: ActionType.INCREMENT, payload: type });
  };

  const handleDecrement = (type: CounterKey) => {
    dispatch({ type: ActionType.DECREMENT, payload: type });
  };

  const handleChangeVisibility = () => {
    dispatch({ type: ActionType.VISIBILITY_CHANGED });
  };

  return {
    state,
    handleIncrement,
    handleDecrement,
    onPopupFilpToTop: setPopupFlipToTop,
    popupFlipToTop,
    popupRef,
    rootElRef,
    onGuestPopupVisibility: handleChangeVisibility
  };
}
