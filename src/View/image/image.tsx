import React, { forwardRef } from "react";
import { ImageProps } from "./image.types";
import styled from "styled-components";
import "./image.styles.css";
import { cx } from "../../utils";
import { spacing } from "@shared/styles";
import ImageOverlayComponent from "./components/imageOverlay";

const FlexComponent: React.ForwardRefRenderFunction<
  HTMLImageElement,
  ImageProps
> = ({ ...props }, ref) => {
  const ImageContainer = styled.div`
    padding: ${spacing.padding.medium};
  `;
  const Image = styled.img``;

  return (
    <ImageContainer className={cx("lmImageContainer")}>
      <Image
        title={props.title || "Image Component"}
        className={cx("lmImageComponent")}
        ref={ref}
        {...props}
      />
      <ImageOverlayComponent {...props} />
    </ImageContainer>
  );
};

export const Flex = forwardRef(FlexComponent);
