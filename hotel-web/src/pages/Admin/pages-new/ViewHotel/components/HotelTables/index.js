/* eslint-disable react/prop-types */
import React, { useMemo } from "react"
import { useHistory } from "react-router-dom"
import moment from "moment"

import { EmptyState, Table } from "../../../../../../components/common"

// import { TableCellLink } from "../../../../../../components/common/Table/styles"
import { ListingPageHeader, TableSpinner } from "../../../../components-new"
import { HotelTableContainer } from "./elements"

export const HotelTables = ({ hotelTables, isListLoading, hotelId }) => {
  const history = useHistory()
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "serial",
        className: "serial",
      },
      {
        Header: "Table Name",
        accessor: "table_name",
        className: "table-name",
      },
      {
        Header: "Seat Count",
        Cell: ({ value }) => (
          <div className="d-flex align-items-center">
            <div className="counts-present">{value}</div>
          </div>
        ),
        accessor: "table_seat_count",
        className: "seat-count",
      },

      {
        Header: "Table Created At",
        Cell: ({ value }) => (
          <div className="total-count">
            {moment(value).format("DD MMM YYYY")}
          </div>
        ),
        accessor: "table_created_at",
        className: "table-creation",
      },
    ],
    []
  )

  // Add a serial number to each row and memoize the data.
  const data = useMemo(
    () => [
      ...(hotelTables || []).map((item, index) => ({
        ...item,
        serial: index + 1,
      })),
    ],
    [hotelTables]
  )

  return (
    <>
      <HotelTableContainer>
        <ListingPageHeader
          className="add-booking mb-4"
          title="All Tables"
          buttonLabel="Add Booking"
          onButtonClick={() => {
            if (hotelTables.length) {
              history.replace(`/user/hotelList/${hotelId}/book-table`)
            }
          }}
        />

        <div className="table-container">
          {isListLoading ? <TableSpinner /> : null}
          {!isListLoading && !hotelTables?.length ? (
            <EmptyState
              description="try adjusting the search or filter for what you are looking for"
              title="No Table Found"
            />
          ) : null}

          {!isListLoading &&
          hotelTables?.length &&
          Array.isArray(hotelTables) &&
          !isListLoading ? (
            <Table
              columns={columns}
              data={data}
              itemName="Tables"
              maxWidth="75rem"
              isSortedBy
            />
          ) : null}
        </div>
      </HotelTableContainer>
    </>
  )
}
