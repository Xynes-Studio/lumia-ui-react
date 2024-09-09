import React, { forwardRef } from "react";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import { color } from "@shared/styles";
import { ProfileProps } from "./profile.type";
import { LMAsset } from "@utils/LumiaAssetManager";
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileInfoContainer,
} from "./profile.styles";

const ProfileComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ProfileProps
> = ({ title, subtitle, actionIcon, avatar, ...props }, ref) => {
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
