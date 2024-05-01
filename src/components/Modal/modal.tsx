/* eslint-disable @typescript-eslint/no-unused-vars */
// Link.tsx
import { LmCkCheckCircle } from "@icons/lmCkCheckCircle";
import { LmCkClose } from "@icons/lmCkClose";
import { color } from "@shared/styles";
import { H4, Text } from "@texts/index";
import { LMAsset } from "@utils/LumiaAssetManager";
import { forwardRef } from "react";
import styled from "styled-components";
import { Button } from "..";
import {
  BasicStyledModal,
  StyledCloseBtn,
  StyledModalContent,
  StyledBasicModalFooter,
  ScrollDiv,
  StyledModalChildrenContainer,
  StyledHeader,
} from "./modal.styles";
import { ModalProps } from "./modal.type";
import { Flex } from "@app/View";
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      title,
      description,
      primaryBtnlabel,
      primaryBtnOnPress,
      actionBtnType = "none",
      actionBtnAlign = "left",
      primaryIcon,
      onClose,
      secondaryBtnOnPress,
      secondaryIcon,
      secondaryBtnlabel,
      visible = false,
      closeIcon = false,
      ...rest
    },
    ref
  ) => {
    const StyledModal = styled(BasicStyledModal)`
      display: ${visible ? "block" : "none"};
    `;
    const StyledModalFooter = styled(StyledBasicModalFooter)`
      justify-content: ${actionBtnAlign};
    `;
    return (
      <StyledModal ref={ref} {...rest}>
        <StyledModalContent direction="column">
          <StyledHeader>
            {title ? <H4>{title}</H4>:<div></div>}
            {closeIcon && (
              <StyledCloseBtn>
                <LMAsset
                  visible={true}
                  Asset={LmCkClose}
                  color="#000"
                  size={0.8}
                  onClick={() => {
                    if (onClose) {
                      onClose();
                    }
                  }}
                />
              </StyledCloseBtn>
            )}
          </StyledHeader>

          <ScrollDiv>
            <StyledModalChildrenContainer direction="column">
              {description && <Text>{description}</Text>}
              {children}
            </StyledModalChildrenContainer>
          </ScrollDiv>

          {actionBtnType != "none" && (
            <StyledModalFooter direction="row">
              {(actionBtnType == "both" || actionBtnType == "primary") && (
                <Button
                  type="fill"
                  label={primaryBtnlabel || "Submit"}
                  icon={primaryIcon || LmCkCheckCircle}
                  onClick={(
                    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    if (primaryBtnOnPress) {
                      primaryBtnOnPress(event);
                    }
                  }}
                  backgroundColor={color.primary}
                />
              )}

              {(actionBtnType == "both" || actionBtnType == "secondary") && (
                <Button
                  type="outlined"
                  label={secondaryBtnlabel || "Cancel"}
                  icon={secondaryIcon || LmCkClose}
                  onClick={(
                    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    if (secondaryBtnOnPress) {
                      secondaryBtnOnPress(event);
                    }
                  }}
                  backgroundColor={color.medium100}
                />
              )}
            </StyledModalFooter>
          )}
        </StyledModalContent>
      </StyledModal>
    );
  }
);
