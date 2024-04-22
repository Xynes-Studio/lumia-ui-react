"use client";
import React, { forwardRef, useEffect } from "react";
import { SearchInputProps } from "./searchInput.type";
import styled from "styled-components";
import { cx } from "@utils/cx";
import { Text } from "@texts/index";
import { Flex } from "@app/View";
import { color, spacing, strokes, typography, shadow } from "@shared/styles";
import { LmCkSearch } from "@icons/lmCkSearch";
import { LmCkChevronDown } from "@icons/lmCkChevronDown";
import useDebounce from "./hooks/useDebounce";
import { Button } from "@components/Button/button";
import "./searchInput.styles.css";

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
    placeholder = "",
    ...props
  },
  ref
) => {
  const debouncedText = useDebounce(searchString, 500);

  useEffect(() => {
    if (autoSearch && handleSearch) handleSearch({ value: debouncedText });
  }, [debouncedText, handleSearch, autoSearch]);

  const SearchInputContainer = styled(Flex)``;
  const SearchInputWrapper = styled(Flex)`
    background-color: ${type === "default"
      ? color?.foregroundInverse400
      : "none"};
    border: ${type === "outline"
      ? `${strokes?.s0} solid ${color?.border1}`
      : "null"};
    padding: ${spacing?.padding?.p0} ${spacing?.padding?.p2};
    border-radius: ${spacing?.borderRadius?.r0};
    box-shadow: ${type === "shadow" ? shadow : "none"};
  `;
  const SearchInput = styled.input`
    font-size: ${typography?.size?.input};
  `;

  return (
    <SearchInputContainer
      direction="column"
      className={cx("lmSearchInputContainer", props.className)}
    >
      {label !== undefined ? <Text>{label}</Text> : null}
      <SearchInputWrapper
        direction="row"
        className={cx("lmSearchInputWrapper")}
      >
        <SearchInput
          type="text"
          placeholder={placeholder}
          className={cx("lmSearchInput")}
          ref={ref}
          {...props}
        />
        {inputType === "search" ? (
          <Button
            type="label"
            icon={LmCkSearch}
            onClick={() => {
              if (!autoSearch && handleSearch) {
                handleSearch({ value: searchString });
              }
            }}
          />
        ) : (
          <Button type="label" icon={LmCkChevronDown} />
        )}
      </SearchInputWrapper>
    </SearchInputContainer>
  );
};

export const SearchInput = forwardRef(SearchInputComponent);
