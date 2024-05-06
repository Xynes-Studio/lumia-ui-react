"use client";
import { forwardRef, useEffect } from "react";
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
    ...props
  },
  ref
) => {
  const [bgColor, setType, setStatus] = useBackgroundColorAlert();

  useEffect(() => {
    setType(type);
    if (props.status != undefined) {
      setStatus(props.status);
    }
  }, [type, props.status, setType, setStatus]);

  return (
    <AlertContainer type={type} bgColor={bgColor} ref={ref} {...props}>
      <LMAsset
        visible={showIcon}
        Asset={icon}
        color={color.foreground}
        size={1}
        style={{
          marginTop: spacing.padding.p0
        }}
      />
      <Flex style={{flex:1}} direction="column">
        <H4>{title}</H4>
        {description != undefined && <p>{description}</p>}
        {children}
      </Flex>
      <Flex direction="column">
          <Button type="label" style={{paddingRight: "0px"}} onClick={props.onClose} icon={LmCkClose} />
      </Flex>
    </AlertContainer>
  );
};

export const Alert = forwardRef(AlertComponent);
