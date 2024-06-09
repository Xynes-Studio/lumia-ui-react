import styled from "styled-components";

export const PinInputStyledField = styled.input<{
  index: number;
  fillType: "fill" | "transparent" | "outlined" | "bottom";
}>`
  margin-left: ${({ index, theme }) => index != 0 && theme.spacing.padding.p0};
  background-color: ${({ theme }) => theme.color.input100};
  font-size: ${({ theme }) => theme.typography.size.input};
  width: 2rem; /* Adjust width as needed */
  height: 2rem; /* Adjust height as needed */
  text-align: center;
  vertical-align: middle;
  border-radius: ${({ fillType, theme }) =>
    fillType !== "bottom" && theme.spacing.borderRadius.r0};
  ${({ fillType, theme }) =>
    fillType === "fill" &&
    `
      background-color: ${theme.color.input100};
    `}

  ${({ fillType }) =>
    fillType === "transparent" &&
    `
      background-color: transparent;
    `}

  ${({ fillType, theme }) =>
    fillType === "outlined" &&
    `
      background-color: transparent;
      border: 1px solid ${theme.color.border};
    `}

  ${({ fillType, theme }) =>
    fillType === "bottom" &&
    `
      background-color: transparent;
      border-bottom: 2px solid ${theme.color.border};
    `}
`;
