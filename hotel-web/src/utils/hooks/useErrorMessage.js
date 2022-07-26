import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

const ERROR_ALERT_DURATION = 5000

export const useErrorMessage = (
  errors,
  serverError,
  clearServerError,
  fieldsInOrder
) => {
  const dispatch = useDispatch()
  const timeoutId = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [hasServerError, setHasServerError] = useState(false)

  useEffect(() => {
    const fieldsWithError = Object.keys(errors)
    const firstFieldWithError = fieldsInOrder.find((field) =>
      fieldsWithError.includes(field)
    )

    if (firstFieldWithError) {
      clearTimeout(timeoutId.current)
      clearServerError()
      setErrorMessage(errors[firstFieldWithError].message)
      setHasServerError(false)

      timeoutId.current = setTimeout(() => {
        setErrorMessage(null)
      }, ERROR_ALERT_DURATION)
    }
  }, [dispatch, clearServerError, errors, fieldsInOrder])

  useEffect(() => {
    if (serverError) {
      clearTimeout(timeoutId.current)
      setErrorMessage(serverError)
      setHasServerError(true)

      timeoutId.current = setTimeout(() => {
        clearServerError()
        setErrorMessage(null)
      }, ERROR_ALERT_DURATION)
    }
  }, [dispatch, clearServerError, serverError])

  return {
    errorMessage,
    hasServerError,
    setHasServerError,
  }
}
