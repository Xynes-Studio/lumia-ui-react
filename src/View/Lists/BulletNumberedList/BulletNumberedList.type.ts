import React from "react";

export interface BulletNumberedListProps extends React.HtmlHTMLAttributes<HTMLOListElement | HTMLUListElement> {
  listType?: "numbered-list" | "bullet-points";
  children?: React.ReactNode;
}

