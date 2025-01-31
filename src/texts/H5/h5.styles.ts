import styled from "styled-components";

export const StyleH5 = styled.h5<{
  type: "sans" | "serif";
  numberOfLines?: number;
  color?: string;
}>`
  font-family: ${({ type, theme }) =>
    type === "serif"
      ? theme.typography.type.title
      : theme.typography.type.primary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.h5};
  color: ${({ color }) => color || "inherit"};
  ${({ numberOfLines }) =>
    numberOfLines &&
    numberOfLines !== 0 &&
    `
      display: -webkit-box;
      -webkit-line-clamp: ${numberOfLines};
      -webkit-box-orient: vertical;  
      overflow: hidden;
      text-overflow: ellipsis;
      line-clamp: ${numberOfLines};
    `}
  font-size: ${({ theme }) => theme.typography.size.h5};
`;
