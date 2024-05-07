import styled from "styled-components";
import { Flex } from "@app/View";
import { spacing } from "@shared/styles";
import { Text } from "@texts/index";
import { color } from "@shared/styles";

export const DataTableContainer = styled(Flex)`
  padding: ${spacing.padding.p3};
`;

export const HeaderContainer = styled(Flex)`
  flex-direction: row;
  margin-bottom: ${spacing.padding.p2};
  background-color: ${color.foregroundInverse300};
  border-top-left-radius: ${spacing.borderRadius.r1};
  border-top-right-radius: ${spacing.borderRadius.r1};
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


export const SearchContainer = styled.div`
  width: 30%;
  margin-bottom: ${spacing.padding.p1};
`;

export const RowLabels = styled(Text)`
width: 100%;
text-align: center;
`;