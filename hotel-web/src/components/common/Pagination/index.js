/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import classNames from "classnames"
import React, { useEffect, useRef, useState } from "react"

import ArrowDownIcon from "../../../assets/icons/pagination-arrow-down.svg"
import ArrowLeftIcon from "../../../assets/icons/pagination-arrow-left.svg"
import rem from "../../../utils/rem"
import SelectBox from "../../shared/SelectBox"
import { Styles } from "./Elements"

export const Pagination = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize,
}) => {
  const pageSelectorElement = useRef()
  const rowCountSelectorElement = useRef()
  const [isPageSelectorOpen, setIsPageSelectorOpen] = useState(false)
  const [isRowCountSelectorOpen, setIsRowCountSelectorOpen] = useState(false)

  // Hide the row count and page selectors when clicked outside them.
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        pageSelectorElement.current &&
        !pageSelectorElement.current.contains(event.target)
      ) {
        setIsPageSelectorOpen(false)
      }

      if (
        rowCountSelectorElement.current &&
        !rowCountSelectorElement.current.contains(event.target)
      ) {
        setIsRowCountSelectorOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [pageSelectorElement, rowCountSelectorElement])

  return (
    <Styles>
      <div className="align-items-center d-flex">
        <span className="text">
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
        <span className="mx-4 text">|</span>
        <span className="mr-3 text">Rows per page</span>
        {/* Select the number of rows that should be shown on each page. */}
        <SelectBox
          className="select"
          icon={ArrowDownIcon}
          isOpen={isRowCountSelectorOpen}
          isOptionsOnTop
          items={[10, 20, 30, 40, 50].map((item) => ({
            name: item,
            onClick: () => {
              setPageSize(item)
            },
          }))}
          label={pageSize}
          onClick={() => {
            setIsRowCountSelectorOpen((previousValue) => !previousValue)
          }}
          reference={rowCountSelectorElement}
          width={rem(68)}
        />
      </div>
      <div className="pagination-button d-flex">
        {/* Select a page number to go to that page. */}
        <SelectBox
          className="select"
          icon={ArrowDownIcon}
          isOpen={isPageSelectorOpen}
          isOptionsOnTop
          items={pageOptions.map((page) => ({
            name: page + 1,
            onClick: () => {
              gotoPage(page)
            },
          }))}
          label={pageIndex + 1}
          onClick={() => {
            setIsPageSelectorOpen((previousValue) => !previousValue)
          }}
          reference={pageSelectorElement}
          width={rem(68)}
        />
        {/* Go to the previous page. */}
        <button
          className={classNames("previous-button", {
            "is-disabled": !canPreviousPage,
          })}
          onClick={() => {
            previousPage()
          }}
          disabled={!canPreviousPage}
        >
          <img alt="Previous" src={ArrowLeftIcon} />
          <span>Prev.</span>
        </button>{" "}
        {/* Go to the next page. */}
        <button
          className={classNames("next-button", {
            "is-disabled": !canNextPage,
          })}
          onClick={() => {
            nextPage()
          }}
          disabled={!canNextPage}
        >
          <span>Next</span>
          <img alt="Next" src={ArrowLeftIcon} />
        </button>
      </div>
    </Styles>
  )
}
