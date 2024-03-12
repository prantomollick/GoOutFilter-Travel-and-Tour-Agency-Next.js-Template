import classNames from "classnames";
import styles from "./language-btn.module.scss";
import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type LanguageBtnProps = PropsWithChildren &
  ComponentPropsWithoutRef<"button"> & {
    flagCode?: string;
    countryCode?: string;
  };

function LanguageBtn({
  children,
  flagCode = "🇺🇸",
  countryCode = "US",
  ...props
}: LanguageBtnProps) {
  return (
    <button
      type="button"
      className={classNames(styles["lang-btn"], "btn")}
      {...props}
    >
      <Image
        width={20}
        height={20}
        src={`https://flagsapi.com/${countryCode}/flat/24.png`}
        alt="flag"
        className="rounded-full"
      />
      <div className="flex gap-1 item-center">{children}</div>
    </button>
  );
}

export default LanguageBtn;
