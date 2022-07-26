/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from "react"

import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
// import { useHistory } from "react-router-dom"

import {
  getBookingList,
  updateBookedStatus,
  hotelSelector,
} from "../../../../../../redux/HotelSlice"
import {
  EmptyState,
  MoreOptions,
  Table,
  Modal,
} from "../../../../../../components/common"
import { DropdownItem } from "../../../../../../components/common/MoreOptions/components"

import { showToast } from "../../../../../../components/common/Toast"

// import { TableCellLink } from "../../../../../../components/common/Table/styles"
import {
  ListingPageHeader,
  TableSpinner,
} from "../../../../../Admin/components-new"
import { BookingContainer } from "./elements"

const DELAY = 500

export const HotelTables = () => {
  const dispatch = useDispatch()
  // const history = useHistory()
  const { bookingList, isListLoading, isLoading } = useSelector(hotelSelector)

  const [deleteId, setDeleteId] = useState(null)
  const [deleteName, setDeleteName] = useState("")

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "serial",
        className: "serial",
      },
      {
        Header: "Event Name",
        accessor: "booking_description",
        className: "event-name",
      },
      {
        Header: "User details",
        Cell: ({ row: { original } }) => (
          <div className="d-flex flex-column">
            <span className="font-weight-bold">
              {original.first_name} {original.last_name}
            </span>
            <span>Mob:No {original.phone_number}</span>
          </div>
        ),
        accessor: "phone_number",
        className: "user",
      },
      {
        Header: "Booked Table",
        accessor: "table_name",
        className: "table-name",
      },

      {
        Header: "Booked Date",
        Cell: ({ value }) => (
          <div className="total-count">
            {moment(value).format("DD MMM YYYY")}
          </div>
        ),
        accessor: "booking_date",
        className: "table-creation",
      },
      {
        Header: "Booked Time",
        Cell: ({ row: { original } }) => (
          <div className="d-flex align-items-center">
            <div className="counts-present">
              {`${moment(original.booking_start_time, "HH:mm")
                .format("h:mm A")
                .replace(/:00/g, "")} - 
              ${moment(original.booking_end_time, "HH:mm")
                .format("h:mm A")
                .replace(/:00/g, "")}`}
            </div>
          </div>
        ),
        accessor: "booking_start_time",
        className: "seat-count",
      },
      {
        Header: "Status",
        Cell: ({ value }) => {
          if (value) {
            return (
              <div className="finished d-flex align-items-center justify-content-center">
                Finished
              </div>
            )
          }
          return (
            <div className="not-finished d-flex align-items-center justify-content-center">
              Upcoming
            </div>
          )
        },
        accessor: "is_booking_finished",
        className: "booking-status",
      },

      {
        Header: "",
        Cell: ({ row: { original } }) => (
          <div className="align-items-center d-flex justify-content-center w-100">
            <MoreOptions>
              <DropdownItem
                label="Finish Booking"
                isDanger
                onClick={() => {
                  setDeleteId(original?.booking_id)
                  setDeleteName(original?.booking_description)
                }}
              />
            </MoreOptions>
          </div>
        ),
        accessor: "courses",
        className: "more-option",
      },
    ],
    []
  )

  // Add a serial number to each row and memoize the data.
  const data = useMemo(
    () => [
      ...(bookingList || []).map((item, index) => ({
        ...item,
        serial: index + 1,
      })),
    ],
    [bookingList]
  )

  useEffect(() => {
    dispatch(getBookingList())
  }, [dispatch])

  return (
    <>
      <BookingContainer>
        <ListingPageHeader className="mb-4" title="All Bookings" />

        <div className="table-container">
          {isListLoading ? <TableSpinner /> : null}
          {!isListLoading && !bookingList?.length ? (
            <EmptyState
              description="try adjusting the search or filter for what you are looking for"
              title="No Booking Found"
            />
          ) : null}

          {!isListLoading &&
          bookingList?.length &&
          Array.isArray(bookingList) &&
          !isListLoading ? (
            <Table
              columns={columns}
              data={data}
              itemName="Bookings"
              maxWidth="75rem"
              isSortedBy
            />
          ) : null}
        </div>

        <Modal
          buttonLabel="Update"
          description="Are you sure you want to finish this booking from hotel booking list?"
          isDelete
          isButtonLoading={isLoading}
          loadingButtonLabel="Updating"
          onButtonClick={() => {
            dispatch(
              updateBookedStatus(deleteId, () => {
                setDeleteId(null)
                showToast(false, `${deleteName} has been finished.`, true)
                setTimeout(() => {
                  setDeleteName("")
                }, DELAY)
              })
            )
          }}
          onHide={() => {
            setDeleteId(null)

            setTimeout(() => {
              setDeleteName("")
            }, DELAY)
          }}
          show={!!deleteId}
          title={`Finish ${deleteName}`}
          width="41.25rem"
        />
      </BookingContainer>
    </>
  )
}
