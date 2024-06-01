import React, { forwardRef } from "react";
import { TabsProps } from "./tabs.type";
import { Text } from "@texts/Text/Text";
import { cx } from "@utils/cx";
import { LMAsset } from "@utils/LumiaAssetManager";
import { spacing } from "@shared/styles";
import { TabsContainer, TabsWrapper } from "./tabs.styles.ts";

const TabsComponent: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  TabsProps
> = (
  {
    direction = "horizontal",
    selectType = "select-100",
    label,
    icon,
    selected = false,
    color,
    iconSize = 0.7,
    disabled = false,
    onClick,
    ...props
  },
  ref
) => {
  return (
    <TabsContainer
      title={label}
      className={cx("lmTabsContainer", props.className)}
      disabled={disabled}
      onClick={() => {
        onClick && !disabled && onClick();
      }}
      {...props}
      ref={ref}
    >
      <TabsWrapper
        selected={selected}
        selectType={selectType}
        directionInside={direction}
        direction={direction === "horizontal" ? "row" : "column"}
        className={cx("lmTabsWrapper")}
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
      </TabsWrapper>
    </TabsContainer>
  );
};

export const Tabs = forwardRef(TabsComponent);
