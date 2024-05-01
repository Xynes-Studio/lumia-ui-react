/* eslint-disable @typescript-eslint/no-unused-vars */
import { LmCkCheckCircle } from "@icons/lmCkCheckCircle";
import { LmCkClose } from "@icons/lmCkClose";
import { color } from "@shared/styles";
import { H4, Text } from "@texts/index";
import { LMAsset } from "@utils/LumiaAssetManager";
import { forwardRef } from "react";
import styled from "styled-components";
import { Button } from "..";
import {
  BasicStyledDialouge,
  ScrollDiv,
  StyledBasicDialougeFooter,
  StyledCloseBtn,
  StyledHeader,
  StyledDialougeChildrenContainer,
  StyledDialougeContent,
} from "./dialouge.styles";
import { DialougeProps } from "./dialouge.type";
export const Dialouge = forwardRef<HTMLDivElement, DialougeProps>(
  (
    {
      children,
      title,
      description,
      primaryBtnlabel,
      primaryBtnOnPress,
      actionBtnType = "none",
      contentAlign = "left",
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
    const StyledDialouge = styled(BasicStyledDialouge)`
      display: ${visible ? "block" : "none"};
    `;
    const StyledDialougeFooter = styled(StyledBasicDialougeFooter)`
      justify-content: 'center';
    `;
    return (
      <StyledDialouge ref={ref} {...rest}>
        <StyledDialougeContent direction="column">
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
            <StyledDialougeChildrenContainer direction="column">
              {description && <Text>{description}</Text>}
              {children}
            </StyledDialougeChildrenContainer>
          </ScrollDiv>

          {actionBtnType != "none" && (
            <StyledDialougeFooter direction="column">
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
            </StyledDialougeFooter>
          )}
        </StyledDialougeContent>
      </StyledDialouge>
    );
  }
);
