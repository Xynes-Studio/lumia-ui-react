import styled from "styled-components";
import { ImageProps } from "../image.types";
import { Flex } from "@app/View";
import "./imageOverlay.styles.css";
import { cx } from "@utils/cx";
import { color, spacing } from "@shared/styles";
import UpdateImageComponent from "./updateImageComponent";
import { Text } from "@texts/Text/Text";
import { LMAsset } from "@utils/LumiaAssetManager";
import { LmInfo } from "@icons/lmInfo";
import { hexToRGBA } from "@utils/hexToRgba";
import { H5 } from "@texts/H5/H5";

const ImageOverlayComponent: React.FC<ImageProps> = ({ ...props }) => {
  const {
    overlayOpacity = 0.35,
    overlay = true,
    canUpdate = false
  } = props;

  // Ensure overlayOpacity is within the valid range of 0 to 1
  const validOverlayOpacity = Math.max(0, Math.min(1, overlayOpacity));
  if (overlayOpacity < 0 || overlayOpacity > 1) {
    throw new Error("overlayOpacity must be a number between 0 and 1.");
  }

  const ImageOverlayContainer = styled(Flex)`
    display: none;
    ${() => {
      if (overlay || canUpdate) {
        return `display: flex`;
      }
    }};
    background-color: ${hexToRGBA(color.foreground, validOverlayOpacity)};
    padding: ${spacing.padding.medium};
  `;

  return (
    <ImageOverlayContainer direction='column' className={cx("lmImageOverlayContainer")}>
      <UpdateImageComponent {...props} />
      {props?.title != undefined && (
        <H5
          color={color.foregroundInverse}
          numberOfLines={props?.numberOfLinesForTitle || 2}
        >
          {props?.title}
        </H5>
      )}
      <Flex className={cx("lmImageDescriptionSection")}>
        {props?.description != undefined && (
          <Text
            color={color.foregroundInverse}
            type="body"
            numberOfLines={props?.numberOfLinesForDescription || 3}
          >
            {props?.description}
          </Text>
        )}
        <LMAsset Asset={LmInfo} size={1.25} color={color?.foregroundInverse} />
      </Flex>
    </ImageOverlayContainer>
  );
};

export default ImageOverlayComponent;
