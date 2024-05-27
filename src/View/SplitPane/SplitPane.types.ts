import React from 'react';

export type SplitPaneOrientation = 'horizontal' | 'vertical';

export interface SplitPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  initialSizes?: number[];
  minSizes?: number[];
  maxSizes?: number[];
  orientation?: SplitPaneOrientation;
  onPaneResize?: (sizes: number[]) => void;
}
