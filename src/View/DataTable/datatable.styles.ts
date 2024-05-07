import styled from "styled-components";
import { Flex } from "@app/View";
import { spacing } from "@shared/styles";

export const DataTableContainer = styled(Flex)`
  flex-direction: column;
  padding: ${spacing.padding.p3};
`;

export const HeaderContainer = styled(Flex)`
  flex-direction: row;
  padding-bottom: ${spacing.padding.p2};
`;

export const RowContainer = styled(Flex)`
  flex-direction: column;
  margin-top: ${spacing.padding.p1};
`;

export const FooterContainer = styled(Flex)`
  flex-direction: row;
  justify-content: center;
  margin-top: ${spacing.padding.p2};
`;

export const SearchContainer = styled.div`
  margin-bottom: ${spacing.padding.p1};
`;
