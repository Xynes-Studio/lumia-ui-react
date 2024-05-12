import { cx } from "@utils/cx";
import React, { ForwardRefRenderFunction } from "react";
import { PinInputStyledField } from "../pinInput.style";
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
  return (
    <PinInputStyledField
      index={index}
      fillType={fillType}
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
