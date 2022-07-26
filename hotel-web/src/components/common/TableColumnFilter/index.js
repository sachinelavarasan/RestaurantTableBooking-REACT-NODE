/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/prop-types */

import { useState, useRef } from "react"

import { Select } from "../Select"
import TableColumnFilterContainer from "./elements/TableColumnFilterContainer"

const TableColumnFilter = ({
  column,
  data,
  pageIndex,
  gotoPage,
  defaultValue,
  itemName,
  onChange,
  formatOptionLabel,
}) => {
  const [labelValue, setValue] = useState(defaultValue)
  const currentPageIndex = useRef(pageIndex)
  return (
    <TableColumnFilterContainer>
      <Select
        options={data}
        defaultValue={defaultValue}
        formatOptionLabel={formatOptionLabel}
        isLarge={false}
        onChange={(value) => {
          if (pageIndex !== 0) {
            currentPageIndex.current = pageIndex
          }
          if (value?.value === "") gotoPage(currentPageIndex.current)
          else gotoPage(0)
          setValue(value)
          onChange(column, value?.value)
        }}
        placeholder={`Search ${itemName}`}
        value={labelValue}
        width="16rem"
      />
    </TableColumnFilterContainer>
  )
}

export default TableColumnFilter
