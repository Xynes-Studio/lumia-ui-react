import { Flex, Image } from "@app/View";
import styled from "styled-components";

export const ProfileContainer = styled(Flex)`
  padding: ${({ theme }) => theme.spacing.padding.p0};
`;

export const ProfileAvatar = styled(Image)`
  height: ${({ theme }) => theme.spacing.padding.p3};
  width: ${({ theme }) => theme.spacing.padding.p3};
`;

export const ProfileInfoContainer = styled(Flex)``;
