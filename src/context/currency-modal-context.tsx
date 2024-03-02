import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type Dispatch,
  type ReactNode
} from "react";

export interface CurrencyInfo {
  name: string;
  code: string;
  sign?: string;
  locale?: string;
  symbolPosition?: "before" | "after";
  country?: string;
  exchangeRate?: number;
  flag?: string;
  timezone?: string;
  currencyColor?: string;
}

enum CurrActionType {
  OPEN_CURRENCY_MODAL = "OPEN_CURRENCY_MODAL",
  CLOSE_CURRENCY_MODAL = "CLOSE_CURRENCY_MODAL",
  SET_CURRENCY_MODAL_CONTENT = "SET_CURRENCY_MODAL_CONTENT"
}

interface CurrencyCtxState {
  isOpen: boolean;
  content?: {
    currency?: CurrencyInfo;
  } | null;
}

type ModalAction<T> =
  | { type: CurrActionType.OPEN_CURRENCY_MODAL }
  | { type: CurrActionType.CLOSE_CURRENCY_MODAL }
  | { type: CurrActionType.SET_CURRENCY_MODAL_CONTENT; payload: T };

type CurrencyCtxValue<T> = {
  state: CurrencyCtxState;
  actions: {
    onOpen: () => void;
    onClose: () => void;
    setModalContent: (content: CurrencyInfo) => void;
  };
  dispatch: Dispatch<ModalAction<T>>;
};

const CurrencyModalCtx = createContext<CurrencyCtxValue<unknown> | undefined>(
  undefined
);

const initialState: CurrencyCtxState = {
  isOpen: false,
  content: {
    currency: {
      name: "United States Dollar",
      code: "USD",
      sign: "$",
      locale: "en-US"
    }
  }
};

const modalReducer = (
  state: CurrencyCtxState,
  action: ModalAction<unknown>
): CurrencyCtxState => {
  switch (action.type) {
    case CurrActionType.OPEN_CURRENCY_MODAL:
      return { ...state, isOpen: true };

    case CurrActionType.CLOSE_CURRENCY_MODAL:
      return {
        ...state,
        isOpen: false
      };

    case CurrActionType.SET_CURRENCY_MODAL_CONTENT:
      return {
        ...state,
        content: {
          currency: action.payload as CurrencyInfo
        },
        isOpen: true
      };

    default:
      return state;
  }
};

export const CurrencyModalProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  useEffect(() => {
    if (state.content) {
      localStorage.setItem(
        "gof_currency",
        JSON.stringify(state.content?.currency)
      );
    }
  }, [state.content]);

  const onOpen = () => {
    dispatch({ type: CurrActionType.OPEN_CURRENCY_MODAL });
  };

  const onClose = () => {
    dispatch({ type: CurrActionType.CLOSE_CURRENCY_MODAL });
  };

  const setModalContent = function <T>(newContent: T) {
    dispatch({
      type: CurrActionType.SET_CURRENCY_MODAL_CONTENT,
      payload: newContent
    });
  };

  const modalctxValue = {
    state,
    dispatch,
    actions: { onOpen, onClose, setModalContent }
  };

  return (
    <CurrencyModalCtx.Provider value={modalctxValue}>
      {children}
    </CurrencyModalCtx.Provider>
  );
};

export const useCurrencyModal = () => {
  const context = useContext(CurrencyModalCtx);
  if (!context) {
    throw new Error(
      "useCurrencyModal must be used within a CurrencyModalProvider"
    );
  }
  return context;
};
