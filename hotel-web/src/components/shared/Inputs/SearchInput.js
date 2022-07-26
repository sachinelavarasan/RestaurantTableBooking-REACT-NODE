/* eslint-disable react/prop-types */

import React, { useState } from "react"

import searchIcon from "../../../assets/icons/search-alt.svg"
import { SearchInputContainer } from "./SearchInputContainer"

const SearchInput = ({
  className,
  onChange,
  placeholder,
  value,
  width,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <SearchInputContainer
      className={(isFocused ? "is-focused" : "") + (` ${className}` || "")}
      style={style}
      width={width}
    >
      <img alt="Search" src={searchIcon} />
      <input
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        value={value}
      />
    </SearchInputContainer>
  )
}

export default SearchInput
