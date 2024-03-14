"use client";
import { forwardRef, useEffect } from "react";
import { AlertProps } from "./alert.type";
import { LmAdd } from "@icons/lmAdd";
import styled from "styled-components";
import { LMAsset, cx } from "../../utils";
import useBackgroundColorAlert from "./hooks/useBackgroundColorAlert";
import { color, strokes, shadow } from "@app/shared/styles";
import { Flex } from "@app/elements";
import { H4 } from "@texts/index";

const AlertComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  AlertProps
> = (
  {
    children,
    type = "default",
    showIcon = false,
    icon = LmAdd,
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

  const AlertContainer = styled(Flex)`
    background-color: ${bgColor};
    border-width: ${type == "outlined" ? strokes.s1 : 0};
    box-shadow: ${type == "default" ? shadow : "none"};
  `;

  return (
    <AlertContainer className={cx("lmAlertContainer")} ref={ref} {...props}>
      <LMAsset
        visible={showIcon}
        Asset={icon}
        color={color.foreground}
        size={1}
      />
      <Flex direction="column">
        <H4>{title}</H4>
        {description != undefined && <p>{description}</p>}
        {children}
      </Flex>
    </AlertContainer>
  );
};

export const Alert = forwardRef(AlertComponent);
