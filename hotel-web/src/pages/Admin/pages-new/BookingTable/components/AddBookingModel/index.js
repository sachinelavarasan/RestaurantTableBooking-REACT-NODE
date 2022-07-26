/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup"
import PropTypes from "prop-types"
import { useCallback, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import {
  userSelector,
  bookTable,
  clearFormError,
  setError as setServerError,
} from "../../../../../../redux/UserSlice"

import { useErrorMessage } from "../../../../../../utils/hooks"
import {
  DateInput,
  TextArea,
  TextInput,
} from "../../../../../../components/common"

import AddToastSuccessImg from "../../../../../../assets/icons/addtoastadmin.svg"
import { showToast } from "../../../../../../components/common/Toast"

import { bookingSchema } from "../../../../../../utils/validation"
import { AddBookingContainer } from "./elements"

const FIELDS_IN_ORDER = [
  "startDate",
  "endTime",
  "startTime",
  "description",
  "phone",
]

export const AddBookingModel = ({
  onHide,
  show,
  tableId,
  tableName,
  hotelId,
}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { control, errors, handleSubmit } = useForm({
    defaultValues: {
      startDate: new Date(),
      startTime: "",
      endTime: "",
      description: "",
      phone: "",
    },
    resolver: yupResolver(bookingSchema),
  })
  const { error: serverError, isLoading } = useSelector(userSelector)

  const clearServerError = useCallback(() => {
    dispatch(setServerError(null))
    dispatch(clearFormError())
  }, [dispatch])

  useErrorMessage(errors, serverError, clearServerError, FIELDS_IN_ORDER)

  const [eventDate, setEventDate] = useState(new Date())
  const onSubmit = useCallback(
    (data) => {
      const details = {
        ...data,
        bookingDate: eventDate,
        tableId,
      }
      if (!isLoading) {
        dispatch(
          bookTable(details, hotelId, () => {
            showToast(AddToastSuccessImg, `Table booked successfully `)
            onHide()
            history.replace(`/user/hotelList/${hotelId}/view`)
          })
        )
      }
    },
    [dispatch, onHide, isLoading, hotelId, history, tableId, eventDate]
  )

  return (
    <AddBookingContainer
      buttonLabel="Book"
      description="Add Booking details to hotel"
      isButtonLoading={isLoading}
      loadingButtonLabel="Saving"
      onButtonClick={handleSubmit(onSubmit)}
      onHide={onHide}
      show={show}
      title={`${tableName}`}
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
                  label="About party"
                  hasError={!!errors.description}
                  className="mb-3"
                  placeholder="Description"
                  rows="3"
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
                name="phone"
                render={(fields) => (
                  <TextInput
                    {...fields}
                    autoComplete="off"
                    errorMessage={
                      errors.phone?.message
                      // || formError?.endTime
                    }
                    hasError={
                      !!errors.phone
                      // || !!formError.startTime
                    }
                    label="Phone Number"
                    placeholder="Enter phone number"
                  />
                )}
              />
            </div>
            <div className="field-right">
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
                    onChange={(e) => {
                      fields.onChange(e)
                      setEventDate(e)
                    }}
                    className="start-date"
                  />
                )}
              />
            </div>
          </div>
          <div className="row-container pb-4">
            <div className="field-left">
              <Controller
                control={control}
                name="startTime"
                render={(fields) => (
                  <TextInput
                    {...fields}
                    autoComplete="off"
                    errorMessage={
                      errors.startTime?.message
                      // || formError?.startTime
                    }
                    hasError={
                      !!errors.startTime
                      // || !!formError.startTime
                    }
                    label="Start Time"
                    placeholder="Choose a start time"
                    type="time"
                  />
                )}
              />
            </div>
            <div className="field-right">
              <Controller
                control={control}
                name="endTime"
                render={(fields) => (
                  <TextInput
                    {...fields}
                    autoComplete="off"
                    errorMessage={
                      errors.endTime?.message
                      // || formError?.endTime
                    }
                    hasError={
                      !!errors.endTime
                      // || !!formError.startTime
                    }
                    label="End Time"
                    placeholder="Choose a end time"
                    type="time"
                  />
                )}
              />
            </div>
          </div>
        </div>
      </form>
    </AddBookingContainer>
  )
}

AddBookingModel.propTypes = {
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
