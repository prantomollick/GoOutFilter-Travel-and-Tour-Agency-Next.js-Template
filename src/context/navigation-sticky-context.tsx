import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState
} from "react";

type StickyNavigationCtxType = {
  isSticky: boolean;
  onChangeSticky: (sticky: boolean) => void;
};

export const StickyNavigationCtx =
  createContext<StickyNavigationCtxType | null>(null);

export function StickyNavigationProvider({ children }: PropsWithChildren<{}>) {
  const [isSticky, setIsSticky] = useState(false);

  // const onChangeSticky = (sticky: boolean) => setIsSticky(sticky);

  const ctxValue = {
    isSticky: isSticky,
    onChangeSticky: setIsSticky
  };

  return (
    <StickyNavigationCtx.Provider value={ctxValue}>
      {children}
    </StickyNavigationCtx.Provider>
  );
}

export function useStickyNavigation() {
  const context = useContext(StickyNavigationCtx);

  if (!context) {
    throw new Error(
      "useStickyNavigation must be used within a StickyNavigationProvider"
    );
  }

  return context;
}
