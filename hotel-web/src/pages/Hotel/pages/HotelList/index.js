import React, { useEffect, useMemo, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useHistory } from "react-router-dom"

import { Card, AddMenuModal, EditFoodItemModal } from "./Components"
import { HotelListContainer } from "./elements"
import {
  getHotelMenuList,
  hotelSelector,
  addMenuToHotel,
  updateFoodItem,
  deleteMenuFromList,
} from "../../../../redux/HotelSlice"

import { EmptyState, Select, Modal } from "../../../../components/common"

import AddToastSuccessImg from "../../../../assets/icons/addtoastadmin.svg"
import { showToast } from "../../../../components/common/Toast"
import SearchInput from "../../../../components/shared/Inputs/SearchInput"
import { TableSpinner } from "../../../Admin/components-new/TableSpinner"

const DELAY = 500
export const HotelMenuList = () => {
  const dispatch = useDispatch()
  const [addUnits, setAddUnits] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteId, setDeleteId] = useState(null)
  const [deleteName, setDeleteName] = useState("")
  // const [courseId, setCourseId] = useState(null)
  // const [courseName, setCourseName] = useState("")
  const [filterByCategory, setFilterByCategory] = useState({
    value: "",
    label: "All Category",
  })
  const [show, setShow] = useState(false)
  const [editDetails, setEditDetails] = useState(null)

  const clearEditFoodDetails = useCallback(() => {
    setEditDetails(null)
  }, [])
  // const history = useHistory()
  const { hotelMenuList, isLoading, isListLoading, menuType } =
    useSelector(hotelSelector)

  const clearEditDetails = useCallback(() => {
    setShow(false)
    setAddUnits([])
  }, [])

  const onSubmit = useCallback(() => {
    if (!isLoading && addUnits.length) {
      dispatch(
        addMenuToHotel(addUnits, () => {
          showToast(
            AddToastSuccessImg,
            `${addUnits?.length} items added successfully `
          )
          clearEditDetails()
        })
      )
    }
  }, [dispatch, addUnits, clearEditDetails, isLoading])

  const data = useMemo(
    () =>
      hotelMenuList?.filter(
        (item) =>
          item?.menu_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (item?.menu_type_id === filterByCategory?.value ||
            filterByCategory?.value === "")
      ),
    [hotelMenuList, searchTerm, filterByCategory]
  )

  const menuTypeAsOptions = useMemo(
    () => [
      { label: "All Catergory", value: "" },
      ...(menuType?.map((item) => ({
        label: item.menu_type_name,
        value: item.menu_type_id,
      })) || []),
    ],
    [menuType]
  )

  const onEditSubmit = useCallback(
    (details) => {
      const Data = {
        foodName: details.foodName,
        menuType: details.menuType.value,
      }
      if (!isLoading) {
        dispatch(
          updateFoodItem(editDetails.id, Data, () => {
            clearEditFoodDetails()
            showToast(
              AddToastSuccessImg,
              `${Data?.foodName} updated successfully `
            )
          })
        )
      }
    },

    [dispatch, editDetails, isLoading, clearEditFoodDetails]
  )

  useEffect(() => {
    dispatch(getHotelMenuList())
  }, [dispatch])

  return (
    <HotelListContainer>
      <div className="header-container">
        <header>Menu List</header>
        <div className="d-flex">
          <div className="category mr-2">
            <Select
              isLarge={false}
              value={filterByCategory}
              options={menuTypeAsOptions}
              onChange={(e) => {
                setFilterByCategory(e)
              }}
              width="100%"
            />
          </div>
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
            + Add Menu
          </button>
        </div>
      </div>

      {isListLoading ? <TableSpinner /> : null}
      {!isListLoading && data?.length ? (
        <div className="row">
          {data.map((item) => (
            <div className="card-class col-sm-6 col-lg-4 col-md-3 col-xl-4 col-xs-6 col-12 mb-4">
              <Card
                key={item?.menu_id}
                menuName={item?.menu_name}
                itemType={item?.menu_type_name}
                EditOnClick={() => {
                  setEditDetails({
                    id: item?.menu_id,
                    menuType: {
                      id: item?.menu_type_id,
                      name: item?.menu_type_name,
                    },

                    foodName: item?.menu_name,
                  })
                }}
                DeleteOnClick={() => {
                  setDeleteId(item?.menu_id)
                  setDeleteName(item?.menu_name)
                }}
              />
            </div>
          ))}
        </div>
      ) : null}
      {!isListLoading && !data?.length ? (
        <EmptyState
          description="It seems that there is no items has been added to your menu card"
          title="No Items Found!"
        />
      ) : null}
      <AddMenuModal
        show={show}
        onHide={clearEditDetails}
        onSubmit={onSubmit}
        addUnits={addUnits}
        setAddUnits={setAddUnits}
      />
      <EditFoodItemModal
        editDetails={editDetails}
        onHide={clearEditFoodDetails}
        onSubmit={onEditSubmit}
      />
      <Modal
        buttonLabel="Delete"
        description="Are you sure you want to delete this food from hotel list?"
        isDelete
        isButtonLoading={isLoading}
        loadingButtonLabel="Deleting"
        // className="delete-food-modal"
        onButtonClick={() => {
          dispatch(
            deleteMenuFromList(deleteId, () => {
              setDeleteId(null)
              showToast(false, `${deleteName} has been deleted.`, true)
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
        title={`Delete ${deleteName}`}
        width="41.25rem"
      />
    </HotelListContainer>
  )
}
