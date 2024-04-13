import { color, typography } from "@shared/styles";
import React, { ForwardRefRenderFunction } from "react";
import styled from "styled-components";

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
    width: 40px; /* Adjust width as needed */
    height: 40px; /* Adjust height as needed */
    margin-right: 10px; /* Adjust margin as needed */
    background-color: ${color.input100};
    text-align: center;
    vertical-align: middle;
    border-radius: 1vh;
    font-size: ${typography.size.s2};

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
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="-"
    />
  );
};

const PinInputField = React.forwardRef(PinInputFieldComponent);

export default PinInputField;
