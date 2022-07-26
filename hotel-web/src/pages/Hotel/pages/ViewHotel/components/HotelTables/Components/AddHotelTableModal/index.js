/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup"
import PropTypes from "prop-types"
import { useCallback } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import {
  hotelSelector,
  clearFormError,
  setError as setServerError,
} from "../../../../../../../../redux/HotelSlice"

import { useErrorMessage } from "../../../../../../../../utils/hooks"
import { TextInput } from "../../../../../../../../components/common"
import CustomCancel from "../../../../../../../../components/shared/Buttons/CustomButton"
import AddIcon from "../../../../../../../../assets/icons/addadmin.svg"
import CloseIcon from "../../../../../../../../assets/icons/redcross.svg"

import { tableDetailSchema } from "../../../../../../../../utils/validation"
import { AddHotelTableModalContainer } from "./elements"

const FIELDS_IN_ORDER = ["tableName", "seatCount"]

export const AddHotelTableModal = ({
  onHide,
  onSubmit,
  addUnits,
  show,
  setAddUnits,
}) => {
  const dispatch = useDispatch()

  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: {
      tableName: "",
      seatCount: "",
    },
    resolver: yupResolver(tableDetailSchema),
  })
  const {
    error: serverError,
    formError,
    isListLoading,
  } = useSelector(hotelSelector)

  const clearServerError = useCallback(() => {
    dispatch(setServerError(null))
    dispatch(clearFormError())
  }, [dispatch])

  useErrorMessage(errors, serverError, clearServerError, FIELDS_IN_ORDER)

  const onSubmitForm = useCallback(
    (data) => {
      setAddUnits((state) => [
        ...state,
        {
          seatCount: data.seatCount,
          tableName: data.tableName,
        },
      ])
      setValue("seatCount", "")
      setValue("tableName", "")
    },
    [setAddUnits, setValue]
  )
  const removeItems = (position) => {
    setAddUnits((state) => state.filter((item, index) => index !== position))
  }
  return (
    <AddHotelTableModalContainer
      buttonLabel="Save"
      description="Add table to the hotel"
      isButtonLoading={isListLoading}
      loadingButtonLabel="Saving"
      onButtonClick={onSubmit}
      onHide={onHide}
      show={show}
      title="Add table details"
      width="40rem"
      backdrop="static"
    >
      <form>
        <div className="form-container">
          <div className="row-container">
            <div className="course-name">
              <Controller
                control={control}
                name="tableName"
                render={(fields) => (
                  <TextInput
                    {...fields}
                    autoComplete="off"
                    errorMessage={
                      errors.tableName?.message || formError?.tableName
                    }
                    hasError={!!errors.tableName || !!formError.tableName}
                    label="Table Name"
                    placeholder="Enter table name"
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
                name="seatCount"
                render={(fields) => (
                  <TextInput
                    {...fields}
                    autoComplete="off"
                    hasError={!!errors.seatCount}
                    label="seat count"
                    placeholder="No of seat"
                    type="number"
                    id="seatCount"
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
                    <p className="mr-5">{item.tableName}</p>
                    <p>{item?.seatCount}</p>
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
    </AddHotelTableModalContainer>
  )
}

AddHotelTableModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
