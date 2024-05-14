import React from "react";

interface NumberedListProps extends React.HtmlHTMLAttributes<HTMLOListElement> {
  listType?: "numbered-list";
  children?: React.ReactNode;
}

interface BulletedListProps extends React.HtmlHTMLAttributes<HTMLUListElement> {
  listType?: "bullet-points";
  children?: React.ReactNode;
}

export type BulletNumberedListProps = NumberedListProps | BulletedListProps;
