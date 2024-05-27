import { Flex } from "@app/View";
import { color, shadowDeep, spacing } from "@shared/styles";
import styled from "styled-components";

export const PrismNotificationContainer = styled(Flex)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${spacing.padding.p0} ${spacing.padding.p2};
`;
export const PrismNotificationElements = styled(Flex)`
  width: 100%;
  flex: 1;
  align-items: center;
`;
export const PrismNotificationElement = styled(Flex)<{unread: boolean}>`
  width: 95%;
  min-height: 2rem;
  padding: ${spacing.padding.p0} ${spacing.padding.p2};
  background-color: ${({unread})=> unread ? color.foregroundInverse : color.foregroundInverse200};
  border-radius: ${spacing.borderRadius.r1};
  box-shadow: ${shadowDeep};
  align-items: center;
`;
export const PMImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${color.foregroundInverse200};
  border-radius: 1.5rem;
  margin-right: ${spacing.padding.p1};
  object-fit: cover;
`;
