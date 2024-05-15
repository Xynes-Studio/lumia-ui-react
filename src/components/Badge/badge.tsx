import React, { forwardRef } from "react";
import { BadgeProps } from "./badge.type";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import { color as globalColor } from "@shared/styles";
import { BadgeContainer } from "./badge.styles";

const BadgeComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BadgeProps
> = (
  {
    type = "round",
    label,
    color = globalColor?.foreground,
    backgroundColor = globalColor?.accent100,
    ...props
  },
  ref
) => {
  return (
    <BadgeContainer
      className={cx(props.className)}
      backgroundColor={backgroundColor}
      type={type}
      ref={ref}
      {...props}
    >
      <Text textCase="uppercase" color={color}>
        {typeof label === "number" ? (label > 9 ? "9+" : label) : label}
      </Text>
    </BadgeContainer>
  );
};

export const Badge = forwardRef(BadgeComponent);
