import { useState, useEffect } from "react";
import { DataTableContainer, HeaderContainer, RowContainer, FooterContainer, SearchContainer } from "./datatable.styles";
import { ListViewProps } from "@app/View/ListView/listView.types";
import { DataTableProps } from "./datatable.types";
import { Button, SearchInput } from "@components/index";
import ListView from "../ListView/listView";
import { Row } from "../row/row";

// Utility function to filter dataset
const filterDataset = <T extends ListViewProps>(dataset: T[], searchString: string): T[] => {
  if (!searchString) {
    return dataset;
  }
  return dataset.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(searchString.toLowerCase())
    )
  );
};

const DataTable = <T extends ListViewProps>({
  dataset,
  renderItem,
  headerLabels,
  pagination = true,
  paginationType = "default",
  onClickRow,
  rowStyleTypes = "transparent",
}: DataTableProps<T>) => {
  const [filteredDataset, setFilteredDataset] = useState<T[]>(dataset);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    setFilteredDataset(filterDataset(dataset, searchString));
  }, [dataset, searchString]);

  const handleSearch = ({ value }: { value: string }) => {
    setSearchString(value);
  };

  return (
    <DataTableContainer>
      <SearchContainer>
        <SearchInput
          type="default"
          inputType="search"
          label="Search"
          autoSearch={true}
          suggestions={false}
          handleSearch={handleSearch}
          placeholder="Search"
        />
      </SearchContainer>

      <HeaderContainer>
        {headerLabels?.map((label, index) => (
          <Button
            key={index}
            type="label"
            label={label}
            onClick={() => onClickRow && onClickRow(label, index)}
          />
        ))}
      </HeaderContainer>

      <RowContainer>
        <ListView
          dataset={filteredDataset}
          renderItem={(item, index) => (
            <Row styleType={rowStyleTypes} index={index}>
              {renderItem?.(item, index)}
            </Row>
          )}
        />
      </RowContainer>

      {pagination && paginationType === "default" && (
        <FooterContainer>
          {/* Implement your default pagination logic here */}
        </FooterContainer>
      )}

      {pagination && paginationType === "infinite-loading" && (
        <FooterContainer>
          {/* Implement your infinite-loading logic here */}
        </FooterContainer>
      )}
    </DataTableContainer>
  );
};

export default DataTable;
