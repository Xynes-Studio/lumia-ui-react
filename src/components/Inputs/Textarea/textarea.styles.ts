import { Flex } from "@app/View";
import { color, spacing, strokes, typography } from "@shared/styles";
import styled from "styled-components";

export const InputWrapper = styled(Flex)<{type:string}>`
    padding: ${spacing?.padding?.p0} ${spacing?.padding?.p0};
    border-radius: ${spacing?.borderRadius?.r0};
    background-color: ${props=>props.type !== "outline-only"
      ? color?.foregroundInverse400
      : "none"};
    border: ${props=>props.type !== "fill"
      ? `${strokes?.s0} solid ${color?.border100}`
      : "null"};
    align-items: center;
  `;
  export const TextareaContainer = styled.textarea`
    font-size: ${typography?.size?.input};
    width: 100%;
  `;