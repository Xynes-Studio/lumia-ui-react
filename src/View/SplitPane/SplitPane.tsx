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
  const [sizes, setSizes] = useState<[number, number]>(initialSizes);
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);
  const startPosition = useRef(0);
  const startSizes = useRef<[number, number]>([0, 0]);

  const handleMouseDown = (event: React.MouseEvent) => {
    isResizing.current = true;
    startPosition.current =
      orientation === "horizontal" ? event.clientX : event.clientY;
    startSizes.current = sizes;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isResizing.current) return;

      const currentPosition =
        orientation === "horizontal" ? event.clientX : event.clientY;
      const delta = currentPosition - startPosition.current;
      const totalSize = containerRef.current
        ? orientation === "horizontal"
          ? containerRef.current.clientWidth
          : containerRef.current.clientHeight
        : 0;

      const newSizes: [number, number] = [
        Math.min(
          Math.max(
            startSizes.current[0] + (delta / totalSize) * 100,
            minSizes[0]
          ),
          maxSizes[0]
        ),
        Math.min(
          Math.max(
            startSizes.current[1] - (delta / totalSize) * 100,
            minSizes[1]
          ),
          maxSizes[1]
        ),
      ];

      setSizes(newSizes);
      if (onPaneResize) onPaneResize(newSizes);
    },
    [maxSizes, minSizes, onPaneResize, orientation]
  );

  const handleMouseUp = useCallback(() => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

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
      <Pane size={sizes[0]} orientation={orientation}>
        {children && (Array.isArray(children) ? children[0] : children)}
      </Pane>
      <ResizeHandle orientation={orientation} onMouseDown={handleMouseDown} />
      <Pane size={sizes[1]} orientation={orientation}>
        {children && (Array.isArray(children) ? children[1] : children)}
      </Pane>
    </SplitPaneContainer>
  );
};

export default SplitPane;
