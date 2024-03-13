"use client";
import { forwardRef, useEffect, useState } from "react";
import { AlertProps } from "./types/alert.type";
import { LmAdd } from "../../icons";
import styled from "styled-components";
import { cx } from "../../utils";
import { background, color } from "../../shared/styles";
import useBackgroundColorAlert from "./hooks/useBackgroundColorAlert";

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

  const AlertContainer = styled.div`
    background-color: ${bgColor};
  `;
  return (
    <AlertContainer
      className={cx(".lmAlertContainer")}
      ref={ref}
      {...props}
    ></AlertContainer>
  );
};

export const H1 = forwardRef(AlertComponent);
