"use client";
import styles from "./modal.module.scss";

import classNames from "classnames";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { GoX } from "react-icons/go";

interface ModalProps {
  children: ReactNode;
  title?: string;
  width?: number;
  height?: number;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({
  children,
  title,
  width = 1070,
  height,
  isOpen,
  onClose
}: ModalProps) {
  if (!isOpen) return null;

  const renderModal = (
    <div className={styles.modal__overlay} onClick={onClose}>
      <div
        className={styles.modal__container}
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>{title}</h2>

          <button
            onClick={onClose}
            className={classNames(styles["modal__close--btn"], "btn")}
          >
            <GoX size={20} />
          </button>
        </div>
        <div className={styles.modal__body}>{children}</div>
      </div>
    </div>
  );

  return createPortal(renderModal, document.body);
}

export default Modal;
