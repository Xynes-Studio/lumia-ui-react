import React, { forwardRef } from "react";
import { ImageProps } from "./image.types";
import styled from "styled-components";
import "./image.styles.css";
import { cx } from "../../utils";
import { spacing } from "@shared/styles";
const FlexComponent: React.ForwardRefRenderFunction<
  HTMLImageElement,
  ImageProps
> = ({canUpdate, ...props }, ref) => {
  const ImageContainer = styled.div`
    padding: ${spacing.padding.medium};
  `;
  const Image = styled.img`
    
  `;

  return (
    <ImageContainer className={cx("lmImageContainer")}>
      <Image className={cx("lmImageComponent")} ref={ref} {...props} />
    </ImageContainer>
  );
};

export const Flex = forwardRef(FlexComponent);
