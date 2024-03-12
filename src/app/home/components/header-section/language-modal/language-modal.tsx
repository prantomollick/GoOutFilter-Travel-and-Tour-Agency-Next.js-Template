"use client";

import styles from "./language-modal.module.scss";

import Modal from "@/components/modal/modal";
import {
  type LanguageCountryData,
  useLanguageModal
} from "@/context/language-modal-context";
import { languageModalData } from "@/data/language-modal-data";
import classNames from "classnames";
import React, { useState } from "react";

function LanguageModal() {
  const { state, actions } = useLanguageModal();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCountryData>(
    state.content?.language!
  );

  const handleLanguageChange = (language: LanguageCountryData) => {
    actions.setContent(language);
    setSelectedLanguage(language);
  };

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
              className={classNames(
                styles["modal__language-btn"],
                "btn",
                selectedLanguage.code === language.code &&
                  "selected-primary-light"
              )}
              onClick={() => handleLanguageChange(language)}
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
