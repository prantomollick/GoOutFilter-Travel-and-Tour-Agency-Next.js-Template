"use client";
import { useModal } from "@/context/modal-context";
import { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Modal({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false);
  const { state } = useModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && state.isOpen
    ? createPortal(<>{children}</>, document.body)
    : null;
}

export default Modal;
