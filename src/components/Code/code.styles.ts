import styled from "styled-components";

export const StyledCode = styled.code`
  font-family: ${({ theme }) => theme.typography.type.code};
  font-size: ${({ theme }) => theme.typography.size.code};
`;
