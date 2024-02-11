import classNames from "classnames";
import styles from "./currency-btn.module.scss";
import React from "react";
import { GoTriangleDown } from "react-icons/go";

function CurrencyBtn() {
  return (
    <button type="button" className={classNames(styles["currency-btn"], "btn")}>
      USD <GoTriangleDown />
    </button>
  );
}

export default CurrencyBtn;
