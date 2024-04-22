import styled from "styled-components";
import { Flex } from "../flex/flex";
import { spacing } from "@shared/styles";

export const ListViewContainer = styled(Flex)<{ horizontal: boolean }>``;

export const ListHeader = styled.div`
  padding: ${spacing.padding.p0};
`;

export const ListFooter = styled.div`
  padding: ${spacing.padding.p0};
`;
