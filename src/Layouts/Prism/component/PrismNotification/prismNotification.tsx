import React from "react";
import {
  PMImage,
  PrismNotificationContainer,
  PrismNotificationElement,
  PrismNotificationElements,
} from "./prismNotification.styles";
import { useNotification } from "@app/Contexts/notifications";
import { Button } from "@components/index";
import { LmCkChevronLeft } from "@icons/lmCkChevronLeft";
import { PrismNotificationProps } from "./prismNotification.types";
import { LMAsset } from "@utils/LumiaAssetManager";
import { H4, Text } from "@texts/index";
import { Flex } from "@app/View";

const PrismNotification: React.FC<PrismNotificationProps> = ({ onClose }) => {
  const { notifications: allNotifications } = useNotification();
  const { notifications, unreadCount } = { ...allNotifications };
  return (
    <PrismNotificationContainer direction="column">
      <Button
        label={`Notifications (${unreadCount})`}
        icon={LmCkChevronLeft}
        type="label"
        onClick={onClose}
      />
      <PrismNotificationElements direction="column">
        {notifications?.map((item, index) => {
          return (
            <PrismNotificationElement key={index} unread={!item.read}>
              {item.image && (
                <PMImage
                  src={item.image}
                  alt="An Image for Notification Element"
                />
              )}
              {item.icon && <LMAsset Asset={item.icon} size={1} />}
              <Flex style={{ flex: 1 }} direction="column">
                <H4 numberOfLines={2}>{item.title}</H4>
                {item.description !== undefined && (
                  <Text numberOfLines={3}>{item.description}</Text>
                )}
              </Flex>
            </PrismNotificationElement>
          );
        })}
      </PrismNotificationElements>
    </PrismNotificationContainer>
  );
};

export default PrismNotification;
