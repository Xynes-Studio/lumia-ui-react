import { Flex } from "@app/View";
import { color, spacing, strokes } from "@shared/styles";
import { H5, Text } from "@texts/index";
import styled from "styled-components";

export const CardContainer = styled(Flex)<{
  type: "default" | "fill" | "outlined";
  width?: string;
}>`
  width: ${({ width }) => width || "auto"};
  padding: ${spacing?.padding?.p4};
  border-radius: ${spacing?.borderRadius?.r3};
  background-color: ${({ type }) =>
    type === "fill" ? color?.foregroundInverse300 : "none"};
  border: ${({ type }) =>
    type === "outlined" ? `${strokes?.s0} solid ${color?.border}` : "none"};
`;

export const ImageContainer = styled(Flex)`
  border-radius: ${spacing?.padding?.p2} ${spacing?.padding?.p2} 0 0;
  width: 100%;
  height: 10rem;
  overflow: hidden;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(80%);
`;

export const InfoContainer = styled(Flex)`
  width: 100%;
  justify-content: flex-start;
  position: relative;
`;

export const SwitchWrapper = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: ${spacing.padding.p2};
`;

export const CardTitle = styled(H5)`
  padding: 0px;
  margin: 0px;
  margin-right: ${spacing.padding.p0};
`;

export const CardDesc = styled(Text)`
  margin-top: ${spacing.padding.p2};
  width: 100%;
  margin: 0px;
`;
