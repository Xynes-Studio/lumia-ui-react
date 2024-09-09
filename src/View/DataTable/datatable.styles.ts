import styled from "styled-components";
import { Flex } from "@app/View";
import { Text } from "@texts/index";

export const DataTableContainer = styled(Flex)`
  padding: ${({ theme }) => theme.spacing.padding.p3};
`;

export const TableWithoutSearchContainer = styled(Flex)`
  overflow: hidden;
  height: fit-content;
  border-radius: ${({ theme }) => theme.spacing.borderRadius.r1};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const HeaderContainer = styled(Flex)`
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.padding.p2};
  background-color: ${({ theme }) => theme.color.foregroundInverse300};
  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled(Flex)`
  flex-direction: column;
`;

export const FooterContainer = styled(Flex)`
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.padding.p2};
`;

export const SearchContainer = styled.div<{
  searchBarPosition: "start" | "center" | "end";
}>`
  width: 30%;
  margin-bottom: ${({ theme }) => theme.spacing.padding.p3};
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
