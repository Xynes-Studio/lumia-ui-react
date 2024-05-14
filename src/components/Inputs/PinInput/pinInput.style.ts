import { Flex } from "@app/View";
import { color, spacing, typography } from "@shared/styles";
import styled from "styled-components";

export const PinInputContainer = styled(Flex)``;

export const PinInputStyledField = styled.input<{index:number,fillType:string}>`
    margin-left: ${({index})=>index != 0 &&
    spacing.padding.p0}; /* Adjust margin as needed */
    background-color: ${color.input100};
    font-size: ${typography.size.input};
    ${({fillType})=>fillType === "fill" &&
    `
      background-color: ${color.input100};
    `}

    ${({fillType})=>fillType === "transparent" &&
    `
      background-color: transparent;
    `}

    ${({fillType})=>fillType === "outlined" &&
    `
      background-color: transparent;
      border: 1px solid ${color.border};
    `}

    ${({fillType})=>fillType === "bottom" &&
    `
      background-color: transparent;
      border-bottom: 2px solid ${color.border};
    `}
  `;