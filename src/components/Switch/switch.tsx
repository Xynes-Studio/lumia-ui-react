"use client";
import { forwardRef, useState } from "react";
import { SwitchProps } from "./switch.type";
import styled from "styled-components";
import { Text } from "@texts/Text/Text";
import { cx } from "@utils/cx";
import "./switch.styles.css";
import { color, neumorphismShadow, spacing } from "@shared/styles";

const SwitchComponent: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  SwitchProps
> = (
  {
    value = false,
    activeColor = color.brand100,
    inactiveColor = color.foregroundInverse300,
    label,
    ...props
  },
  ref
) => {
  const [switchVal, setSwitchVal] = useState(value);
  const SwitchContainer = styled.button`
    margin: ${spacing.padding.medium};
  `;
  const Switch = styled.button`
    box-shadow: ${neumorphismShadow};
    background-color: ${switchVal ? activeColor : inactiveColor};
  `;
  const Indicator = styled.div`
    background-color: ${color.foregroundInverse};
  `;

  return (
    <SwitchContainer
      onClick={() => {
        props.onToggle && props.onToggle(!switchVal);
        setSwitchVal(!switchVal);
      }}
      className={cx("lmSwitchContainer")}
      ref={ref}
      {...props}
    >
      {label != undefined && (
        <Text
          style={{
            marginRight: spacing.padding.small,
          }}
        >
          {label}
        </Text>
      )}
      <Switch className={cx("lmSwitch")}>
        <Indicator
          className={cx("lmSwitchIndicator", switchVal && "lmActive")}
        ></Indicator>
      </Switch>
    </SwitchContainer>
  );
};

export const Switch = forwardRef(SwitchComponent);
