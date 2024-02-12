"use client";
import { ModalProvider } from "@/context/modal-context";
import React, { PropsWithChildren } from "react";

function Provider({ children }: PropsWithChildren) {
  return <ModalProvider>{children}</ModalProvider>;
}

export default Provider;
