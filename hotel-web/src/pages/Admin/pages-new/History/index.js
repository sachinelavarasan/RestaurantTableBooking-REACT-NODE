import React, { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Card } from "./Components"
import { HotelListContainer } from "./elements"
import {
  getBookingList,
  cancelBooking,
  userSelector,
} from "../../../../redux/UserSlice"

import { EmptyState, Modal } from "../../../../components/common"

import { showToast } from "../../../../components/common/Toast"
import SearchInput from "../../../../components/shared/Inputs/SearchInput"
import { TableSpinner } from "../../components-new/TableSpinner"

export const HistoryList = () => {
  const dispatch = useDispatch()
  // const history = useHistory()
  const [deleteId, setDeleteId] = useState(null)
  const [deleteName, setDeleteName] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const { bookingList, isListLoading, isLoading } = useSelector(userSelector)

  const data = useMemo(
    () =>
      bookingList?.filter(
        (item) =>
          item?.booking_description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item?.hotel_name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [bookingList, searchTerm]
  )

  useEffect(() => {
    dispatch(getBookingList())
  }, [dispatch])

  return (
    <HotelListContainer>
      <div className="header-container mb-3">
        <header>Booking History</header>
        <div className="d-flex">
          <SearchInput
            className="class-search-responsive"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search"
            value={searchTerm}
            width="300px"
          />
        </div>
      </div>
      {isListLoading ? <TableSpinner /> : null}
      {!isListLoading && data?.length ? (
        <div className="row">
          {data.map((item) => (
            <div className="card-class col-sm-6 col-lg-3 col-md-4 col-xl-3 col-xs-6 col-12 mb-4">
              <Card
                key={item?.booking_id}
                item={item}
                description={item?.booking_description}
                bookedOn={item?.booking_created_at}
                eventDate={item?.booking_date}
                phone={item?.phone_number}
                DeleteOnClick={() => {
                  setDeleteId(item?.booking_id)
                  setDeleteName(item?.booking_description)
                }}
              />
            </div>
          ))}
        </div>
      ) : null}
      {!isListLoading && !data?.length ? (
        <EmptyState
          description="It seems that there is no items here"
          title="No Booking Found!"
        />
      ) : null}
      <Modal
        buttonLabel="Booking Cancel"
        description="Are you sure you want to cancel this booking?"
        isDelete
        isButtonLoading={isLoading}
        loadingButtonLabel="Deleting"
        onButtonClick={() => {
          dispatch(
            cancelBooking(deleteId, () => {
              setDeleteId(null)
              showToast(false, `${deleteName} has been cancelled.`, true)
              setTimeout(() => {
                setDeleteName("")
              }, 500)
            })
          )
        }}
        onHide={() => {
          setDeleteId(null)

          setTimeout(() => {
            setDeleteName("")
          }, 500)
        }}
        show={!!deleteId}
        title={`Delete ${deleteName}`}
        width="41.25rem"
      />
    </HotelListContainer>
  )
}
