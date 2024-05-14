import React from "react";
import styled from "styled-components";
import { BulletNumberedListProps } from "./BulletNumberedList.type";

// Define styled components outside of the BulletNumberedList component
const BulletListContainer = styled.ul``;
const NumberedListContainer = styled.ol``;

// Define the functional component with correct usage of React.FC
const BulletNumberedList: React.FC<BulletNumberedListProps> = ({
  listType,
  children,
  ...props
}) => {
  if (listType === "bullet-points") {
    return <BulletListContainer {...props}>{children}</BulletListContainer>;
  } else if (listType === "numbered-list") {
    return <NumberedListContainer {...props}>{children}</NumberedListContainer>;
  } else {
    return null; // Or handle the default case as needed
  }
};

export default BulletNumberedList;