import styled from 'styled-components';
import { SplitPaneOrientation } from './SplitPane.types';

export const SplitPaneContainer = styled.div<{ orientation: SplitPaneOrientation }>`
  display: flex;
  flex-direction: ${(props) => (props.orientation === 'horizontal' ? 'row' : 'column')};
  width: 100%;
  height: 100%;
`;

export const Pane = styled.div<{ size: number; orientation: SplitPaneOrientation }>`
  flex: ${(props) => props.size};
  overflow: hidden;
  ${(props) => (props.orientation === 'horizontal' ? 'width' : 'height')}: 100%;
`;

export const ResizeHandle = styled.div<{ orientation: SplitPaneOrientation }>`
  background: #ccc;
  cursor: ${(props) => (props.orientation === 'horizontal' ? 'col-resize' : 'row-resize')};
  ${(props) => (props.orientation === 'horizontal' ? 'width' : 'height')}: 5px;
  ${(props) => (props.orientation === 'horizontal' ? 'height' : 'width')}: 100%;
`;
