"use client";
import { Button } from "@components/Button/button";
import { LmCkChevronDown } from "@icons/lmCkChevronDown";
import { LmCkSearch } from "@icons/lmCkSearch";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import React, { forwardRef, useEffect } from "react";
import SearchResultsComponent from "./components/searchResults/searchResults";
import useDebounce from "./hooks/useDebounce";
import {
  SearchInputContainer,
  SearchInputStyle,
  SearchInputWrapper,
  SearchResultsWrapper,
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
  const debouncedText = useDebounce(searchString, 500);

  useEffect(() => {
    if (autoSearch && handleSearch) handleSearch(debouncedText);
  }, [debouncedText, handleSearch, autoSearch]);

  return (
    <SearchInputContainer
      direction="column"
      className={cx("lmSearchInputContainer")}
    >
      {label !== undefined ? <Text>{label}</Text> : null}
      <SearchInputWrapper
        type={type}
        direction="row"
        className={cx("lmSearchInputWrapper", props.className)}
      >
        <SearchInputStyle
          placeholder={placeholder}
          type="text"
          value={searchString}
          className={cx("lmSearchInput")}
          ref={ref}
          onChange={(e) => onValueChange && onValueChange(e.target.value)}
          {...props}
        />
        {inputType === "search" ? (
          <Button
            type="label"
            icon={LmCkSearch}
            onClick={() => {
              if (handleSearch) {
                handleSearch(searchString);
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
