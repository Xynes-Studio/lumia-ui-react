import React from 'react';

export type SplitPaneOrientation = 'horizontal' | 'vertical';

export interface SplitPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  initialSizes?: [number, number];
  minSizes?: [number, number];
  maxSizes?: [number, number];
  orientation?: SplitPaneOrientation;
  onPaneResize?: (sizes: [number, number]) => void;
}