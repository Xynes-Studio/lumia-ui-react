import styled from "styled-components";

interface StyleTextProps {
  type: "error" | "body" | "caption";
  numberOfLines?: number;
  color?: string;
  textCase?: string;
}

export const StyleText = styled.p<StyleTextProps>`
  font-family: ${({ theme }) =>
    theme.typography.type.primary}; /* Default font family */
  font-size: ${({ type, theme }) =>
    type === "error"
      ? theme.typography.size.code
      : type === "caption"
        ? theme.typography.size.caption
        : theme.typography.size.text};
  color: ${({ type, theme, color }) =>
    color || (type === "error" ? theme.color.error : theme.color.foreground)};
  line-height: 130%;
  text-transform: ${({ textCase }) => textCase || "none"};
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
`;
