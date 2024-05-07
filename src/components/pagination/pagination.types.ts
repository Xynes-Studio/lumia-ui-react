export interface PaginationProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  pageNumber: number;
  totalPages: number;
  onPressNext: () => void;
  onPressPrevious: () => void;
  onPressPageNumber: (page: number) => void;
}
