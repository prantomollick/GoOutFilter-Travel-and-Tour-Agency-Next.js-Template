"use client";
import { currencyData } from "./currency-data";
import styles from "./currency-modal.module.scss";

import Modal from "@/components/modal/modal";
import { useModal, type CurrencyInfo } from "@/context/modal-context";
import classNames from "classnames";
import { useState } from "react";

function CurrencyModal() {
  const { actions, state } = useModal();
  const [selectedCurrency, setSelectedCurrency] = useState<object | string>(
    state.content?.currency || "USD"
  );

  const handleCurrencyChange = (currency: CurrencyInfo) => {
    actions.setModalContent<{ currency: CurrencyInfo }>({ currency });
    setSelectedCurrency(currency);
    actions.onClose();
  };

  return (
    <Modal title="Select your currency">
      <ul className={styles["modal__list"]}>
        {currencyData.map((currency, index) => (
          <li key={currency.code} className={styles["modal__list-item"]}>
            <button
              className={classNames(
                styles["modal__currency-btn"],
                "btn",
                selectedCurrency === currency.code && "selected-primary-light"
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
