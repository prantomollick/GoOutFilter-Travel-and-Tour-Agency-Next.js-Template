import styles from "./button.module.scss";
import Link from "next/link";
import React, {
  ComponentPropsWithRef,
  PropsWithChildren,
  ReactNode
} from "react";
import classNames from "classnames";

interface GenericButtonProps {
  color?:
    | "default"
    | "white"
    | "darkest-gray"
    | "blue"
    | "dark-blue"
    | "darker-blue";
  variant?: "bordered";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  fontWeight?: "normal" | "medium" | "semibold";
  starticon?: ReactNode;
  endicon?: ReactNode;
  className?: string;
}

type ButtonProps = GenericButtonProps &
  PropsWithChildren &
  ComponentPropsWithRef<"button"> & {
    href?: never;
  };

type LinkProps = GenericButtonProps &
  PropsWithChildren &
  ComponentPropsWithRef<"a"> & {
    href: string;
  };

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return "href" in props;
}

function Button(props: ButtonProps | LinkProps) {
  const {
    color = "default",
    variant,
    size = "md",
    radius = "none",
    fontWeight = "normal",
    starticon,
    endicon,
    className
  } = props;

  const btnClass = renderColorVarientCssClass<GenericButtonProps>(
    color,
    variant,
    size,
    radius,
    fontWeight,
    starticon,
    endicon,
    className
  );

  if (isLinkProps(props)) {
    const { children, href, ...others } = props;
    return (
      <Link
        href={href}
        {...others}
        className={`${styles["btn-link"]} ${btnClass}`}
      >
        {starticon}
        {children}
        {endicon}
      </Link>
    );
  }

  const { children, ...others } = props;

  return (
    <button {...others} className={`${styles.btn} ${btnClass}`}>
      {starticon}
      {children}
      {endicon}
    </button>
  );
}

function renderColorVarientCssClass<T extends GenericButtonProps>(
  color: T["color"],
  variant: T["variant"],
  size: T["size"],
  radius: T["radius"],
  fontWeight: T["fontWeight"],
  starticon: T["starticon"],
  endicon: T["endicon"],
  className: T["className"]
): string {
  return classNames(
    {
      //button color, outline
      [styles[
        `${
          color === "default" && variant === "bordered"
            ? "btn-default-outline"
            : "btn-default"
        }`
      ]]: color === "default",

      [styles[
        `${
          color === "white" && variant === "bordered"
            ? "btn-white-outline"
            : "btn-white"
        }`
      ]]: color === "white",

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
          color === "darker-blue" && variant === "bordered"
            ? "btn-darker-blue-outline"
            : "btn-darker-blue"
        }`
      ]]: color === "darker-blue",

      [styles[
        `${
          color === "darkest-gray" && variant === "bordered"
            ? "btn-darkest-gray-outline"
            : "btn-darkest-gray"
        }`
      ]]: color === "darkest-gray",

      //radius
      [`${styles["rounded-sm"]}`]: radius === "sm",
      [`${styles["rounded-md"]}`]: radius === "md",
      [`${styles["rounded-lg"]}`]: radius === "lg",
      [`${styles["rounded-full"]}`]: radius === "full",

      //size
      [`${styles["btn-size-sm"]}`]: size === "sm",
      [`${styles["btn-size-md"]}`]: size === "md",
      [`${styles["btn-size-lg"]}`]: size === "lg",

      //font Wieght
      [`${styles["font-normal"]}`]: fontWeight === "normal",
      [`${styles["font-medium"]}`]: fontWeight === "medium",
      [`${styles["font-semibold"]}`]: fontWeight === "semibold",

      // Flex Gap maintain twik class
      [`${styles["gap-10px"]}`]: starticon,
      [`${styles["gap-13px"]}`]: endicon
    },
    className
  );
}

export default Button;
