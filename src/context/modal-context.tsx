import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type Dispatch,
  type ReactNode
} from "react";

enum ModalActionType {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
  SET_MODAL_CONTENT = "SET_MODAL_CONTENT"
}

interface ModalContextProps<T> {
  isOpen: boolean;
  content?: T;
}

type ModalAction<T> =
  | { type: ModalActionType.OPEN_MODAL }
  | { type: ModalActionType.CLOSE_MODAL }
  | { type: ModalActionType.SET_MODAL_CONTENT; payload: T };

type ModalContextValue<T> = {
  state: ModalContextProps<T>;
  actions: {
    onOpen: () => void;
    onClose: () => void;
    setModalContent: (content: T) => void;
  };
  dispatch: Dispatch<ModalAction<T>>;
};

const ModalContext = createContext<ModalContextValue<null> | undefined>(
  undefined
);

interface ModalState<T = null> {
  isOpen: boolean;
  content?: T;
}

const initialState: ModalState = {
  isOpen: false,
  content: null
};

const modalReducer = (
  state: ModalState,
  action: ModalAction<unknown>
): ModalState => {
  switch (action.type) {
    case ModalActionType.OPEN_MODAL:
      return { ...state, isOpen: true };

    case ModalActionType.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      };

    case ModalActionType.SET_MODAL_CONTENT:
      return {
        ...state,
        content: action.payload as typeof state.content,
        isOpen: true
      };

    default:
      return state;
  }
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const onOpen = () => {
    dispatch({ type: ModalActionType.OPEN_MODAL });
  };

  const onClose = () => {
    dispatch({ type: ModalActionType.OPEN_MODAL });
  };

  const setModalContent = function <T>(newContent: T) {
    dispatch({ type: ModalActionType.SET_MODAL_CONTENT, payload: newContent });
  };

  const modalContextValue = {
    state: { isOpen: state.isOpen, content: state.content },
    dispatch,
    actions: { onOpen, onClose, setModalContent }
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
