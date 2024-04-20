"use client";
import React, { forwardRef } from "react";
import { TabsProps } from "./tabs.type";
import { Text } from "@texts/Text/Text";
import styled from "styled-components";
import { cx } from "@utils/cx";
import { LMAsset } from "@utils/LumiaAssetManager";
import { color as globalColor } from "@shared/styles";
import { spacing, strokes } from "@shared/styles";
import "./tabs.styles.css";

const TabsComponent: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  TabsProps
> = (
  {
    direction = "horizontal",
    selectType = "select-100",
    label,
    icon,
    selected = true,
    color,
    iconSize = 1,
    ...props
  },
  ref
) => {
  const TabsContainer = styled.a`
    padding: ${direction === "horizontal"
      ? `calc(${spacing?.padding?.p0} / 2) ${spacing?.padding?.p1}`
      : `${spacing?.padding?.p1} ${spacing?.padding?.p0} 0 ${spacing?.padding?.p0}`};
    flex-direction: ${direction === "horizontal" ? "row" : "column"};
    background-color: ${(selectType === "select-200" ||
      (selectType === "select-300" && direction !== "horizontal")) &&
    selected
      ? globalColor?.accent100
      : "transparent"};
    border-radius: ${selectType === "select-200" ||
    (selectType === "select-300" && selected && direction !== "horizontal")
      ? spacing?.borderRadius?.r0
      : "none"};
    border-bottom: ${selectType === "select-100" && selected
      ? `${strokes?.s2} solid ${globalColor?.accent100}`
      : "null"};
    border-left: ${selectType === "select-300" &&
    direction === "horizontal" &&
    selected
      ? `${strokes?.s2} solid ${globalColor?.accent100}`
      : "null"};
    &:hover {
      opacity: ${!selected ? 0.7 : 1};
    }
  `;

  return (
    <TabsContainer
      title={label}
      className={cx("lmTabsContainer", props.className)}
      {...props}
      ref={ref}
    >
      {icon !== undefined ? (
        <LMAsset
          visible={icon !== undefined}
          Asset={icon}
          color={color}
          size={iconSize}
          style={
            direction === "vertical"
              ? { marginBottom: spacing?.padding?.p0 }
              : { marginBottom: "none" }
          }
        />
      ) : null}
      {label ? (
        <Text color={color} type="caption" textCase="capitalize">
          {label.length > 100 ? `${label?.substring(0, 100)}...` : label}
        </Text>
      ) : null}
    </TabsContainer>
  );
};

export const Tabs = forwardRef(TabsComponent);
