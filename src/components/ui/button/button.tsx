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
    ]]: color === "default",

    [styles[
      `${
        color === "blue" && variant === "bordered"
          ? "btn-blue-outline"
          : "btn-blue"
      }`
    ]]: color === "blue",

    [styles[
      `${
        color === "dark-blue" && variant === "bordered"
          ? "btn-dark-blue-outline"
          : "btn-dark-blue"
      }`
    ]]: color === "dark-blue",

    [styles[
      `${
        color === "darkest-gray" && variant === "bordered"
          ? "btn-darkest-gray-outline"
          : "btn-darkest-gray"
      }`
    ]]: color === "darkest-gray"
  });

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
