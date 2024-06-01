import { forwardRef, useState, useEffect, useRef } from "react";
import { ModalHorizontalInProps } from "./modalHorizontalIn.types";
import {
  ModalHorizontalInContainer,
  ModalHorizontalInContents,
} from "./ModalHorizontalIn.styles";
import { cx } from "@utils/cx";

// Using forwardRef to forward refs to the ListView container
export const ModalHorizontalIn = forwardRef<HTMLDivElement, ModalHorizontalInProps>(
  ({ direction = "left", visible: propVisible, onClose, ...props }, ref) => {
    const [visible, setVisible] = useState(propVisible);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setVisible(propVisible);
    }, [propVisible]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setVisible(false);
          if (onClose) {
            setTimeout(() => {
              onClose();
            }, 301);
          }
        }
      };

      if (visible) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [visible, onClose]);

    return (
      <ModalHorizontalInContainer
        className={cx(visible && "lmSlideInVisible", props.className)}
        direction={direction}
        ref={ref}
      >
        <ModalHorizontalInContents
          direction={direction}
          className={cx(visible && "lmSlideInContentsVisible", props.className)}
          ref={containerRef}
        >
          {props.children}
        </ModalHorizontalInContents>
      </ModalHorizontalInContainer>
    );
  }
);


