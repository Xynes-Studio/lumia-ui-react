import React from "react";
import { SearchResultProps } from "./searchResults.types";
import { ResultContainer } from "./searchResults.styles";
import { Flex, Row } from "@app/View";
import ListView from "@app/View/ListView/listView";

const SearchResultsComponent: React.FC<SearchResultProps> = ({
  dataset,
  renderItem,
  resultsStyleType,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const RenderRows = (item: any, index: number) => {
    if (renderItem != undefined) {
      return (
        <Row
          styleType={
            resultsStyleType === "default" ? "transparent" : resultsStyleType
          }
        >
          {renderItem(item, index)}
        </Row>
      );
    } else {
      return (
        <Row
          styleType={
            resultsStyleType === "default" ? "transparent" : resultsStyleType
          }
        ></Row>
      );
    }
  };
  return (
    <ResultContainer>
      <Flex direction="column">
        <ListView dataset={dataset ? dataset : []} renderItem={RenderRows} />
      </Flex>
    </ResultContainer>
  );
};

export default SearchResultsComponent;
