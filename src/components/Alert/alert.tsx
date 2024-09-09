"use client";
import { forwardRef, useEffect, useState } from "react";
import { AlertProps } from "./alert.type";
import { LmCkAdd } from "@icons/lmCkAdd";
import { LMAsset } from "../../utils";
import useBackgroundColorAlert from "./hooks/useBackgroundColorAlert";
import { color, spacing } from "@app/shared/styles";
import { Flex } from "@app/View";
import { H4 } from "@texts/index";
import { AlertContainer } from "./alert.styles";
import { Button } from "..";
import { LmCkClose } from "@icons/lmCkClose";

const AlertComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  AlertProps
> = (
  {
    children,
    type = "default",
    showIcon = false,
    icon = LmCkAdd,
    title = "Alert Message Title",
    description,
    showCloseIcon,
    onClose,
    actionBtn,
    actionBtnLabel,
    actionBtnOnPress,
    ...props
  },
  ref
) => {
  const [bgColor, setType, setStatus] = useBackgroundColorAlert();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setType(type);
    if (props.status !== undefined) {
      setStatus(props.status);
    }
  }, [type, props.status, setType, setStatus]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose && onClose();
    }, 300); // Match the animation duration
  };

  return (
    <AlertContainer
      type={type}
      bgColor={bgColor}
      visible={visible}
      ref={ref}
      {...props}
    >
      <LMAsset
        visible={showIcon}
        Asset={icon}
        color={color.foreground}
        size={1}
        style={{
          marginTop: spacing.padding.p0,
        }}
      />
      <Flex style={{ flex: 1 }} direction="column">
        <H4>{title}</H4>
        {description !== undefined && <p>{description}</p>}
        {children}
      </Flex>
      {actionBtn ? (
        <Flex direction="column" style={{ justifyContent: "center" }}>
          <Button
            label={actionBtnLabel}
            type="label"
            style={{ paddingRight: "0px" }}
            onClick={actionBtnOnPress}
          />
        </Flex>
      ) : null}
      {showCloseIcon ? (
        <Flex direction="column">
          <Button
            type="label"
            style={{ paddingRight: "0px" }}
            onClick={handleClose}
            icon={LmCkClose}
          />
        </Flex>
      ) : null}
    </AlertContainer>
  );
};

export const Alert = forwardRef(AlertComponent);
