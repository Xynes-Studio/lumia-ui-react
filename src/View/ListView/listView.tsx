import { forwardRef } from "react";
import { ListViewProps } from "./listView.types";
import { ListViewContainer, ListHeader, ListFooter } from "./listView.styles";

// Using forwardRef to forward refs to the ListView container
const ListView = forwardRef<HTMLDivElement, ListViewProps>(({
  dataset,
  renderItem,
  header,
  footer,
  horizontal = false,
  ...props
}, ref) => {
  return (
    <ListViewContainer ref={ref} direction={horizontal ? 'row' : 'column'} {...props}>
      {header && <ListHeader>{header}</ListHeader>}
      {renderItem && dataset.map((item, index) => renderItem(item, index))}
      {footer && <ListFooter>{footer}</ListFooter>}
    </ListViewContainer>
  );
});

export default ListView;
