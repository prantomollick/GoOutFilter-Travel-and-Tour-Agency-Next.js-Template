import classNames from "classnames";
import styles from "./language-btn.module.scss";
import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";

function LanguageBtn() {
  return (
    <button type="button" className={classNames(styles["lang-btn"], "btn")}>
      <Image
        width={20}
        height={20}
        src="/flag.png"
        alt="flag"
        className="rounded-full"
      />
      <div className="flex gap-1 item-center">
        <span>Country Name</span>
        <GoTriangleDown />
      </div>
    </button>
  );
}

export default LanguageBtn;
