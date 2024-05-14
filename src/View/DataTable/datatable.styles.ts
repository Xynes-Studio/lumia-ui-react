import styled from "styled-components";
import { Flex } from "@app/View";
import { shadow, spacing } from "@shared/styles";
import { Text } from "@texts/index";
import { color } from "@shared/styles";

export const DataTableContainer = styled(Flex)`
  padding: ${spacing.padding.p3};
`;

export const TableWithoutSearchContainer = styled(Flex)`
  overflow: hidden;
  height: fit-content;
  border-radius: ${spacing.borderRadius.r1};
  box-shadow: ${shadow};
`;

export const HeaderContainer = styled(Flex)`
  flex-direction: row;
  margin-bottom: ${spacing.padding.p2};
  background-color: ${color.foregroundInverse300};
  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled(Flex)`
  flex-direction: column;
`;

export const FooterContainer = styled(Flex)`
  flex-direction: row;
  justify-content: center;
  margin-top: ${spacing.padding.p2};
`;

export const SearchContainer = styled.div<{
  searchBarPosition: "start" | "center" | "end";
}>`
  width: 30%;
  margin-bottom: ${spacing.padding.p3};
  align-self: ${({ searchBarPosition }) =>
    searchBarPosition === "center"
      ? "center"
      : searchBarPosition === "start"
      ? "flex-start"
      : "flex-end"};
`;

export const RowLabels = styled(Text)`
  width: 100%;
  text-align: center;
`;
