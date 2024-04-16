import React, { forwardRef } from "react";
import { ImageProps } from "./image.types";
import styled from "styled-components";
import "./image.styles.css";
import { cx } from "../../utils";
import { spacing } from "@shared/styles";
import ImageOverlayComponent from "./components/imageOverlay";

const ImageComponent: React.ForwardRefRenderFunction<
  HTMLImageElement,
  ImageProps
> = ({ ...props }, ref) => {
  const { borderRadius = spacing.borderRadius.r2 } = props;
  const ImageContainer = styled.div`
    margin: ${spacing.padding.p1};
    border-radius: ${borderRadius}vh;
  `;
  const Image = styled.img`
    object-fit: ${props?.fit};
    border-radius: ${borderRadius};
  `;

  return (
    <ImageContainer className={cx("lmImageContainer")} {...props}>
      <Image
        title={props.title || "Image Component"}
        className={cx("lmImageComponent")}
        src={props.source}
        ref={ref}
        {...props}
      />
      <ImageOverlayComponent {...props} />
    </ImageContainer>
  );
};

export const Image = forwardRef(ImageComponent);
