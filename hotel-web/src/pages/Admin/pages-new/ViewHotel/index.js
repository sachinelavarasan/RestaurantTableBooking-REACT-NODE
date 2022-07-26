import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { ViewHotelContainer } from "./elements"
import { Header, HotelTables } from "./components"
import { getHotelById, userSelector } from "../../../../redux/UserSlice"

export const ViewHotel = () => {
  const dispatch = useDispatch()
  const { hotelId } = useParams()

  const { viewHotel, isListLoading } = useSelector(userSelector)

  useEffect(() => {
    dispatch(getHotelById(hotelId))
  }, [dispatch, hotelId])

  return (
    <>
      <Helmet>
        <title>View Hotel | Hotel</title>
      </Helmet>

      <ViewHotelContainer>
        <Header hotel={viewHotel} />
        <HotelTables
          hotelTables={viewHotel?.hotelTables}
          isListLoading={isListLoading}
          hotelId={hotelId}
        />
      </ViewHotelContainer>
    </>
  )
}
