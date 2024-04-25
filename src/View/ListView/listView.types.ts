import React from "react";
import { CSSProperties } from "react";

// Generic type T allows specifying the item type when using the component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ListViewProps<T = any> {
  dataset: T[];
  renderItem?: (item: T, index: number) => React.JSX.Element;
  header?: React.JSX.Element;
  footer?: React.JSX.Element;
  horizontal?: boolean;
  ListHeaderComponentStyle?: CSSProperties;
  ListFooterComponentStyle?: CSSProperties;
}
