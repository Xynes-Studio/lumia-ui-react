/* eslint-disable @typescript-eslint/no-unused-vars */
import { LmCkCheckCircle } from "@icons/lmCkCheckCircle";
import { LmCkClose } from "@icons/lmCkClose";
import { color } from "@shared/styles";
import { H4, Text } from "@texts/index";
import { LMAsset } from "@utils/LumiaAssetManager";
import { forwardRef } from "react";
import { Button } from "..";
import {
  ScrollDiv,
  StyledCloseBtn,
  StyledHeader,
  StyledModal,
  StyledModalChildrenContainer,
  StyledModalContent,
  StyledModalFooter
} from "./modal.styles";
import { ModalProps } from "./modal.type";
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      title,
      description,
      primaryBtnLabel,
      primaryBtnOnPress,
      actionBtnType = "none",
      actionBtnAlign = "left",
      primaryIcon,
      onClose,
      secondaryBtnOnPress,
      secondaryIcon,
      secondaryBtnLabel,
      visible = false,
      closeIcon = false,
      ...rest
    },
    ref
  ) => {
    
    return (
      <StyledModal visible={visible} ref={ref} {...rest}>
        <StyledModalContent direction="column">
          <StyledHeader>
            {title ? <H4 numberOfLines={2}>{title}</H4>:<div></div>}
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
            <StyledModalFooter actionBtnAlign={actionBtnAlign} direction="row">
              {(actionBtnType == "both" || actionBtnType == "primary") && (
                <Button
                  type="fill"
                  label={primaryBtnLabel || "Submit"}
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
                  label={secondaryBtnLabel || "Cancel"}
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
