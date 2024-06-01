"use client";
import { forwardRef, useState, useEffect } from "react";
import { SwitchProps } from "./switch.type";
import { Text } from "@texts/Text/Text";
import { cx } from "@utils/cx";
import { color } from "@shared/styles";
import { Indicator, SwitchContainer, StyledSwitch } from "./switch.styles";

const SwitchComponent: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  SwitchProps
> = (
  {
    value = false,
    activeColor = color.accent100,
    inactiveColor = color.foregroundInverse300,
    label,
    ...props
  },
  ref
) => {
  const [switchVal, setSwitchVal] = useState(value);

  useEffect(() => {
    setSwitchVal(value);
  }, [value]);

  return (
    <SwitchContainer
      onClick={() => {
        props.onToggle && props.onToggle(!switchVal);
        setSwitchVal(!switchVal);
      }}
      ref={ref}
      {...props}
    >
      {label != undefined && (
        <Text
          style={{
            marginRight: 0,
          }}
        >
          {label}
        </Text>
      )}
      <StyledSwitch
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        switchVal={switchVal}
      >
        <Indicator
          active={switchVal}
          className={cx("lmSwitchIndicator", switchVal && "lmActive")}
        ></Indicator>
      </StyledSwitch>
    </SwitchContainer>
  );
};

export const Switch = forwardRef(SwitchComponent);
