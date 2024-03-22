"use client";
import { CurrencyModalProvider } from "@/context/currency-modal-context";
import { LanguageModalProvider } from "@/context/language-modal-context";
import { StickyNavigationProvider } from "@/context/navigation-sticky-context";
import React, { PropsWithChildren } from "react";

function Provider({ children }: PropsWithChildren) {
  return (
    <StickyNavigationProvider>
      <LanguageModalProvider>
        <CurrencyModalProvider>{children}</CurrencyModalProvider>
      </LanguageModalProvider>
    </StickyNavigationProvider>
  );
}

export default Provider;
