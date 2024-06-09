import { ReactNode } from "react";
import styled from "styled-components";

export const FlexContainer = styled.div<{children:ReactNode,direction:"row" | "column" | "row-reverse" | "column-reverse",wrap:boolean,weight?:number[]}>`
    display: flex;
    flex-direction: ${({direction})=>direction};
    flex-wrap: ${({wrap})=> wrap? "wrap" : "nowrap"};

    /* If weight is undefined, set flex-grow to 1 for all children */
    ${({weight,children}) =>
      weight === undefined
        ? ``
        : Array.isArray(children)
        ? children
            .map(
              (_child, index) => `
            & > *:nth-child(${index + 1}) {
              flex-grow: ${weight[index] || 1};
            }
          `
            )
            .join("")
        : ""}
  `;