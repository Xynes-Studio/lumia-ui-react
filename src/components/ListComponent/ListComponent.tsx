import React from "react";
import { ListComponentProps, ListItem } from "./ListComponent.types";
import {
  ListItem1,
  ListItem2,
  ListItem3,
  ListItem4,
  ListItem5,
  ListItem6,
  ListText,
} from "./ListComponent.styles";

export const bulletSymbols: string[] = [
  "disc",
  "circle",
  "square",
  "disc",
  "circle",
  "square",
];
export const orderedListSymbols: string[] = [
  "decimal",
  "lower-alpha",
  "lower-roman",
  "decimal",
  "lower-alpha",
  "lower-roman",
];

const ListComponent: React.FC<ListComponentProps> = ({
  items,
  type = "unordered-List",
}) => {
  const renderList = (items: ListItem[], level: number = 1) => {
    let ListWrapper;
    switch (level) {
      case 2:
        ListWrapper = ListItem2;
        break;
      case 3:
        ListWrapper = ListItem3;
        break;
      case 4:
        ListWrapper = ListItem4;
        break;
      case 5:
        ListWrapper = ListItem5;
        break;
      case 6:
        ListWrapper = ListItem6;
        break;
      default:
        ListWrapper = ListItem1;
        break;
    }

    return (
      <ListWrapper
        val={
          type === "unordered-List"
            ? bulletSymbols[level - 1]
            : orderedListSymbols[level - 1]
        }
      >
        {items.map((item, index) => (
          <li key={index}>
            <ListText>{item.text}</ListText>
            {item.children && renderList(item.children, level + 1)}
          </li>
        ))}
      </ListWrapper>
    );
  };

  return <div>{renderList(items)}</div>;
};

export default ListComponent;
