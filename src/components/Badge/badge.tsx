import React, { forwardRef } from "react";
import { BadgeProps } from "./badge.type";
import { Text } from "@texts/index";
import { Flex } from "@app/View";
import { cx } from "@utils/cx";
import { spacing, strokes, color as globalColor } from "@shared/styles";
import styled from "styled-components";
import "./badge.styles.css";

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
  const BadgeContainer = styled(Flex)`
    background-color: ${type !== "square-outlined"
      ? backgroundColor
      : "transparent"};
    border-radius: ${type === "round" ? "100%" : spacing?.borderRadius?.r0};
    border: ${type === "square-outlined"
      ? `${strokes?.s0} solid ${globalColor?.foreground}`
      : "none"};
    width: ${type === "round" ? "4vw" : "fit-content"};
    height: ${type === "round" ? "4vw" : "fit-content"};
  `;

  return (
    <BadgeContainer
      className={cx("lmBadgeContainer", props.className)}
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
