import React, { forwardRef } from "react";
import "./card.styles.ts";
import { CardProps } from "./card.type";
import { Switch } from "@components/Switch/switch";
import { cx } from "@utils/cx";
import {
  CardContainer,
  CardDesc,
  CardImage,
  CardTitle,
  ImageContainer,
  InfoContainer,
  SwitchWrapper,
} from "./card.styles.ts";

const CardComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardProps
> = (
  {
    type = "default",
    image,
    title,
    description,
    displaySwitch,
    toggleValue = false,
    onToggle,
    actionElement,
    width = "22rem",
    ...props
  },
  ref
) => {
  return (
    <CardContainer
      type={type}
      width={width}
      direction="column"
      className={cx(props.className)}
      ref={ref}
      {...props}
    >
      <ImageContainer>
        {image !== undefined ? (
          <CardImage className={cx("lmCardImage")} src={image} />
        ) : null}
        {actionElement !== undefined ? actionElement : null}
      </ImageContainer>
      <InfoContainer direction="column">
        <SwitchWrapper>
          <CardTitle title={title} numberOfLines={2}>
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
        <CardDesc
          title={description}
          numberOfLines={4}
          type="caption"
          className={cx("lmCardDesc")}
        >
          {description}
        </CardDesc>
      </InfoContainer>
    </CardContainer>
  );
};

export const Card = forwardRef(CardComponent);
