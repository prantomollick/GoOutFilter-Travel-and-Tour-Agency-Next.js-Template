import {
  type Dispatch,
  PropsWithChildren,
  createContext,
  useReducer,
  useContext
} from "react";

enum LangModalActionType {
  OPEN_LANG_MODAL = "OPEN_LANG_MODAL",
  CLOSE_LANG_MODAL = "CLOSE_LANG_MODAL",
  SET_LANG_MODAL_CONTENT = "SET_LANG_MODAL_CONTENT"
}

export interface LanguageCountryData {
  name: string;
  code?: string;
  language: string;
  currency?: string;
  flag: string;
}

interface LanguageModalCtxState {
  isOpen: boolean;
  content?: {
    language: LanguageCountryData;
  } | null;
}

type LangModalActions<T> =
  | { type: LangModalActionType.OPEN_LANG_MODAL }
  | { type: LangModalActionType.CLOSE_LANG_MODAL }
  | { type: LangModalActionType.SET_LANG_MODAL_CONTENT; payload: T };

type LanguageModalCtxValue<T> = {
  state: LanguageModalCtxState;
  actions: {
    onOpen: () => void;
    onClose: () => void;
    setContent: (content: LanguageCountryData) => void;
  };
  dispatch: Dispatch<LangModalActions<T>>;
};

const LanguageModalCtx = createContext<LanguageModalCtxValue<null> | undefined>(
  undefined
);

const initialState: LanguageModalCtxState = {
  isOpen: false,
  content: {
    language: {
      name: "United States",
      code: "US",
      language: "English",
      currency: "USD",
      flag: "🇺🇸"
    }
  }
};

function LangModalReducer<T>(
  state: LanguageModalCtxState,
  action: LangModalActions<T>
): LanguageModalCtxState {
  switch (action.type) {
    case LangModalActionType.OPEN_LANG_MODAL:
      return { ...state, isOpen: true };

    case LangModalActionType.CLOSE_LANG_MODAL:
      return { ...state, isOpen: false };

    case LangModalActionType.SET_LANG_MODAL_CONTENT:
      return {
        ...state,
        isOpen: false,
        content: action.payload as typeof state.content
      };

    default:
      return state;
  }
}

export function LanguageModalProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(LangModalReducer, initialState);

  const onOpen = () => {
    dispatch({ type: LangModalActionType.OPEN_LANG_MODAL });
  };

  const onClose = () => {
    dispatch({ type: LangModalActionType.CLOSE_LANG_MODAL });
  };

  const setContent = function <T>(newContent: T) {
    dispatch({
      type: LangModalActionType.SET_LANG_MODAL_CONTENT,
      payload: newContent
    });
  };

  const ctxValue = {
    state: state,
    dispatch,
    actions: {
      onOpen,
      onClose,
      setContent
    }
  };

  return (
    <LanguageModalCtx.Provider value={ctxValue}>
      {children}
    </LanguageModalCtx.Provider>
  );
}

export function useLanguageModal() {
  const context = useContext(LanguageModalCtx);

  if (!context) {
    throw new Error(
      "useCurrencyModal must be used within a CurrencyModalProvider"
    );
  }

  return context;
}
