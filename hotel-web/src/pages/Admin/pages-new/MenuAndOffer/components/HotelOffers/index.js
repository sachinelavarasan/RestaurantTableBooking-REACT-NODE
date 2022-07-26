/* eslint-disable react/prop-types */
import React, { useMemo } from "react"
import moment from "moment"
import { EmptyState, Table } from "../../../../../../components/common"

// import { TableCellLink } from "../../../../../../components/common/Table/styles"
import { ListingPageHeader, TableSpinner } from "../../../../components-new"
import { AllOffersContainer } from "./elements"

export const HotelOfferList = ({ hotelOffersList, isListLoading }) => {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "serial",
        className: "serial",
      },
      {
        Header: "offer Description",
        accessor: "offers_description",
        className: "table-name",
      },
      {
        Header: "Offer Starts",
        Cell: ({ value }) => (
          <div className="total-count">
            {moment(value).format("DD MMM YYYY")}
          </div>
        ),
        accessor: "offers_started_at",
        className: "offer-starts",
      },
      {
        Header: "Offer Ends",
        Cell: ({ value }) => (
          <div className="total-count">
            {moment(value).format("DD MMM YYYY")}
          </div>
        ),
        accessor: "offers_finished_at",
        className: "offer-ends",
      },
      {
        Header: "Offer Status",
        Cell: ({ value }) =>
          value === 0 ? (
            <div className="available">Available</div>
          ) : (
            <div className="not-available"> Not Available</div>
          ),
        accessor: "is_offers_finished",
        className: "offer-ends",
      },
    ],
    []
  )

  // Add a serial number to each row and memoize the data.
  const data = useMemo(
    () => [
      ...(hotelOffersList || []).map((item, index) => ({
        ...item,
        serial: index + 1,
      })),
    ],
    [hotelOffersList]
  )

  return (
    <>
      <AllOffersContainer>
        <ListingPageHeader className="mb-4" title="All Offers" />

        <div className="table-container">
          {isListLoading ? <TableSpinner /> : null}
          {!isListLoading && !hotelOffersList?.length ? (
            <EmptyState
              description="try adjusting the search or filter for what you are looking for"
              title="No offers Found"
            />
          ) : null}

          {!isListLoading &&
          hotelOffersList?.length &&
          Array.isArray(hotelOffersList) &&
          !isListLoading ? (
            <Table
              columns={columns}
              data={data}
              itemName="Offers"
              maxWidth="75rem"
              isSortedBy
            />
          ) : null}
        </div>
      </AllOffersContainer>
    </>
  )
}
