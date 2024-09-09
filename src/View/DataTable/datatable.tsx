import { useState, useEffect, forwardRef } from "react";
import {
  DataTableContainer,
  HeaderContainer,
  RowContainer,
  FooterContainer,
  SearchContainer,
  RowLabels,
  TableWithoutSearchContainer,
} from "./datatable.styles";
import { DataTableProps, DataTableItemType } from "./datatable.types";
import { Button, Pagination, SearchInput } from "@components/index";
import ListView from "../ListView/listView";
import { Row } from "../row/row";

// Utility function to filter dataset
const filterDataset = <T extends DataTableItemType>(
  dataset: T[],
  searchString: string
): T[] => {
  if (!searchString) {
    return dataset;
  }
  return dataset.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchString.toLowerCase())
    )
  );
};

const DataTable = forwardRef<HTMLDivElement, DataTableProps<DataTableItemType>>(
  (
    {
      dataset,
      headerLabels,
      pagination = true,
      paginationType = "default",
      onClickRow,
      rowStyleTypes = "transparent",
      searchBarPosition = "end",
      numberOfRows = 10,
      ...props
    },
    ref
  ) => {
    const [filteredDataset, setFilteredDataset] =
      useState<DataTableItemType[]>(dataset);
    const [searchString, setSearchString] = useState<string>("");
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(
      Math.ceil(filteredDataset.length / numberOfRows)
    );
    const [currentPageData, setCurrentPageData] = useState<DataTableItemType[]>(
      filteredDataset.slice(
        (pageNumber - 1) * numberOfRows,
        pageNumber * numberOfRows
      )
    );

    useEffect(() => {
      setTotalPages(Math.ceil(filteredDataset.length / numberOfRows));
      setCurrentPageData(
        filteredDataset.slice(
          (pageNumber - 1) * numberOfRows,
          pageNumber * numberOfRows
        )
      );
    }, [filteredDataset, numberOfRows, pageNumber]);

    useEffect(() => {
      setFilteredDataset(filterDataset(dataset, searchString));
    }, [dataset, searchString]);

    const handleSearch = (value: string ) => {
      console.log(value, "this");   
      setSearchString(value);
    };

    return (
      <DataTableContainer direction="column" ref={ref} {...props}>
        <SearchContainer searchBarPosition={searchBarPosition}>
          <SearchInput
            type="default"
            inputType="search"
            autoSearch={true}
            suggestions={false}
            handleSearch={handleSearch}
            searchString={searchString}
            placeholder="Search"
          />
        </SearchContainer>
        <TableWithoutSearchContainer direction="column">
          <HeaderContainer
            weight={headerLabels ? new Array(headerLabels.length).fill(1) : []}
          >
            {headerLabels?.map((label, index) => (
              <Button
                key={index}
                textCase="capitalize"
                type="label"
                label={label}
                onClick={() => onClickRow && onClickRow(label, index)}
              />
            ))}
          </HeaderContainer>

          <RowContainer>
            <ListView
              style={{
                width: "100%",
              }}
              dataset={currentPageData}
              renderItem={(item, index) => (
                <Row
                  weight={new Array(Object.keys(item).length).fill(1)}
                  styleType={rowStyleTypes}
                  index={index}
                >
                  {Object.keys(item).map((key) => (
                    <RowLabels key={key}>{item[key]}</RowLabels>
                  ))}
                </Row>
              )}
            />
          </RowContainer>

          {pagination && paginationType === "default" && totalPages > 1 && (
            <FooterContainer>
              <Pagination
                pageNumber={pageNumber}
                totalPages={totalPages}
                onPressNext={() =>
                  setPageNumber((prev) => Math.min(prev + 1, totalPages))
                }
                onPressPrevious={() =>
                  setPageNumber((prev) => Math.max(prev - 1, 1))
                }
                onPressPageNumber={(page) => setPageNumber(page)}
              />
            </FooterContainer>
          )}

          {pagination && paginationType === "infinite-loading" && (
            <FooterContainer>
              {/* Implement your infinite-loading logic here */}
            </FooterContainer>
          )}
        </TableWithoutSearchContainer>
      </DataTableContainer>
    );
  }
);

export default DataTable;
