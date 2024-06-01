import { Flex } from "@app/View";
import { useDroppable } from "@dnd-kit/core";
import { Children } from "react";

export interface droppableProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  drop_id?: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Droppable(props: droppableProps) {
  const { direction, drop_id = "droppable", children, ...rest } = props;
  const { isOver, setNodeRef } = useDroppable({
    id: drop_id,
  });
  const style = {
    backgroundColor: isOver ? "green" : "#eee",
    justifyContent: Children.count(children) == 0 ? "center":"left"
    
    // Children.count(children) == 0 ?
  };

  return (
    <Flex
      ref={setNodeRef}
      style={style}
      direction={direction || "row"}
      {...rest}
    >
      {Children.count(children) == 0 ? (
        <Flex style={{ minHeight: "200px", minWidth: "200px",justifyItems:"center", alignItems:"center"}}><h1>DROP HERE</h1></Flex>
      ) : (
        children
      )}
    </Flex>
  );
}
