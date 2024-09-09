import { cx } from "@utils/cx";
import React, { ForwardRefRenderFunction } from "react";
import { PinInputStyledField } from "./pinInput.styles";

interface PinInputFieldsProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  index: number;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  fillType: "fill" | "transparent" | "outlined" | "bottom";
}

const PinInputFieldComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  PinInputFieldsProps
> = (
  { index, value, onChange, onKeyDown, fillType = "fill", ...props },
  ref
) => {
  return (
    <PinInputStyledField
      index={index}
      fillType={fillType}
      key={index}
      ref={ref}
      maxLength={1}
      className={cx("lmPinInputField")}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="-"
      {...props}
    />
  );
};

const PinInputField = React.forwardRef(PinInputFieldComponent);

export default PinInputField;
