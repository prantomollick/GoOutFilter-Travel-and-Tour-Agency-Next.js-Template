import classNames from "classnames";
import Link from "next/link";
import {
  GoChevronDown,
  GoChevronLeft,
  GoChevronRight,
  GoChevronUp,
  GoSmiley
} from "react-icons/go";
import styles from "./arrow-btn.module.scss";

import { ComponentPropsWithoutRef, ReactNode, Ref, forwardRef } from "react";

interface GenericArrowProps {
  variant?: "bordered";
  color?: "default";
  size?: "sm" | "md" | "lg" | "xl";
  direction: "up" | "down" | "left" | "right";
}

type ArrowBtnProps = GenericArrowProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: never;
  };

type ArrowLinkProps = GenericArrowProps &
  ComponentPropsWithoutRef<"a"> & {
    href: string;
  };

function isLinkProps(
  props: ArrowBtnProps | ArrowLinkProps
): props is ArrowLinkProps {
  return "href" in props;
}

const btnSize = {
  sm: 32,
  md: 40,
  lg: 50,
  xl: 60
};

type Props = ArrowBtnProps | ArrowLinkProps;

const ArrowBtn = forwardRef(
  (props: Props, ref: Ref<HTMLButtonElement | HTMLAnchorElement>) => {
    const {
      variant,
      color = "default",
      size = "md",
      direction,
      className
    } = props;

    const iconSize = btnSize[size] * 0.5;

    const arrowBtnCss = classNames(
      {
        [styles["arrow-btn-size-sm"]]: size === "sm",
        [styles["arrow-btn-size-md"]]: size === "md",
        [styles["arrow-btn-size-lg"]]: size === "lg",
        [styles["arrow-btn-size-xl"]]: size === "xl",
        [styles[
          variant === "bordered" ? "arrow-btn-outline" : "arrow-btn-default"
        ]]: color === "default"
      },
      className,
      styles["arrow-btn"],
      styles["rounded-full"]
    );

    let pointedIcon: ReactNode;
    switch (direction) {
      case "up":
        pointedIcon = <GoChevronUp size={iconSize} />;
        break;
      case "down":
        pointedIcon = <GoChevronDown size={iconSize} />;
        break;

      case "left":
        pointedIcon = <GoChevronLeft size={iconSize} />;
        break;

      case "right":
        pointedIcon = <GoChevronRight size={iconSize} />;
        break;

      default:
        pointedIcon = <GoSmiley />;
    }

    if (isLinkProps(props)) {
      const { href, ...rest } = props;
      return (
        <Link
          href={href}
          {...rest}
          className={arrowBtnCss}
          ref={ref as Ref<HTMLAnchorElement>}
        >
          {pointedIcon}
        </Link>
      );
    }

    const { ...rest } = props;
    return (
      <button
        {...rest}
        className={arrowBtnCss}
        ref={ref as Ref<HTMLButtonElement>}
      >
        {pointedIcon}
      </button>
    );
  }
);

ArrowBtn.displayName = "ArrowBtn";

export default ArrowBtn;
