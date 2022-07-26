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
} from "../../../../../../redux/HotelSlice"

import { useErrorMessage } from "../../../../../../utils/hooks"
import { DateInput, TextArea } from "../../../../../../components/common"

import { offersSchema } from "../../../../../../utils/validation"
import { EditSessionContainer } from "./elements"

const FIELDS_IN_ORDER = ["startDate", "endDate", "description"]

export const EditOffersModel = ({ onHide, editDetails, onSubmit }) => {
  const dispatch = useDispatch()

  const { control, errors, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      startDate: new Date(),
      endDate: new Date(),
      description: "",
    },
    resolver: yupResolver(offersSchema),
  })
  const { error: serverError, isListLoading } = useSelector(hotelSelector)

  const clearServerError = useCallback(() => {
    dispatch(setServerError(null))
    dispatch(clearFormError())
  }, [dispatch])

  useErrorMessage(errors, serverError, clearServerError, FIELDS_IN_ORDER)

  useEffect(() => {
    if (editDetails) {
      setValue("startDate", editDetails.startDate)
      setValue("endDate", editDetails.endDate)
      setValue("description", editDetails.description)
    }
  }, [editDetails, setValue])

  return (
    <EditSessionContainer
      buttonLabel="Publish"
      description="Edit offer to your hotel"
      isButtonLoading={isListLoading}
      loadingButtonLabel="Saving"
      onButtonClick={handleSubmit(onSubmit)}
      onHide={onHide}
      show={!!editDetails}
      title="Edit offer details"
      width="40rem"
      backdrop="static"
    >
      <form>
        <div className="form-container">
          <div className="row-container">
            <Controller
              control={control}
              name="description"
              render={(fields) => (
                <TextArea
                  {...fields}
                  label="Offer Description"
                  hasError={!!errors.description}
                  className="mb-3"
                  placeholder="Details"
                  rows="7"
                  onChange={(e) => {
                    fields.onChange(e)
                  }}
                />
              )}
            />
          </div>

          <div className="row-container pb-4">
            <div className="field-left">
              <Controller
                control={control}
                name="startDate"
                render={(fields) => (
                  <DateInput
                    {...fields}
                    errorMessage={errors.startDate?.message}
                    hasError={!!errors.startDate}
                    label="Start Date"
                    placeholder="-Select-"
                    dateFormat="dd MMMM yyyy"
                  />
                )}
              />
            </div>
            <div className="field-right">
              <Controller
                control={control}
                name="endDate"
                render={(fields) => (
                  <DateInput
                    {...fields}
                    label="End Date"
                    errorMessage={errors.endDate?.message}
                    hasError={!!errors.endDate}
                    placeholder="-Select-"
                    dateFormat="dd MMMM yyyy"
                    minDate={watch("startDate")}
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

EditOffersModel.propTypes = {
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
