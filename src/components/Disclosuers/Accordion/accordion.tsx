"use client";
import React, { forwardRef, useState } from "react";
import { AccordionProps } from "./accordion.type";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import { LmCkChevronRight } from "@icons/lmCkChevronRight";
import { color } from "@shared/styles";
import {
  AccordionBody,
  AccordionButton,
  AccordionContainer,
  AccordionHeader,
  AccordionShowIcon,
} from "./accordion.styles.ts";

const AccordionComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  AccordionProps
> = ({ headerText = "", children, hidden = false, ...props }, ref) => {
  const [show, setShow] = useState(hidden);

  return (
    <AccordionContainer
      direction="column"
      className={cx(props.className)}
      ref={ref}
      {...props}
    >
      <AccordionButton
        onClick={() => {
          setShow(!show);
        }}
      >
        <AccordionHeader direction="row">
          <Text type="caption" color={color?.foreground} textCase="capitalize">
            {headerText}
          </Text>
          <AccordionShowIcon
            rotated={show}
            visible={true}
            Asset={LmCkChevronRight}
            color={color?.foreground}
            size={1.2}
          />
        </AccordionHeader>
      </AccordionButton>

      {show && (
        <AccordionBody direction="column">
          {children}
        </AccordionBody>
      )}
    </AccordionContainer>
  );
};

export const Accordion = forwardRef(AccordionComponent);
