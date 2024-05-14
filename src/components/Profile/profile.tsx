import React, { forwardRef } from "react";
import "./profile.styles.css";
import styled from "styled-components";
import { Flex } from "@app/View";
import { Image } from "@app/View";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import { spacing, color } from "@shared/styles";
import { ProfileProps } from "./profile.type";
import { LMAsset } from "@utils/LumiaAssetManager";

const ProfileComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ProfileProps
> = ({ title, subtitle, actionIcon, avatar, ...props }, ref) => {
  const ProfileContainer = styled(Flex)`
    padding: ${spacing?.padding?.p0};
  `;

  const ProfileAvatar = styled(Image)`
    height: ${spacing?.padding?.p3};
    width: ${spacing?.padding?.p3};
  `;

  const ProfileInfoContainer = styled(Flex)``;

  return (
    <ProfileContainer
      className={cx("lmProfileContainer", props.className)}
      direction="row"
      ref={ref}
      {...props}
    >
      {avatar !== undefined ? (
        <ProfileAvatar
          source={avatar}
          borderRadius={10}
          fit="cover"
          className={cx("lmProfileAvatar")}
        />
      ) : null}
      <ProfileInfoContainer
        direction="column"
        className={cx("lmProfileInfoContainer")}
      >
        {title ? (
          <Text
            textCase="capitalize"
            color={color?.foreground}
            className={cx("lmProfileTitle")}
          >
            {title}
          </Text>
        ) : null}

        {subtitle ? (
          <Text
            type="error"
            textCase="capitalize"
            color={color?.foreground}
            className={cx("lmProfileSubtitle")}
          >
            {subtitle}
          </Text>
        ) : null}
      </ProfileInfoContainer>
      {actionIcon !== undefined ? (
        <LMAsset
          visible={actionIcon !== undefined}
          Asset={actionIcon}
          color={color?.foreground}
          size={1}
          style={{ cursor: "pointer" }}
        />
      ) : null}
    </ProfileContainer>
  );
};

export const Profile = forwardRef(ProfileComponent);
