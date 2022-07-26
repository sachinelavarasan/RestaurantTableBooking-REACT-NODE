import React, { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { Card } from "./Components"
import { HotelListContainer } from "./elements"
import { getAllHotelList, userSelector } from "../../../../redux/UserSlice"

import { EmptyState } from "../../../../components/common"

// import AddToastSuccessImg from "../../../../assets/icons/addtoastadmin.svg"
// import { showToast } from "../../../../components/common/Toast"
import SearchInput from "../../../../components/shared/Inputs/SearchInput"
import { TableSpinner } from "../../components-new/TableSpinner"

export const HotelList = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState("")
  const { hotelList, isListLoading } = useSelector(userSelector)

  const data = useMemo(
    () =>
      hotelList?.filter((item) =>
        item?.hotel_name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [hotelList, searchTerm]
  )

  useEffect(() => {
    dispatch(getAllHotelList())
  }, [dispatch])

  return (
    <HotelListContainer>
      <div className="header-container mb-3">
        <header>Hotel List</header>
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
                key={item.user_id}
                img={item.user_avatar}
                alt="card"
                title={item.hotel_name}
                description={item.address}
                onClick={() => {
                  history.push(`/user/hotelList/${item.hotel_id}/view`)
                }}
              />
            </div>
          ))}
        </div>
      ) : null}
      {!isListLoading && !data?.length ? (
        <EmptyState
          description="It seems that there is no items here"
          title="No hotels Found!"
        />
      ) : null}
    </HotelListContainer>
  )
}
