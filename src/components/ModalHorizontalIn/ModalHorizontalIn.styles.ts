import { Flex } from "@app/View";
import { hexToRGBA } from "@utils/hexToRgba";
import styled from "styled-components";

export const ModalHorizontalInContainer = styled(Flex)<{direction: 'left' | 'right'}>`
    position: relative;
    justify-content: ${({ direction }) => direction};
    align-items: center;
    width: 100dvw;
    height: 100dvw;
    background-color: ${({ theme }) => hexToRGBA(theme.color.foreground, 0.3)};
    opacity: 0;
    z-index: -99;
    transition: all 0.3s;
`;

export const ModalHorizontalInContents = styled(Flex)<{direction: 'left' | 'right'}>`
    width: 40%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.foregroundInverse};
    box-shadow: ${({ theme }) => theme.shadowDeep};
    transform: ${({ direction }) => direction === 'left' ? `translateX(-100%)` : `translateX(100%)`};
    transition: all 0.3s;
`;
