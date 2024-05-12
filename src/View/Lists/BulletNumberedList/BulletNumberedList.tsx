import React, { forwardRef } from "react";
import styled from "styled-components";
import { BulletNumberedListProps } from "./BulletNumberedList.type";

const BulletNumberedListComponent: React.ForwardRefRenderFunction<
  HTMLOListElement | HTMLUListElement,
  BulletNumberedListProps
> = (
  { listType, children, ...props },
  ref: React.Ref<HTMLUListElement | HTMLOListElement>
) => {
  const BulletListContainer = styled.ul``;
  const NumberedListContainer = styled.ol``;
  if (listType === "bullet-points") {
    return (
      <BulletListContainer ref={ref} {...props}>
        {children}
      </BulletListContainer>
    );
  } else if (listType === "numbered-list") {
    return (
      <NumberedListContainer ref={ref} {...props}>
        {children}
      </NumberedListContainer>
    );
  } else {
    return null;
  }
};

export const BulletNumberedList = forwardRef(BulletNumberedListComponent);
