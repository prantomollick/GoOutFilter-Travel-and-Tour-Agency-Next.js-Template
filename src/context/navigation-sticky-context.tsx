import { createContext, PropsWithChildren, useContext, useState } from "react";

type StickyNavigationCtxType = {
  isSticky: boolean;
  onChangeSticky: () => void;
};

export const StickyNavigationCtx =
  createContext<StickyNavigationCtxType | null>(null);

export function StickyNavigationProvider({ children }: PropsWithChildren<{}>) {
  const [isSticky, setIsSticky] = useState(false);

  const onChangeSticky = () => setIsSticky((prevValue) => !prevValue);

  const ctxValue = {
    isSticky: isSticky,
    onChangeSticky
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
