import styles from "./button.module.scss";
import Link from "next/link";
import React, { ComponentPropsWithRef, ReactNode } from "react";
import classNames from "classnames";

interface GenericButtonProps {
  children: ReactNode;
  color?: "default" | "darkest-gray" | "blue" | "dark-blue" | "darker-blue";
  variant?: "bordered";
}

type ButtonProps = GenericButtonProps &
  ComponentPropsWithRef<"button"> & {
    href?: never;
  };

type LinkProps = GenericButtonProps &
  ComponentPropsWithRef<"a"> & {
    href: string;
  };

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return "href" in props;
}

function Button(props: ButtonProps | LinkProps) {
  const { color = "default", variant } = props;
  const btnClass = classNames({
    [styles[
      `${
        color === "default" && variant === "bordered"
          ? "btn-default-outline"
          : "btn-default"
      }`
    ]]: color === "default"
  });

  console.log(btnClass);

  if (isLinkProps(props)) {
    const { children, href, ...others } = props;
    return (
      <Link
        href={href}
        {...others}
        className={`${styles["btn-link"]} ${btnClass}`}
      >
        {children}
      </Link>
    );
  }

  const { children, ...others } = props;

  return (
    <button {...others} className={`${styles.btn} ${btnClass}`}>
      {children}
    </button>
  );
}

export default Button;
