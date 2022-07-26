/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup"
import PropTypes from "prop-types"
import { useMemo, useCallback, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import {
  hotelSelector,
  clearFormError,
  setError as setServerError,
} from "../../../../../../redux/HotelSlice"

import { useErrorMessage } from "../../../../../../utils/hooks"
import { Select, TextInput } from "../../../../../../components/common"

import { foodDetailsSchema } from "../../../../../../utils/validation"
import { EditFoodModalContainer } from "./elements"

const FIELDS_IN_ORDER = ["foodName", "menuType"]

export const EditFoodItemModal = ({ onHide, onSubmit, editDetails }) => {
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
      ...(menuType || []).map((item) => ({
        label: item.menu_type_name,
        value: item.menu_type_id,
      })),
    ],
    [menuType]
  )

  useEffect(() => {
    if (editDetails) {
      setValue("menuType", {
        label: editDetails.menuType?.name,
        value: editDetails.menuType?.id,
      })

      setValue("foodName", editDetails.foodName)
    }
  }, [editDetails, setValue])

  return (
    <EditFoodModalContainer
      buttonLabel="Save"
      description="Edit food details"
      isButtonLoading={isListLoading}
      loadingButtonLabel="Saving"
      onButtonClick={handleSubmit(onSubmit)}
      onHide={onHide}
      show={!!editDetails}
      title="Edit food details to menu "
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
          </div>
        </div>
      </form>
    </EditFoodModalContainer>
  )
}

EditFoodItemModal.defaultProps = {
  editDetails: null,
}

EditFoodItemModal.propTypes = {
  editDetails: PropTypes.shape({
    id: PropTypes.string.isRequired,
    foodName: PropTypes.string.isRequired,
    menuType: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
