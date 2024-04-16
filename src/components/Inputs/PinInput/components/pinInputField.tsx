import { color, spacing, typography } from "@shared/styles";
import { cx } from "@utils/cx";
import React, { ForwardRefRenderFunction } from "react";
import styled from "styled-components";
import "./pinInput.styles.css";

interface PinInputFieldsProps {
  index: number;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  fillType: "fill" | "transparent" | "outlined" | "bottom";
}

const PinInputFieldComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  PinInputFieldsProps
> = ({ index, value, onChange, onKeyDown, fillType = "fill" }, ref) => {
  const PinInputField = styled.input`
    margin-left: ${index != 0 &&
    spacing.padding.p0}; /* Adjust margin as needed */
    background-color: ${color.input100};
    font-size: ${typography.size.input};
    ${fillType === "fill" &&
    `
      background-color: ${color.input100};
    `}

    ${fillType === "transparent" &&
    `
      background-color: transparent;
    `}

    ${fillType === "outlined" &&
    `
      background-color: transparent;
      border: 1px solid ${color.border};
    `}

    ${fillType === "bottom" &&
    `
      background-color: transparent;
      border-bottom: 2px solid ${color.border};
    `}
  `;
  return (
    <PinInputField
      key={index}
      ref={ref}
      type="text"
      maxLength={1}
      className={cx("lmPinInputField")}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="-"
    />
  );
};

const PinInputField = React.forwardRef(PinInputFieldComponent);

export default PinInputField;
