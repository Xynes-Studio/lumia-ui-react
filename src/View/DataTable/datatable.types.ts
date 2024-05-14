export interface DataTableItemType {
  [key: string]: string | number;
}

export interface DataTableProps<T = DataTableItemType> {
  dataset: T[];
  headerLabels?: string[];
  pagination?: boolean;
  paginationType?: "infinite-loading" | "default";
  onClickRow?: (label: string, index: number) => void;
  numberOfRows?: number;
  rowStyleTypes?: "transparent" | "outline" | "alternative-fill";
  searchBarPosition?: 'start' | 'center' | 'end';
}

