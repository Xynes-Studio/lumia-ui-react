import { Flex, Image } from "@app/View";
import { spacing } from "@shared/styles";
import styled from "styled-components";

export const ProfileContainer = styled(Flex)`
  padding: ${spacing?.padding?.p0};
`;

export const ProfileAvatar = styled(Image)`
  height: ${spacing?.padding?.p3};
  width: ${spacing?.padding?.p3};
`;

export const ProfileInfoContainer = styled(Flex)``;
