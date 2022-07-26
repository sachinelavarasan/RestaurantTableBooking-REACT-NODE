import React, { useEffect, useMemo } from "react"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
// import { useHistory } from "react-router-dom"

import { CalenderContainer } from "./elements"
import {
  getBookingList,
  hotelSelector,
  setSearch,
} from "../../../../redux/HotelSlice"
import { Calender } from "./components"

import { TableSpinner } from "../../../Admin/components-new/TableSpinner"
import SearchInput from "../../../../components/shared/Inputs/SearchInput"

export const BookingCalender = () => {
  const dispatch = useDispatch()
  // const history = useHistory()

  const { bookingList, search, isListLoading } = useSelector(hotelSelector)

  const data = useMemo(
    () => [
      ...(bookingList || []).map((booking, index) => ({
        id: booking.booking_id,
        title: booking.booking_description,
        start: new Date(booking.booking_date),
        end: new Date(booking.booking_date),
        name: `${booking.first_name} ${booking.last_name}`,
        status: booking.is_booking_finished,
        phone: booking.phone_number,
        time: `${moment(booking.booking_start_time, "HH:mm:ss").format(
          "h:mm"
        )} - ${moment(booking.booking_end_time, "HH:mm:ss").format("h:mm a")}`,
        serial: index + 1,
      })),
    ],
    [bookingList]
  )

  useEffect(() => {
    dispatch(getBookingList())
  }, [dispatch])

  return (
    <CalenderContainer>
      <div className="header-container">
        <header>Events Calender</header>
        <div className="d-flex">
          <SearchInput
            className="class-search-responsive"
            onChange={(event) => dispatch(setSearch(event.target.value))}
            placeholder="Search"
            value={search}
            width="300px"
          />
        </div>
      </div>
      <div className="table-container mt-2">
        {isListLoading ? <TableSpinner /> : null}
        {!isListLoading ? <Calender events={data} /> : null}
      </div>
    </CalenderContainer>
  )
}
