/* eslint-disable @typescript-eslint/no-unused-vars */
import { LmCkCheckCircle } from "@icons/lmCkCheckCircle";
import { LmCkClose } from "@icons/lmCkClose";
import { color } from "@shared/styles";
import { H4, Text } from "@texts/index";
import { LMAsset } from "@utils/LumiaAssetManager";
import { forwardRef } from "react";
import { Button } from "..";
import {
  AlignDiv,
  ScrollDiv,
  StyledCloseBtn,
  StyledDialogue,
  StyledDialogueChildrenContainer,
  StyledDialogueContent,
  StyledDialogueFooter,
  StyledHeader
} from "./dialogue.styles";
import { DialogueProps } from "./dialogue.type";
export const Dialogue = forwardRef<HTMLDivElement, DialogueProps>(
  (
    {
      children,
      title,
      description,
      primaryBtnLabel,
      primaryBtnOnPress,
      actionBtnType = "none",
      contentAlign = "left",
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
      <StyledDialogue visible={visible} ref={ref} {...rest}>
        <StyledDialogueContent direction="column">
          <StyledHeader
            weight={[20, 1]}
            direction={contentAlign == "right" ? "row-reverse" : "row"}
          >
            <AlignDiv contentAlign={contentAlign}>{title ? <H4 numberOfLines={2}>{title}</H4> : <div></div>}</AlignDiv>
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
            <StyledDialogueChildrenContainer direction="column">
              <AlignDiv contentAlign={contentAlign}>{description && <Text>{description}</Text>}</AlignDiv>
              <AlignDiv contentAlign={contentAlign}>{children}</AlignDiv>
            </StyledDialogueChildrenContainer>
          </ScrollDiv>

          {actionBtnType != "none" && (
            <StyledDialogueFooter direction="column">
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
            </StyledDialogueFooter>
          )}
        </StyledDialogueContent>
      </StyledDialogue>
    );
  }
);
