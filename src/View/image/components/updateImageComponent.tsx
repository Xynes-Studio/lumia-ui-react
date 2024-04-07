import styled from "styled-components";
import { ImageProps } from "../image.types";
import { Flex } from "@app/View";
import { cx } from "@utils/cx";
import { color } from "@shared/styles";
import { LMAsset } from "@utils/LumiaAssetManager";
import { LmCameraPhoto } from "@icons/lmCameraPhoto";
import { Text } from "@texts/Text/Text";
import './imageOverlay.styles.css';

const UpdateImageComponent: React.FC<ImageProps> = ({...props}) => {
  const { updateUI = 'overlay', canUpdate = false } = props;

  const UpdateImageContainer = styled(Flex)`
    display: ${canUpdate  ? "flex" : "none"};
  `;

  if(updateUI == 'overlay') {
    return (
      <UpdateImageContainer direction="column" className={cx('lmImageUpdateContainer')}>
          <LMAsset Asset={LmCameraPhoto} size={2} color={color.foreground} />
          <Text type="body" >Update Photo</Text>
      </UpdateImageContainer>
    );
  } else {
    <></>
  }
  
};

export default UpdateImageComponent;
