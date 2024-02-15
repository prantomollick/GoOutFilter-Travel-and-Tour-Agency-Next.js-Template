"use client";

import styles from "./language-modal.module.scss";

import Modal from "@/components/modal/modal";
import { useLanguageModal } from "@/context/language-modal-context";
import { languageModalData } from "@/data/language-modal-data";
import classNames from "classnames";
import React from "react";

function LanguageModal() {
  const { state, actions } = useLanguageModal();
  console.log(languageModalData.length);

  return (
    <Modal
      title="Select your language"
      isOpen={state.isOpen}
      onClose={actions.onClose}
    >
      <ul className={styles.modal__list}>
        {languageModalData.map((language) => (
          <li key={language.code}>
            <button
              className={classNames(styles["modal__language-btn"], "btn")}
            >
              {language.language}
              <span>{language.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}

export default LanguageModal;
