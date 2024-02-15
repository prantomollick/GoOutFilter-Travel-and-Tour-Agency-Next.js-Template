"use client";
import { CurrencyModalProvider } from "@/context/currency-modal-context";
import { LanguageModalProvider } from "@/context/language-modal-context";
import React, { PropsWithChildren } from "react";

function Provider({ children }: PropsWithChildren) {
  return (
    <LanguageModalProvider>
      <CurrencyModalProvider>{children}</CurrencyModalProvider>
    </LanguageModalProvider>
  );
}

export default Provider;
