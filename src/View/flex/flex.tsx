import React, { forwardRef } from "react";
import { FlexProps } from "./flex.types";
import styled from "styled-components";
import "./flex.styles.css";
import { cx } from "../../utils";
const FlexComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  FlexProps
> = ({ direction = "row", weight, children, className, wrap = false, ...props }, ref) => {
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

  const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap ? "wrap" : "nowrap"};

    /* If weight is undefined, set flex-grow to 1 for all children */
    ${() =>
      weight === undefined
        ? ``
        : Array.isArray(children)
        ? children
            .map(
              (_child, index) => `
            & > *:nth-child(${index + 1}) {
              flex-grow: ${weight[index] || 1};
            }
          `
            )
            .join("")
        : ""}
  `;

  return (
    <FlexContainer ref={ref} className={cx("lmFlexBox", className)} {...props}>
      {children}
    </FlexContainer>
  );
};

export const Flex = forwardRef(FlexComponent);
