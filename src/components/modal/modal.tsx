"use client";
import styles from "./modal.module.scss";

import { useModal } from "@/context/modal-context";
import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { GoX } from "react-icons/go";

interface ModalProps {
  children: ReactNode;
  title?: string;
  width?: number;
  height?: number;
}

function Modal({ children, title, width = 1070, height }: ModalProps) {
  const { state, actions } = useModal();

  console.log(state);

  if (!state.isOpen) return null;

  const renderModal = (
    <div className={styles.modal__overlay} onClick={actions.onClose}>
      <div className={styles.modal__container} style={{ width, height }}>
        <div className={styles.modal__header}>
          <h2>{title}</h2>
          <button
            onClick={actions.onClose}
            className={classNames(styles["modal__close--btn"], "btn")}
          >
            <GoX width={15} height={15} />
          </button>
        </div>
        <div className={styles.modal__body}>{children}</div>
      </div>
    </div>
  );

  return createPortal(renderModal, document.body);
}

export default Modal;
