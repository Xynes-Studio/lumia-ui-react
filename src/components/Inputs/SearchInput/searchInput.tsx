"use client";
import { Button } from "@components/Button/button";
import { LmCkChevronDown } from "@icons/lmCkChevronDown";
import { LmCkSearch } from "@icons/lmCkSearch";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import React, { forwardRef, useEffect, useState } from "react";
import SearchResultsComponent from "./components/searchResults/searchResults";
import useDebounce from "./hooks/useDebounce";
import {
  SearchInputContainer,
  SearchInputWrapper,
  SearchResultsWrapper,
  StyledSearchInput,
} from "./searchInput.style";
import "./searchInput.styles.css";
import { SearchInputProps } from "./searchInput.type";

const SearchInputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  SearchInputProps
> = (
  {
    type = "default",
    inputType = "search",
    label,
    autoSearch = false,
    handleSearch,
    searchString = "",
    onValueChange,
    placeholder = "",
    suggestions = true,
    ...props
  },
  ref
) => {
  const [searchValue, setSearchValue] = useState(searchString);
  const debouncedText = useDebounce(searchValue, 500);

  useEffect(() => {
    if (autoSearch && handleSearch) handleSearch(debouncedText);
  }, [debouncedText, handleSearch, autoSearch]);

  return (
    <SearchInputContainer
      direction="column"
      className={cx("lmSearchInputContainer", props.className)}
    >
      {label !== undefined ? <Text>{label}</Text> : null}
      <SearchInputWrapper
        type={type}
        direction="row"
        className={cx("lmSearchInputWrapper", props.className)}
      >
        <StyledSearchInput
          placeholder={placeholder}
          value={searchValue}
          className={cx("lmSearchInput")}
          ref={ref}
          onChange={(e) => {
            const value = e.target.value;
            setSearchValue(value);
            if (onValueChange) {
              onValueChange(value);
            }
          }}
          {...props}
        />
        {inputType === "search" ? (
          <Button
            type="label"
            icon={LmCkSearch}
            onClick={() => {
              if (handleSearch) {
                handleSearch(searchValue);
              }
            }}
          />
        ) : (
          <Button type="label" icon={LmCkChevronDown} />
        )}
      </SearchInputWrapper>
      {props.dataset && suggestions && (
        <SearchResultsWrapper
          type={type}
          className={cx("lmSearchResultContainer", props.className)}
        >
          <SearchResultsComponent {...props} />
        </SearchResultsWrapper>
      )}
    </SearchInputContainer>
  );
};

export const SearchInput = forwardRef(SearchInputComponent);
