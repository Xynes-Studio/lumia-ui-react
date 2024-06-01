import { DndContext, DragEndEvent } from "@dnd-kit/core";

import { Flex } from "@app/View";
import { LmCkAtSign } from "@icons/lmCkAtSign";
import { Text } from "@texts/index";
import { useState } from "react";
import { Badge, Button, Card } from "..";
import { DraggableLumiaComponent, DraggableProps, isButton } from "./draggable";
import { Droppable } from "./dropabble";

export function Dnd() {
  const [droppedChildList, setDropchildList] = useState<DraggableProps[]>([]);
  const drop_id = "test1";
  const dragEnd = (e: DragEndEvent) => {
    
    const { active, over } = e;
    console.log(active,over);
    const active_id = active.id as string;
    console.log(droppedChildList,active_id);
    if (!active_id.includes("dynamic")) {
      if (over?.id == drop_id) {
        if (active.data.current) {
          setDropchildList([
            ...droppedChildList,
            {...active.data.current,drag_id:"dynamic"+Math.random()} as DraggableProps,
          ]);
        }
      }
    }
    if(over?.id == null){
      setDropchildList(
        droppedChildList.filter(d=>d.drag_id!=active_id)
      );
    }
  };
  const droppedchild = droppedChildList.flatMap((d: DraggableProps) => {
    if (isButton(d)) {
      const { Element,drag_id, ...props } = d;
      return (
        <DraggableLumiaComponent
          Element={Element}
          drag_id={drag_id}
          {...props}
        ></DraggableLumiaComponent>
      );
    }
  });
  return (
    <DndContext onDragEnd={dragEnd}>
      <Flex style={{ gap: "5px" }}>
        {" "}
        <DraggableLumiaComponent
          Element={Flex}
          drag_id="flex1"
          direction="row"
          style={{ border: "1px solid black" }}
        >
          <Text>This is a draggable Flex</Text>
          <Text>With Direction Row</Text>
        </DraggableLumiaComponent>
        <DraggableLumiaComponent
          Element={Flex}
          drag_id="flex2"
          direction="column"
          style={{ border: "1px solid black" }}
        >
          <Text>This is a draggable Flex</Text>
          <Text>With Direction column</Text>
        </DraggableLumiaComponent>
        <DraggableLumiaComponent
          Element={Button}
          drag_id="btn1"
          label="Button"
          backgroundColor="#25044f"
          icon={LmCkAtSign}
          color="#fff"
        ></DraggableLumiaComponent>
        <DraggableLumiaComponent
          Element={Button}
          drag_id="btn2"
          label="Another Button"
          backgroundColor="#610bd0"
          icon={LmCkAtSign}
          color="#fff"
        ></DraggableLumiaComponent>
        <DraggableLumiaComponent
          Element={Badge}
          drag_id="badge"
          label={56}
          backgroundColor="#eeff00"
          type="round"
        ></DraggableLumiaComponent>
      </Flex>
      <DraggableLumiaComponent
        Element={Card}
        drag_id="card"
        title="A Card"
        description="This is a Card"
        image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        displaySwitch
        type="outlined"
      ></DraggableLumiaComponent>
      <Flex>&nbsp;</Flex>
      <Droppable drop_id={drop_id}>{droppedchild}</Droppable>
    </DndContext>
  );
}
