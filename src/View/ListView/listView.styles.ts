import styled from "styled-components";
import { Flex } from "../flex/flex";

export const ListViewContainer = styled(Flex)``;

export const ListHeader = styled(Flex)`
  padding: ${({ theme }) => theme.spacing.padding.p0};
`;

export const ListFooter = styled(Flex)`
  padding: ${({ theme }) => theme.spacing.padding.p0};
`;
