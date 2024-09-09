import { Text } from "@texts/index";
import styled, { css } from "styled-components";

const baseStyle = css`
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
  list-style-position: outside;
  li {
    position: relative; /* Ensure li items are positioned relatively */
    margin-bottom: ${({ theme }) => theme.spacing.padding.p1};

    /* Modern browsers: ::marker pseudo-element */
    &::marker {
      color: ${({ theme }) => theme.color.foreground300}; /* Change this to your desired color */
    }
  }
`;

export const ListItem1 = styled.ul<{ val: string }>`
  ${baseStyle}
  ${({ val }) => `list-style-type: ${val}`}
`;

export const ListItem2 = styled(ListItem1)`
  padding-left: ${({ theme }) => theme.spacing.padding.p0};
`;

export const ListItem3 = styled(ListItem1)`
  padding-left: ${({ theme }) => theme.spacing.padding.p1};
`;

export const ListItem4 = styled(ListItem1)`
  padding-left: ${({ theme }) => theme.spacing.padding.p2};
`;

export const ListItem5 = styled(ListItem1)`
  padding-left: ${({ theme }) => theme.spacing.padding.p3};
`;

export const ListItem6 = styled(ListItem1)`
  padding-left: ${({ theme }) => theme.spacing.padding.p4};
`;

export const ListText = styled(Text)`
  margin-left: ${({ theme }) => theme.spacing.padding.p0};
`;
