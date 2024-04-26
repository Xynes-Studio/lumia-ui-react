// Link.tsx
import { forwardRef } from "react";
import { LinkProps } from "./link.types";
import { StyledLink } from "./link.styles";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...rest }, ref) => (
    <StyledLink ref={ref} {...rest}>
      {children}
    </StyledLink>
  )
);
