/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup"
import PropTypes from "prop-types"
import { useCallback, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import {
  hotelSelector,
  clearFormError,
  setError as setServerError,
} from "../../../../../../../../redux/HotelSlice"

import { useErrorMessage } from "../../../../../../../../utils/hooks"
import { TextInput } from "../../../../../../../../components/common"

import { tableDetailSchema } from "../../../../../../../../utils/validation"
import { EditSessionContainer } from "./elements"

const FIELDS_IN_ORDER = ["tableName", "seatCount"]

export const EditFoodItemModal = ({ onHide, onSubmit, editDetails }) => {
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

  useEffect(() => {
    if (editDetails) {
      setValue("seatCount", editDetails.seatCount)
      setValue("tableName", editDetails.tableName)
    }
  }, [editDetails, setValue])

  return (
    <EditSessionContainer
      buttonLabel="Save"
      description="Edit table details"
      isButtonLoading={isListLoading}
      loadingButtonLabel="Saving"
      onButtonClick={handleSubmit(onSubmit)}
      onHide={onHide}
      show={!!editDetails}
      title="Edit table details of your hotel"
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
          </div>
        </div>
      </form>
    </EditSessionContainer>
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
