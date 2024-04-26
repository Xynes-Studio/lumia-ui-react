// Link.styles.ts
import { color } from '@shared/styles';
import styled from 'styled-components';

export const StyledLink = styled.a`
  /* Add your link styles here */
  color: ${color.accent200};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;