import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { ViewHotelContainer } from "./elements"
import { Header, HotelMenuList, HotelOfferList } from "./components"
import {
  getHotelMenuAndOffersById,
  getHotelById,
  userSelector,
} from "../../../../redux/UserSlice"

export const MenuAndOfferHotel = () => {
  const dispatch = useDispatch()
  const { hotelId } = useParams()

  const { viewHotel, hotelOffersList, hotelMenuList, isListLoading } =
    useSelector(userSelector)

  useEffect(() => {
    dispatch(getHotelMenuAndOffersById(hotelId))
    dispatch(getHotelById(hotelId))
  }, [dispatch, hotelId])

  return (
    <>
      <Helmet>
        <title>Menu And Offer | Hotel</title>
      </Helmet>

      <ViewHotelContainer>
        <Header hotel={viewHotel} hotelId={hotelId} />
        <HotelMenuList
          hotelMenuList={hotelMenuList}
          isListLoading={isListLoading}
        />
        <HotelOfferList
          hotelOffersList={hotelOffersList}
          isListLoading={isListLoading}
        />
      </ViewHotelContainer>
    </>
  )
}
