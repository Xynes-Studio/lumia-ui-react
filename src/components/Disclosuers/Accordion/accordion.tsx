"use client";
import React, { forwardRef, useState } from "react";
import { AccordionProps } from "./accordion.type";
import { Flex } from "@app/View";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import { LMAsset } from "@utils/LumiaAssetManager";
import { LmCkChevronRight } from "@icons/lmCkChevronRight";
import { spacing, strokes, color } from "@shared/styles";
import styled from "styled-components";
import "./accordion.styles.css";

const AccordionComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  AccordionProps
> = ({ headerText = "", children, hidden = false, ...props }, ref) => {
  const [show, setShow] = useState(hidden);

  const AccordionContainer = styled(Flex)``;
  const AccordionHeader = styled(Flex)`
    padding: ${spacing?.padding?.p1} ${spacing?.padding?.p2};
    border-bottom: ${strokes?.s0} solid ${color?.foreground};
  `;
  const AccordionBody = styled(Flex)`
    min-height: ${show ? "10vh" : "0"};
  `;
  return (
    <AccordionContainer
      direction="column"
      className={cx("accordionContainer", props.className)}
      ref={ref}
      {...props}
    >
      <AccordionHeader className={cx("accordionHeader")} direction="row">
        <Text type="caption" color={color?.foreground} textCase="capitalize">
          {headerText}
        </Text>
        <LMAsset
          onClick={() => {
            setShow(!show);
          }}
          className={cx("lmAccordionShowIcon", show ? "rotated" : "")}
          visible={true}
          Asset={LmCkChevronRight}
          color={color?.foreground}
          size={1.2}
        />
      </AccordionHeader>
      <AccordionBody direction="column" className={cx("lmAccordionBody")}>
        {children}
      </AccordionBody>
    </AccordionContainer>
  );
};

export const Accordion = forwardRef(AccordionComponent);
