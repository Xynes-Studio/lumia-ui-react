import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { FlexContainer } from "./flex.styles";
import "./flex.styles.css";
import { FlexProps } from "./flex.types";
const FlexComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  FlexProps
> = (
  { direction = "row", weight, children, className, wrap = false, ...props },
  ref
) => {
  if (weight != undefined) {
    // Validate if children and weight lengths match
    const validLength = React.Children.count(children) === weight?.length;

    // If lengths don't match, throw an error
    if (!validLength) {
      throw new Error(
        "Number of children must match the length of the weight array"
      );
    }
  }

  return (
    <FlexContainer direction={direction} wrap={wrap} weight={weight} ref={ref} className={cx("lmFlexBox", className)} {...props}>
      {children}
    </FlexContainer>
  );
};

export const Flex = forwardRef(FlexComponent);
