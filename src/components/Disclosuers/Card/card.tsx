import React, { forwardRef } from "react";
import "./card.styles.css";
import { CardProps } from "./card.type";
import styled from "styled-components";
import { Flex } from "@app/View";
import { Text } from "@texts/index";
import { Button } from "@components/Button/button";
import { Switch } from "@components/Switch/switch";
import { Image } from "@app/View";
import { LMAsset } from "@utils/LumiaAssetManager";
import { LmCkCheckCircle } from "@icons/lmCkCheckCircle";
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
    onToggle,
    actionElement,
    width = "22vw",
    height = "45vh",
    ...props
  },
  ref
) => {
  const CardContainer = styled(Flex)`
    width: ${width};
    /* height: ${height}; */
    /* background-color: red; */
    border: 1px solid black;
    border-radius: 1vw;
    padding: 1.2vw;
  `;

  const ImageContainer = styled(Flex)`
    width: 100%;
    height: 50%;
    background-color: green;
    border-radius: 0.8vw 0.8vw 0 0;
    overflow: hidden;
    position: relative;
  `;

  const InfoContainer = styled(Flex)`
    width: 100%;
    height: 50%;
    /* background-color: blue; */
    justify-content: flex-start;
    position: relative;
  `;

  const SwitchWrapper = styled(Flex)`
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `;

  const CardTitle = styled(Text)`
    flex: 1;
    font-weight: 600;
    margin: 0;
  `;

  const CardDesc = styled(Text)`
    width: 70%;
    margin: 0;
    margin-top: 1.5vh;
  `;

  return (
    <CardContainer
      direction="column"
      className={cx("lmCardContainer", props.className)}
      ref={ref}
      {...props}
    >
      <ImageContainer className={cx("lmImageContainer")}>
        <Image
          style={{ width: "100%", height: "100%" }}
          className={cx("lmCardImage")}
          source="https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        {/* <Button icon={LmCkCheckCircle} className={cx("lmCardAction")} /> */}
      </ImageContainer>
      <InfoContainer direction="column" className={cx("lmInfoContainer")}>
        <SwitchWrapper>
          <CardTitle
            textCase="capitalize"
            numberOfLines={2}
            className={cx("lmCardTitle")}
          >
            {title}
          </CardTitle>
          <Switch style={{ margin: 0 }} value={true} />
        </SwitchWrapper>
        <CardDesc type="caption" className={cx("lmCardDesc")}>
          {description}
        </CardDesc>
      </InfoContainer>
    </CardContainer>
  );
};

export const Card = forwardRef(CardComponent);
