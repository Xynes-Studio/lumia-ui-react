/* eslint-disable @typescript-eslint/no-unused-vars */
import { color } from "@shared/styles";
import { forwardRef } from "react";
import './ticker.style.css';
import {
  StyledTickerWrap, TickerContainer
} from "./ticker.styles";
import { TickerProps } from "./ticker.type";
import { cx } from "@utils/cx";
import { hexToRGBA } from "@utils/hexToRgba";
export const Ticker = forwardRef<HTMLDivElement, TickerProps>(
  (
    {
      children,
      backgroundColor=hexToRGBA(color.foreground,0),
      stopOnHover=false,
      speed=10,
      direction='normal',
      delay=0,
      loop=true,
      className,
      ...rest
    },
    ref
  ) => {
    
    return (
      <StyledTickerWrap className={cx("newsTicker",className)} bg={backgroundColor} {...rest} ref={ref}>
        <TickerContainer className={stopOnHover ? "stopOnHover":"dontStopOnHover"} direction="row" delay={delay} speed={speed} animDirection={direction} loop={loop}>{children}</TickerContainer>
      </StyledTickerWrap>
    );
  }
);
