import React, { forwardRef } from "react";
import "./card.styles.css";
import { CardProps } from "./card.type";
import styled from "styled-components";
import { Flex } from "@app/View";
import { Text } from "@texts/index";
import { Switch } from "@components/Switch/switch";
import { cx } from "@utils/cx";
import { spacing, strokes, color } from "@shared/styles";

const CardComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardProps
> = (
  {
    type,
    image,
    title,
    description,
    displaySwitch,
    toggleValue = false,
    onToggle,
    actionElement,
    width = "22vw",
    ...props
  },
  ref
) => {
  const CardContainer = styled(Flex)`
    width: ${width};
    padding: ${spacing?.padding?.p4};
    border-radius: ${spacing?.borderRadius?.r3};
    background-color: ${type !== "outlined" && type !== "default"
      ? color?.foregroundInverse300
      : "none"};
    border: ${type !== "fill" && type !== "default"
      ? `${strokes?.s0} solid ${color?.border100}`
      : "null"};
  `;

  const ImageContainer = styled(Flex)`
    border-radius: ${spacing?.padding?.p2} ${spacing?.padding?.p2} 0 0;
  `;

  const CardImage = styled.img``;

  const InfoContainer = styled(Flex)``;

  const SwitchWrapper = styled(Flex)``;

  const CardTitle = styled(Text)``;

  const CardDesc = styled(Text)`
    margin-top: 1.5vh;
  `;

  return (
    <CardContainer
      direction="column"
      className={cx("lmCardContainer", props.className)}
      ref={ref}
      {...props}
    >
      <ImageContainer className={cx("lmCardImageContainer")}>
        {image !== undefined ? (
          <CardImage className={cx("lmCardImage")} src={image} />
        ) : null}
        {actionElement !== undefined ? actionElement : null}
      </ImageContainer>
      <InfoContainer direction="column" className={cx("lmInfoContainer")}>
        <SwitchWrapper className={cx("lmCardSwitchWrapper")}>
          <CardTitle
            textCase="capitalize"
            numberOfLines={2}
            className={cx("lmCardTitle")}
          >
            {title}
          </CardTitle>
          {displaySwitch ? (
            <Switch
              style={{ margin: 0 }}
              value={toggleValue}
              onToggle={onToggle}
            />
          ) : null}
        </SwitchWrapper>
        <CardDesc numberOfLines={4} type="caption" className={cx("lmCardDesc")}>
          {description}
        </CardDesc>
      </InfoContainer>
    </CardContainer>
  );
};

export const Card = forwardRef(CardComponent);
