import classNames from "classnames";
import styles from "./currency-btn.module.scss";
import React from "react";
import { GoTriangleDown } from "react-icons/go";
import { useModal } from "@/context/modal-context";

function CurrencyBtn() {
  const { actions } = useModal();

  console.log(actions);

  return (
    <button
      type="button"
      className={classNames(styles["currency-btn"], "btn")}
      onClick={() => {
        actions.onOpen();
      }}
    >
      USD <GoTriangleDown />
    </button>
  );
}

export default CurrencyBtn;
