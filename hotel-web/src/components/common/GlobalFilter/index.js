/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react"
import { useAsyncDebounce } from "react-table"
import SearchInput from "../../shared/Inputs/SearchInput"

const GlobalFilter = ({
  pageIndex,
  gotoPage,
  globalFilter,
  setGlobalFilter,
}) => {
  const [value, setValue] = useState(globalFilter)
  const currentPageIndex = useRef(pageIndex)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 300)

  return (
    <>
      <SearchInput
        onChange={(e) => {
          if (pageIndex !== 0) {
            currentPageIndex.current = pageIndex
          }
          if (e.target?.value === "") gotoPage(currentPageIndex.current)
          else gotoPage(0)
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder="Search"
        value={value || ""}
        width="16rem"
      />
    </>
  )
}
export default GlobalFilter
