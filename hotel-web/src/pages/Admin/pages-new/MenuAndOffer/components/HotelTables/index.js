/* eslint-disable react/prop-types */
import React, { useMemo } from "react"

import { EmptyState, Table } from "../../../../../../components/common"

// import { TableCellLink } from "../../../../../../components/common/Table/styles"
import { ListingPageHeader, TableSpinner } from "../../../../components-new"
import { AllMenuContainer } from "./elements"

export const HotelMenuList = ({ hotelMenuList, isListLoading }) => {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "serial",
        className: "serial",
      },
      {
        Header: "Menu Name",
        accessor: "menu_name",
        className: "table-name",
      },
      {
        Header: "Menu Type",
        Cell: ({ value }) => (
          <div className="d-flex align-items-center">
            <span className="badge badge-pill badge-warning p-2">{value}</span>
          </div>
        ),
        accessor: "menu_type_name",

        className: "seat-count",
      },
    ],
    []
  )

  // Add a serial number to each row and memoize the data.
  const data = useMemo(
    () => [
      ...(hotelMenuList || []).map((item, index) => ({
        ...item,
        serial: index + 1,
      })),
    ],
    [hotelMenuList]
  )

  return (
    <>
      <AllMenuContainer>
        <ListingPageHeader className="mb-4" title="All Menu" />

        <div className="table-container">
          {isListLoading ? <TableSpinner /> : null}
          {!isListLoading && !hotelMenuList?.length ? (
            <EmptyState
              description="try adjusting the search or filter for what you are looking for"
              title="No Menu Found"
            />
          ) : null}

          {!isListLoading &&
          hotelMenuList?.length &&
          Array.isArray(hotelMenuList) &&
          !isListLoading ? (
            <Table
              columns={columns}
              data={data}
              itemName="Menu"
              maxWidth="75rem"
              isSortedBy
            />
          ) : null}
        </div>
      </AllMenuContainer>
    </>
  )
}
