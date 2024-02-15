"use client";
import { currencyModalData } from "@/data/currency-modal-data";
import styles from "./currency-modal.module.scss";

import Modal from "@/components/modal/modal";
import {
  useCurrencyModal,
  type CurrencyInfo
} from "@/context/currency-modal-context";
import classNames from "classnames";
import { useState } from "react";

function CurrencyModal() {
  const { actions, state } = useCurrencyModal();
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyInfo>(
    state?.content?.currency!
  );

  const handleCurrencyChange = (currency: CurrencyInfo) => {
    actions.setModalContent<{ currency: CurrencyInfo }>({ currency });
    setSelectedCurrency(currency);
    actions.onClose();
  };

  return (
    <Modal
      title="Select your currency"
      onClose={actions.onClose}
      isOpen={state.isOpen}
    >
      <ul className={styles["modal__list"]}>
        {currencyModalData.map((currency) => (
          <li key={currency.code}>
            <button
              className={classNames(
                styles["modal__currency-btn"],
                "btn",
                selectedCurrency.code === currency.code &&
                  "selected-primary-light"
              )}
              onClick={() => handleCurrencyChange(currency)}
            >
              {currency.name}
              <span>
                {currency.code} - {currency.sign}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}

export default CurrencyModal;
