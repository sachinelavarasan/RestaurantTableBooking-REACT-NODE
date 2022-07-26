/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react"
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useTable,
  useSortBy,
} from "react-table"

import SortIcon from "../../../assets/icons/sortIcon.svg"
import GlobalFilter from "../GlobalFilter"
import { Pagination } from "../Pagination"
import TableColumnFilter from "../TableColumnFilter"
import { FilterTab } from "../FilterTab"
import { Button } from "../Button"

import {
  Table as TableContainer,
  TableBody,
  TableHead,
  TableHeader,
} from "./styles"

export const Table = ({
  columns,
  data,
  filters = [],
  isSortedBy,
  isWithoutHeader,
  isWithoutPagination,
  itemName,
  maxWidth,
  defaultSorted = [],
  buttonLabel,
  onButtonClick,
  buttonIcon,
  filterTabs = [],
  hiddenColumns,
}) => {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        sortBy: defaultSorted,
      },
      autoResetPage: false,
      autoResetFilters: false,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    canNextPage,
    canPreviousPage,
    getTableProps,
    getTableBodyProps,
    gotoPage,
    headerGroups,
    nextPage,
    page,
    pageCount,
    pageOptions,
    preGlobalFilteredRows,
    prepareRow,
    previousPage,
    setFilter,
    setGlobalFilter,
    setPageSize,
    state,
    setAllFilters,
    state: { pageIndex, pageSize, filters: filtersState },
    toggleHideColumn,
  } = tableInstance

  const appliedFilters = useRef(null)

  useEffect(() => {
    appliedFilters.current = filtersState
    if (appliedFilters?.current?.length) {
      setAllFilters(appliedFilters?.current)
    } else {
      filters.forEach((filter) => {
        if (!filter.isFilteredManually) {
          setFilter(filter.column, filter.defaultValue)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, setFilter])

  useEffect(() => {
    hiddenColumns?.forEach((hiddenColumn) => {
      toggleHideColumn(hiddenColumn, true)
    })
  }, [hiddenColumns, toggleHideColumn])

  useEffect(() => {
    const element = document.querySelector("body")
    element?.scrollIntoView({
      behavior: "smooth",
    })
  }, [pageIndex])

  return (
    <>
      {isWithoutHeader ? null : (
        <TableHeader>
          <div className="item-container">
            {!filterTabs?.length ? (
              <h5 className="item-count mb-0">{`${preGlobalFilteredRows.length} ${itemName}`}</h5>
            ) : null}
            {filterTabs.map((filter) => (
              <div className="filter-tab">
                <FilterTab
                  column={filter.column}
                  itemName={filter.itemName}
                  key={filter.column}
                  onChange={setFilter}
                  value={filtersState[0]?.value}
                />
              </div>
            ))}
          </div>
          <div className="filters">
            <div className="filter-container">
              {filters.map((filter) => (
                <div className="filter">
                  <TableColumnFilter
                    pageIndex={pageIndex}
                    gotoPage={gotoPage}
                    column={filter.column}
                    data={filter.data}
                    defaultValue={filter.defaultValue}
                    formatOptionLabel={filter.formatOptionLabel}
                    itemName={filter.itemName}
                    key={filter.column}
                    onChange={(column, value) => {
                      if (!filter.isFilteredManually) setFilter(column, value)
                      if (filter.onChange) filter.onChange(value)
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="search">
              <GlobalFilter
                pageIndex={pageIndex}
                gotoPage={gotoPage}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </div>
            {buttonLabel && onButtonClick ? (
              <div className="button-container">
                <Button
                  icon={buttonIcon || ""}
                  className="add-button"
                  isFullWidth={false}
                  onClick={onButtonClick}
                  label={buttonLabel}
                />
              </div>
            ) : null}
          </div>
        </TableHeader>
      )}
      <TableContainer {...getTableProps()} maxWidth={maxWidth}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps([
                    {
                      className: column.className,
                    },
                  ])}
                  {...column.getHeaderProps(
                    column.render("Header").length > 1 &&
                      isSortedBy &&
                      column.getSortByToggleProps()
                  )}
                >
                  <div className="align-items-center d-flex">
                    {column.render("Header")}
                    {column.render("Header").length > 1 && isSortedBy ? (
                      <img className="sort-icon" src={SortIcon} alt="sort" />
                    ) : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <td
                    {...cell.getCellProps()}
                    data-label={headerGroups[0]?.headers[index]?.Header}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            )
          })}
        </TableBody>
      </TableContainer>
      {isWithoutPagination ? null : (
        <Pagination
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          gotoPage={gotoPage}
          nextPage={nextPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          pageSize={pageSize}
          previousPage={previousPage}
          setPageSize={setPageSize}
        />
      )}
    </>
  )
}
