/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup"
import PropTypes from "prop-types"
import { useMemo, useCallback } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import {
  hotelSelector,
  clearFormError,
  setError as setServerError,
} from "../../../../../../redux/HotelSlice"

import { useErrorMessage } from "../../../../../../utils/hooks"
import { Select, TextInput } from "../../../../../../components/common"
import CustomCancel from "../../../../../../components/shared/Buttons/CustomButton"
import AddIcon from "../../../../../../assets/icons/addadmin.svg"
import CloseIcon from "../../../../../../assets/icons/redcross.svg"

import { foodDetailsSchema } from "../../../../../../utils/validation"
import { AddMenuContainer } from "./elements"

const FIELDS_IN_ORDER = ["foodName", "menuType"]

export const AddMenuModal = ({
  onHide,
  onSubmit,
  addUnits,
  show,
  setAddUnits,
}) => {
  const dispatch = useDispatch()

  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: {
      foodName: "",
      menuType: null,
    },
    resolver: yupResolver(foodDetailsSchema),
  })
  const {
    error: serverError,
    menuType,
    formError,
    isListLoading,
  } = useSelector(hotelSelector)

  const clearServerError = useCallback(() => {
    dispatch(setServerError(null))
    dispatch(clearFormError())
  }, [dispatch])

  useErrorMessage(errors, serverError, clearServerError, FIELDS_IN_ORDER)

  const dataOption = useMemo(
    () => [
      ...(menuType || []).map((item, index) => ({
        label: item.menu_type_name,
        value: item.menu_type_id,
        serial: index + 1,
      })),
    ],
    [menuType]
  )
  const onSubmitForm = useCallback(
    (data) => {
      setAddUnits((state) => [
        ...state,
        {
          menuType: data.menuType,
          foodName: data.foodName,
        },
      ])
      setValue("menuType", null)
      setValue("foodName", "")
    },
    [setAddUnits, setValue]
  )
  const removeItems = (position) => {
    setAddUnits((state) => state.filter((item, index) => index !== position))
  }
  return (
    <AddMenuContainer
      buttonLabel="Save"
      description="Add food to the hotel menu"
      isButtonLoading={isListLoading}
      loadingButtonLabel="Saving"
      onButtonClick={onSubmit}
      onHide={onHide}
      show={show}
      title="Add food details"
      width="40rem"
      backdrop="static"
    >
      <form>
        <div className="form-container">
          <div className="row-container">
            <div className="course-name">
              <Controller
                control={control}
                name="foodName"
                render={(fields) => (
                  <TextInput
                    {...fields}
                    autoComplete="off"
                    errorMessage={
                      errors.foodName?.message || formError?.foodName
                    }
                    hasError={!!errors.foodName || !!formError.foodName}
                    label="Food Name"
                    placeholder="Enter food name"
                    id="course-name"
                  />
                )}
              />
            </div>
          </div>
          <div className="row-container">
            <div className="field-left">
              <Controller
                control={control}
                name="menuType"
                render={(fields) => (
                  <Select
                    {...fields}
                    hasError={!!errors.menuType}
                    errorMessage={errors.menuType?.message}
                    isLarge={false}
                    label="Type"
                    options={dataOption}
                    placeholder="Choose a type"
                    id="course-type"
                  />
                )}
              />
            </div>
            <div className="field-right">
              <CustomCancel
                className="save-changes"
                bgColor="#fff"
                padding="0.5rem 0.875rem"
                onClick={handleSubmit(onSubmitForm)}
                id="add-unit-button"
              >
                <img src={AddIcon} alt="icon" />
                <span className="add-button-text">Add</span>
              </CustomCancel>
            </div>
          </div>
        </div>
        {addUnits?.length ? (
          <>
            <p className="text">{addUnits?.length} - added items</p>
            <div className="added-items-container">
              {addUnits?.map((item, position) => (
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mr-5">{item.foodName}</p>
                    <p>{item?.menuType?.label}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      removeItems(position)
                    }}
                    className="closeIconBtn"
                  >
                    <img src={CloseIcon} alt="close" />
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </form>
    </AddMenuContainer>
  )
}

AddMenuModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
