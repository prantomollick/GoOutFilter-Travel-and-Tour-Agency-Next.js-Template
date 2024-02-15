import styles from "./currency-btn.module.scss";

import classNames from "classnames";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type CurrencyBtnProps = PropsWithChildren & ComponentPropsWithoutRef<"button">;

function CurrencyBtn({ children, ...props }: CurrencyBtnProps) {
  return (
    <button
      type="button"
      className={classNames(styles["currency-btn"], "btn")}
      {...props}
    >
      {children}
    </button>
  );
}

export default CurrencyBtn;
