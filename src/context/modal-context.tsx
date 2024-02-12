import {
  type Dispatch,
  type ReactNode,
  createContext,
  useContext,
  useReducer
} from "react";

enum ModalActionType {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL"
}

interface ModalContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

type ModalAction =
  | { type: ModalActionType.OPEN_MODAL }
  | { type: ModalActionType.CLOSE_MODAL };

type ModalContextValue = {
  state: ModalContextProps;
  dispatch: Dispatch<ModalAction>;
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false
};

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalActionType.OPEN_MODAL:
      return { ...state, isOpen: true };

    case ModalActionType.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
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

  const modalContextValue: ModalContextValue = {
    state: { isOpen: state.isOpen, onOpen, onClose },
    dispatch
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
