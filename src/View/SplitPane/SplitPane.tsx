import React, { useState, useRef, useEffect, useCallback } from "react";
import { SplitPaneProps } from "./SplitPane.types";
import { SplitPaneContainer, Pane, ResizeHandle } from "./SplitPane.styles";

const SplitPane: React.FC<SplitPaneProps> = ({
  initialSizes = [50, 50],
  minSizes = [10, 10],
  maxSizes = [90, 90],
  orientation = "horizontal",
  onPaneResize,
  className,
  style,
  children,
  ...rest
}) => {
  const [sizes, setSizes] = useState<number[]>(initialSizes);
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);
  const startPosition = useRef(0);
  const startSizes = useRef<number[]>([]);
  const activePaneIndex = useRef<number | null>(null);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!isResizing.current || activePaneIndex.current === null) return;

    const index = activePaneIndex.current;
    const currentPosition =
      orientation === "horizontal" ? event.clientX : event.clientY;
    const delta = currentPosition - startPosition.current;
    const totalSize = containerRef.current
      ? orientation === "horizontal"
        ? containerRef.current.clientWidth
        : containerRef.current.clientHeight
      : 0;

    const newSizes = [...startSizes.current];
    newSizes[index] = Math.min(
      Math.max(startSizes.current[index] + (delta / totalSize) * 100, minSizes[index]),
      maxSizes[index]
    );
    newSizes[index + 1] = Math.min(
      Math.max(startSizes.current[index + 1] - (delta / totalSize) * 100, minSizes[index + 1]),
      maxSizes[index + 1]
    );

    setSizes(newSizes);
    if (onPaneResize) onPaneResize(newSizes);
  }, [maxSizes, minSizes, onPaneResize, orientation]);

  const handleMouseUp = useCallback(() => {
    isResizing.current = false;
    activePaneIndex.current = null;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = (index: number) => (event: React.MouseEvent) => {
    isResizing.current = true;
    startPosition.current =
      orientation === "horizontal" ? event.clientX : event.clientY;
    startSizes.current = sizes;
    activePaneIndex.current = index;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <SplitPaneContainer
      ref={containerRef}
      orientation={orientation}
      className={className}
      style={style}
      {...rest}
    >
      {React.Children.map(children, (child, index) => (
        <>
          <Pane size={sizes[index]} orientation={orientation}>
            {child}
          </Pane>
          {index < React.Children.count(children) - 1 && (
            <ResizeHandle orientation={orientation} onMouseDown={handleMouseDown(index)} />
          )}
        </>
      ))}
    </SplitPaneContainer>
  );
};

export default SplitPane;
