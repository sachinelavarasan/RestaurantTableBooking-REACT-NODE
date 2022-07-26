import React, { useEffect, useMemo, useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useHistory } from "react-router-dom"

import { OffersListContainer } from "./elements"
import {
  getHotelOffersList,
  hotelSelector,
  updateOfferItem,
  deleteOfferFromList,
  endOfferFromList,
} from "../../../../redux/HotelSlice"

import { EmptyState, Modal } from "../../../../components/common"

import AddToastSuccessImg from "../../../../assets/icons/addtoastadmin.svg"
import { showToast } from "../../../../components/common/Toast"
import SearchInput from "../../../../components/shared/Inputs/SearchInput"
import { TableSpinner } from "../../../Admin/components-new/TableSpinner"
import { AddOffersModel, Card, EditOffersModel } from "./components"

export const OffersList = () => {
  const dispatch = useDispatch()
  // const history = useHistory()

  const [show, setShow] = useState(false)
  const [editDetails, setEditDetails] = useState(null)
  const [deleteId, setDeleteId] = useState(null)

  const [searchTerm, setSearchTerm] = useState("")
  const { hotelOffersList, isListLoading, isLoading } =
    useSelector(hotelSelector)

  const data = useMemo(
    () =>
      hotelOffersList?.filter((item) =>
        item?.offers_description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ),
    [hotelOffersList, searchTerm]
  )

  const clearEditDetails = useCallback(() => {
    setShow(false)
  }, [])

  useEffect(() => {
    dispatch(getHotelOffersList())
  }, [dispatch])

  const clearEditFoodDetails = useCallback(() => {
    setEditDetails(null)
  }, [])

  const onEditSubmit = useCallback(
    (detail) => {
      const details = {
        ...detail,
      }
      if (!isLoading) {
        dispatch(
          updateOfferItem(editDetails.id, details, () => {
            clearEditFoodDetails()
            showToast(AddToastSuccessImg, `Offer updated successfully `)
          })
        )
      }
    },

    [dispatch, editDetails, isLoading, clearEditFoodDetails]
  )

  return (
    <OffersListContainer>
      <div className="header-container">
        <header>Your offer List</header>
        <div className="d-flex">
          <SearchInput
            className="class-search-responsive"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search"
            value={searchTerm}
            width="300px"
          />
          <button
            className="add-Btn ml-2"
            type="button"
            onClick={() => {
              setShow(true)
            }}
          >
            + Add Offer
          </button>
        </div>
      </div>
      {isListLoading ? <TableSpinner /> : null}
      {!isListLoading && data?.length ? (
        <div className="row mt-4">
          {data.map((item) => (
            <div className="card-class col-sm-6 col-lg-3 col-md-3 col-xl-3 col-xs-6 col-12 mb-4">
              <Card
                key={item.offers_id}
                img={item?.offer_image_url}
                alt="card"
                description={item.offers_description}
                isFinished={item.is_offers_finished}
                EditOnClick={() => {
                  setEditDetails({
                    id: item?.offers_id,
                    endDate: item.offers_finished_at,
                    startDate: item.offers_started_at,
                    description: item.offers_description,
                  })
                }}
                EndOnClick={() => {
                  dispatch(
                    endOfferFromList(item.offers_id, () => {
                      showToast(false, `offer has been ended.`, true)
                    })
                  )
                }}
                DeleteOnClick={() => {
                  setDeleteId(item?.offers_id)
                }}
              />
            </div>
          ))}
        </div>
      ) : null}
      {!isListLoading && !data?.length ? (
        <EmptyState
          description="It seems that there is no items here"
          title="No offers Found!"
        />
      ) : null}
      <AddOffersModel show={show} onHide={clearEditDetails} />
      <EditOffersModel
        editDetails={editDetails}
        onHide={clearEditFoodDetails}
        onSubmit={onEditSubmit}
      />
      <Modal
        buttonLabel="Delete"
        description="Are you sure you want to delete this offer from list?"
        isDelete
        isButtonLoading={isLoading}
        loadingButtonLabel="Deleting"
        onButtonClick={() => {
          dispatch(
            deleteOfferFromList(deleteId, () => {
              setDeleteId(null)
              showToast(false, `offer has been deleted.`, true)
            })
          )
        }}
        onHide={() => {
          setDeleteId(null)
        }}
        show={!!deleteId}
        title="Delete Offer"
        width="41.25rem"
      />
    </OffersListContainer>
  )
}
