export interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  type?: "sans" | "serif";
  numberOfLines?: number;
  editable?: boolean;
}