import React, { useCallback, useState, useEffect } from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { Row, Col } from "reactstrap"

import { TextInput } from "../../../../components/common"

import { Table } from "./components/table"

import { Header } from "./components/Header"
import { BookingContainer } from "./elements"
import {
  getHotelWithTableById,
  getHotelById,
  userSelector,
} from "../../../../redux/UserSlice"
import { TableSpinner } from "../../components-new"

export const BookingTable = () => {
  const { hotelId } = useParams()
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState("")

  const { viewHotel, isListLoading } = useSelector(userSelector)
  // Generating tables from available tables state

  const getTables = useCallback(() => {
    if (viewHotel?.hotelTables?.length > 0) {
      const tables = []
      viewHotel?.hotelTables?.forEach((table) => {
        if (table?.booked?.length) {
          tables.push(
            <Table
              key={table.table_id}
              id={table.table_id}
              chairs={table.table_seat_count}
              name={table.table_name}
              hotelId={hotelId}
            />
          )
        } else {
          tables.push(
            <Table
              key={table.table_id}
              id={table.table_id}
              chairs={table.table_seat_count}
              name={table.table_name}
              empty
              hotelId={hotelId}
            />
          )
        }
      })
      return tables
    }
    return null
  }, [viewHotel, hotelId])

  useEffect(() => {
    dispatch(getHotelById(hotelId))
  }, [dispatch, hotelId])

  return (
    <BookingContainer
    // initial={{ width: 0 }}
    // animate={{ width: "100%" }}
    // exit={{ x: "100%", transition: { duration: 0.1, delay: 1 } }}
    >
      <Header hotel={viewHotel} hotelId={hotelId} />
      <div className="d-flex w-70 align-items-center mt-3">
        <div className="date-time-div">
          <div>
            <p className="select-date mb-1">Select Date</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              dateFormat="dd-MM-yyyy"
            />
          </div>

          <TextInput
            className="choose-time ml-3"
            autoComplete="off"
            label="Choose Time"
            placeholder="Choose a start time"
            type="time"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value)
            }}
            onBlur
          />
        </div>
        <div>
          <button
            className="get-tables-button"
            onClick={() => {
              if (startDate && startTime.length) {
                dispatch(getHotelWithTableById(hotelId, startDate, startTime))
              }
            }}
            type="button"
            id="add-comments-button"
          >
            Get Tables
          </button>
        </div>
      </div>
      {isListLoading ? <TableSpinner /> : null}
      {!isListLoading ? (
        <Row noGutters className="tables-display">
          <Col>
            {viewHotel?.hotelTables?.length > 0 ? (
              <div>
                <div className="table-key">
                  <span className="empty-table" /> &nbsp; Available &nbsp;&nbsp;
                  <span className="full-table" /> &nbsp; Unavailable
                  &nbsp;&nbsp;
                </div>
                <Row noGutters>{getTables()}</Row>
              </div>
            ) : (
              <p className="table-display-message">No Available Tables</p>
            )}
          </Col>
        </Row>
      ) : null}
    </BookingContainer>
  )
}
